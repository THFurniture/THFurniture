export function meta() {
  return [
    { title: "Contact | TH Furniture" },
    {
      name: "description",
      content: "Get in touch with TH Furniture to inquire about our collection.",
    },
  ];
}

import { ContactForm } from "~/components/contact/contact-form";

export default function Contact() {
  return <ContactForm />;
}

