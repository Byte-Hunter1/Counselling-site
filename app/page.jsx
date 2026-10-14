import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hope from "@/components/Hope";
import WhoIHelp from "@/components/WhoIHelp";
import Statement from "@/components/Statement";
import HowIWork from "@/components/HowIWork";
import Specialties from "@/components/Specialties";
import Office from "@/components/Office";
import Faq from "@/components/Faq";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import { site, faqs } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      name: site.name,
      description: "Licensed clinical psychologist offering anxiety, panic, trauma, EMDR, and burnout therapy for adults in Santa Monica, CA, in person and via telehealth across California.",
      image: "/images/office-1.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
      areaServed: [{ "@type": "City", name: "Santa Monica" }, { "@type": "State", name: "California" }],
      founder: { "@type": "Person", name: "Dr. Maya Reynolds, PsyD", jobTitle: "Licensed Clinical Psychologist" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hope />
        <WhoIHelp />
        <Statement />
        <HowIWork />
        <Specialties />
        <Office />
        <Faq />
        <Book />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
