import { Link } from "react-router";
import type { Route } from "./+types/terms";

export function meta(): Route.MetaArgs {
  const title = "Terms and Conditions | THU Furniture";
  const description = "Terms and conditions for THU Furniture. Please read our terms of service before using our website.";
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

export default function Terms() {
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
            <li className="text-[#2E2C2A]">Terms and Conditions</li>
          </ol>
        </nav>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#2E2C2A] mb-8">
            Terms and Conditions
          </h1>
          
          <div className="space-y-8 text-[#6B6965]">
            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">1. Acceptance of Terms</h2>
              <p className="text-base leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">2. Use License</h2>
              <p className="text-base leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on THU Furniture's website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">3. Disclaimer</h2>
              <p className="text-base leading-relaxed">
                The materials on THU Furniture's website are provided on an 'as is' basis. THU Furniture makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">4. Limitations</h2>
              <p className="text-base leading-relaxed">
                In no event shall THU Furniture or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on THU Furniture's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2E2C2A] mb-4">5. Revisions</h2>
              <p className="text-base leading-relaxed">
                THU Furniture may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
