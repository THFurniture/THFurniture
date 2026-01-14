import type { ActionFunctionArgs } from "react-router";
import { ContactForm } from "~/components/contact/contact-form";

export function meta() {
  const title = "Contact | THU Furniture";
  const description =
    "Get in touch with THU Furniture to inquire about our collection or schedule a consultation.";
  const image =
    "https://www.thufurniture.ca/furniture/thomas_arm_chair/thomas-arm-chair.webp";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

// =============================================================================
// RATE LIMITING (In-memory store - resets on serverless cold start)
// =============================================================================
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // Max 5 submissions per window
};

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return false;
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

// =============================================================================
// ROBUST HTML SANITIZATION (No external libraries)
// =============================================================================

/** HTML entity decode map */
const HTML_ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
  "&#x27;": "'",
  "&#x2F;": "/",
  "&#60;": "<",
  "&#62;": ">",
};

/** Decode HTML entities to catch encoded attacks */
function decodeHTMLEntities(input: string): string {
  let result = input;

  // Decode named entities
  for (const [entity, char] of Object.entries(HTML_ENTITIES)) {
    result = result.replace(new RegExp(entity, "gi"), char);
  }

  // Decode numeric entities (decimal)
  result = result.replace(/&#(\d+);/g, (_, num) =>
    String.fromCharCode(parseInt(num, 10))
  );

  // Decode numeric entities (hex)
  result = result.replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

  return result;
}

/** Robust HTML sanitization - strips all HTML/script content */
function sanitizeInput(input: string): string {
  let result = input;

  // First pass: decode HTML entities (catches encoded attacks)
  result = decodeHTMLEntities(result);

  // Second pass: decode again (catches double-encoded attacks)
  result = decodeHTMLEntities(result);

  // Remove all HTML tags (including malformed ones)
  result = result.replace(/<[^>]*>?/g, "");

  // Remove javascript: and data: protocols
  result = result.replace(/javascript:/gi, "");
  result = result.replace(/data:/gi, "");
  result = result.replace(/vbscript:/gi, "");

  // Remove event handlers that might have survived
  result = result.replace(/on\w+\s*=/gi, "");

  // Remove null bytes and other control characters (except newlines for messages)
  result = result.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

  return result.trim();
}

/** Validate email format with a strict regex */
function isValidEmail(email: string): boolean {
  // More comprehensive email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254 && email.length >= 5;
}

/** Strip newline characters to prevent header injection */
function sanitizeHeader(input: string): string {
  return input.replace(/[\r\n\t]/g, "").trim();
}

/** Validate phone number format */
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Phone is optional

  // Remove all spaces, dashes, parentheses for validation
  const digitsOnly = phone.replace(/[\s\-\(\)\.]/g, "");

  // Must start with + and contain 7-15 digits (E.164 standard)
  const phoneRegex = /^\+[1-9]\d{6,14}$/;

  return phoneRegex.test(digitsOnly);
}

/** Normalize phone number to E.164 format */
function normalizePhone(phone: string): string {
  if (!phone) return "";

  // Remove all non-digit characters except leading +
  const cleaned = phone.replace(/[^\d+]/g, "");

  // Ensure it starts with +
  if (!cleaned.startsWith("+")) {
    return "+" + cleaned;
  }

  return cleaned;
}

// =============================================================================
// VALIDATION LIMITS
// =============================================================================
const LIMITS = {
  firstName: { min: 1, max: 50 },
  lastName: { min: 1, max: 50 },
  email: { min: 5, max: 254 },
  phone: { max: 20 },
  message: { min: 10, max: 2000 },
};

// =============================================================================
// GENERIC ERROR MESSAGE (doesn't leak validation details)
// =============================================================================
const GENERIC_ERROR = "Unable to process your request. Please check your information and try again.";
const RATE_LIMIT_ERROR = "Too many requests. Please wait a few minutes before trying again.";
const SERVER_ERROR = "Something went wrong on our end. Please try again later.";

// =============================================================================
// FETCH WITH TIMEOUT
// =============================================================================
async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeoutMs: number = 10000
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

