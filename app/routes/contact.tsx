export function meta() {
  const title = "Contact | THU Furniture";
  const description = "Get in touch with THU Furniture to inquire about our collection or schedule a consultation.";
  const image = "https://thfurniture.com/logos/THU_logo_black.png";

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

import { ContactForm } from "~/components/contact/contact-form";

export default function Contact() {
  return <ContactForm />;
}

