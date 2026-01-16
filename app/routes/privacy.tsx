import { Link } from "react-router";
import type { Route } from "./+types/privacy";

export function meta(): Route.MetaArgs {
  const title = "Privacy Policy | THU Furniture";
  const description = "Privacy policy for THU Furniture. Learn how we collect, use, and protect your personal information.";
  const image = "https://www.thufurniture.ca/furniture/thomas_arm_chair/thomas-arm-chair.webp";

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

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <ol className="flex items-center gap-2 text-sm text-[#6B6965]">
            <li>
              <Link to="/" className="hover:text-[#2E2C2A] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#2E2C2A]">Privacy Policy</li>
          </ol>
        </nav>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#2E2C2A] mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-[#6B6965]">
            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">1. Information We Collect</h2>
              <p className="text-base leading-relaxed">
                We collect information that you provide directly to us, such as when you create an account, make a purchase, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, shipping address, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">2. How We Use Your Information</h2>
              <p className="text-base leading-relaxed">
                We use the information we collect to process your orders, communicate with you about your orders and our products, improve our services, and send you marketing communications if you have opted in to receive them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">3. Information Sharing</h2>
              <p className="text-base leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website, conducting our business, or serving our users, as long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">4. Data Security</h2>
              <p className="text-base leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">5. Your Rights</h2>
              <p className="text-base leading-relaxed">
                You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving marketing communications from us by following the unsubscribe instructions in those emails.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">6. Contact Us</h2>
              <p className="text-base leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:hellothufurniture@gmail.com" className="text-[#A0685F] hover:text-[#2E2C2A] transition-colors">
                  hellothufurniture@gmail.com
                </a>{" "}
                or{" "}
                <a href="tel:+17785806609" className="text-[#A0685F] hover:text-[#2E2C2A] transition-colors">
                  +1 778 580 6609
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