// =============================================================================
// SERVER ACTION
// =============================================================================
export async function action({ request }: ActionFunctionArgs) {
  // -------------------------------------------------------------------------
  // 1. Origin Check - Only allow requests from thufurniture.ca
  // -------------------------------------------------------------------------
  const origin = request.headers.get("origin");
  const allowedOrigins = [
    "https://thufurniture.ca",
    "https://www.thufurniture.ca",
  ];

  // In development, allow localhost
  const isDev = process.env.NODE_ENV === "development";
  if (isDev) {
    allowedOrigins.push("http://localhost:5173", "http://localhost:3000");
  }

  if (!origin || !allowedOrigins.includes(origin)) {
    return { success: false, error: GENERIC_ERROR };
  }

  // -------------------------------------------------------------------------
  // 2. Rate Limiting by IP
  // -------------------------------------------------------------------------
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return { success: false, error: RATE_LIMIT_ERROR };
  }

  // -------------------------------------------------------------------------
  // 3. Parse Form Data
  // -------------------------------------------------------------------------
  const formData = await request.formData();

  const honeypot = formData.get("website") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phoneCode = formData.get("phoneCode") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const message = formData.get("message") as string;
  const productContext = formData.get("productContext") as string;

  // -------------------------------------------------------------------------
  // 4. Honeypot Check - Silently reject bot submissions
  // -------------------------------------------------------------------------
  if (honeypot) {
    // Return fake success to not alert the bot
    return { success: true };
  }

  // -------------------------------------------------------------------------
  // 5. Validate Required Fields Exist
  // -------------------------------------------------------------------------
  if (!firstName || !lastName || !email || !message) {
    return { success: false, error: GENERIC_ERROR };
  }

  // -------------------------------------------------------------------------
  // 6. Sanitize All Inputs (Robust HTML stripping)
  // -------------------------------------------------------------------------
  const sanitizedData = {
    firstName: sanitizeInput(firstName),
    lastName: sanitizeInput(lastName),
    email: sanitizeInput(email).toLowerCase(),
    phone: phoneNumber ? normalizePhone(`${phoneCode || "+1"}${phoneNumber}`) : "",
    message: sanitizeInput(message),
    productContext: sanitizeInput(productContext || ""),
  };

  // -------------------------------------------------------------------------
  // 7. Validate All Fields (Generic error for all validation failures)
  // -------------------------------------------------------------------------
  const validationChecks = [
    // First name length
    sanitizedData.firstName.length >= LIMITS.firstName.min &&
      sanitizedData.firstName.length <= LIMITS.firstName.max,
    // Last name length
    sanitizedData.lastName.length >= LIMITS.lastName.min &&
      sanitizedData.lastName.length <= LIMITS.lastName.max,
    // Email length and format
    sanitizedData.email.length >= LIMITS.email.min &&
      sanitizedData.email.length <= LIMITS.email.max &&
      isValidEmail(sanitizedData.email),
    // Phone format (if provided)
    sanitizedData.phone.length <= LIMITS.phone.max &&
      isValidPhone(sanitizedData.phone),
    // Message length
    sanitizedData.message.length >= LIMITS.message.min &&
      sanitizedData.message.length <= LIMITS.message.max,
  ];

  if (validationChecks.some((check) => !check)) {
    return { success: false, error: GENERIC_ERROR };
  }

  // -------------------------------------------------------------------------
  // 8. Build Email Content
  // -------------------------------------------------------------------------
  const fullName = `${sanitizedData.firstName} ${sanitizedData.lastName}`;

  // Sanitize subject to prevent header injection
  const subject = sanitizeHeader(`New Inquiry from ${fullName}`);

  // Build text body
  let textBody = `
New Contact Form Submission
============================

Name: ${fullName}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || "Not provided"}

`;

  if (sanitizedData.productContext) {
    textBody += `Product Interest: ${sanitizedData.productContext}\n\n`;
  }

  textBody += `Message:
${sanitizedData.message}
`;

  // Build HTML body
  let htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Georgia, serif; line-height: 1.6; color: #2E2C2A; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="border-bottom: 2px solid #2E2C2A; padding-bottom: 20px; margin-bottom: 30px;">
    <h1 style="margin: 0; font-size: 24px; color: #2E2C2A;">New Contact Form Submission</h1>
  </div>
  
  <div style="background-color: #F9F7F4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${fullName}</p>
    <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedData.email}" style="color: #A0685F;">${sanitizedData.email}</a></p>
    <p style="margin: 0;"><strong>Phone:</strong> ${sanitizedData.phone || "Not provided"}</p>
  </div>
`;

  if (sanitizedData.productContext) {
    htmlBody += `
  <div style="background-color: #F0EEE9; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #A0685F;">
    <p style="margin: 0; font-size: 14px; color: #6B6965;"><strong>Product Interest:</strong></p>
    <p style="margin: 5px 0 0 0; color: #2E2C2A;">${sanitizedData.productContext}</p>
  </div>
`;
  }

  htmlBody += `
  <div style="margin-top: 20px;">
    <h2 style="font-size: 18px; margin-bottom: 10px; color: #2E2C2A;">Message</h2>
    <div style="background-color: #fff; padding: 20px; border: 1px solid #E0DDD6; border-radius: 8px;">
      <p style="margin: 0; white-space: pre-wrap;">${sanitizedData.message}</p>
    </div>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E0DDD6; font-size: 12px; color: #6B6965;">
    <p style="margin: 0;">This email was sent from the contact form at thufurniture.ca</p>
  </div>
</body>
</html>
`;

  // -------------------------------------------------------------------------
  // 9. Send Email via Resend API (with timeout)
  // -------------------------------------------------------------------------
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return { success: false, error: SERVER_ERROR };
  }

  try {
    const response = await fetchWithTimeout(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Hardcoded verified sender - NEVER use user input here
          from: "THU Furniture <noreply@thufurniture.ca>",
          to: ["hellothufurniture@gmail.com"],
          // User email only in reply_to for safety
          reply_to: sanitizedData.email,
          subject: subject,
          text: textBody,
          html: htmlBody,
        }),
      },
      10000 // 10 second timeout
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return { success: false, error: SERVER_ERROR };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("Resend API timeout");
    } else {
      console.error("Email sending error:", error);
    }
    return { success: false, error: SERVER_ERROR };
  }
}

// =============================================================================
// COMPONENT
// =============================================================================
export default function Contact() {
  return <ContactForm />;
}
