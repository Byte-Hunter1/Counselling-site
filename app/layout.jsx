import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/figtree";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica, CA offering anxiety, panic, trauma, EMDR, and burnout therapy for adults. In-person and secure telehealth across California.",
  keywords: ["anxiety therapist Santa Monica", "trauma therapy Santa Monica", "EMDR Santa Monica", "burnout therapy Santa Monica CA", "clinical psychologist Santa Monica", "telehealth therapy California"],
  openGraph: {
    title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description: "Therapy for anxiety, panic, trauma, and burnout in Santa Monica, CA. In person or secure telehealth for adults across California.",
    type: "website",
    images: ["/images/maya-reynolds.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
