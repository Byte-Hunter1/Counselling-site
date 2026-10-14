// Single source of truth for copy. Everything here is derived from Dr. Maya Reynolds' profile.
// NOTE: the profile lists no phone, email or scheduling link, so none are invented.
// Point BOOKING_URL at her real scheduling page / contact form when available.
export const BOOKING_URL = "#book";

export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  role: "Licensed Clinical Psychologist",
  city: "Santa Monica",
  address: { street: "123th Street 45 W", city: "Santa Monica", region: "CA", zip: "90401" },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=123th+Street+45+W+Santa+Monica+CA+90401",
};

export const nav = [
  { label: "About", href: "#about" },
  {
    label: "Specialties",
    children: [
      { label: "Anxiety & Panic", href: "#specialties" },
      { label: "Trauma", href: "#specialties" },
      { label: "Burnout & Perfectionism", href: "#specialties" },
    ],
  },
  {
    label: "Methods",
    children: [
      { label: "CBT", href: "#about" },
      { label: "EMDR", href: "#specialties" },
      { label: "Mindfulness-Based Practices", href: "#about" },
      { label: "Body-Oriented Techniques", href: "#about" },
    ],
  },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#book" },
];

export const hero = {
  eyebrow: "In-person therapy in Santa Monica & secure telehealth across California",
  titleStart: "Anxiety and trauma therapy in Santa Monica, CA to help you finally",
  titleAccent: "exhale.",
  sub: "Licensed clinical psychologist Dr. Maya Reynolds helps overwhelmed, high-achieving adults move from overthinking and burnout toward calm, resilience, and a steadier relationship with themselves.",
  cta: "Schedule a session",
};

export const hope = {
  title: "You look like you have it all together.",
  accent: "Inside, you’re running on empty.",
  lead: "In my Santa Monica practice, you can finally put the weight down.",
  body: [
    "Maybe it’s constant worry, tension in your body, trouble sleeping, or the feeling that you’re always bracing for something to go wrong. You may be thoughtful, self-aware, and successful, and still stuck in overthinking or emotionally on edge.",
    "Whether you’re facing anxiety, panic, the lingering effects of past experiences, or professional burnout, you deserve support that looks after both your mind and your body. I offer therapy in person in Santa Monica and online for adults anywhere in California.",
  ],
};

export const whoIHelp = {
  title: "Who I",
  accent: "help",
  items: [
    {
      title: "Adults with anxiety & panic",
      text: "Constant worry, racing thoughts, and a body that won’t switch off are exhausting. Together we’ll use CBT, mindfulness, and body-oriented tools to calm your nervous system and ease the overthinking.",
      art: "ripples",
      alt: "Calm concentric ripples in slate blue and honey, representing a settling nervous system",
    },
    {
      title: "Adults healing from trauma",
      text: "Whether it was a single event or long-standing patterns from childhood, relationships, or chronic stress, we’ll go at a careful pace, building safety and stability first so you feel more regulated in daily life.",
      art: "arch",
      alt: "A softly lit archway in slate and honey, representing a safe way forward",
    },
    {
      title: "Burned-out professionals, creatives & entrepreneurs",
      text: "After years of pushing through stress, it’s easy to feel disconnected from yourself. Therapy becomes a place to slow down, loosen perfectionism, and build more sustainable ways of living and working.",
      art: "dunes",
      alt: "Gentle rolling dunes under a low honey-colored sun, representing slowing down",
    },
  ],
};

export const statement = {
  title: "You deserve a space to slow down, be understood, and feel steady again.",
  accent: "You don’t have to keep pushing through alone.",
};

export const expertise = {
  title: "Areas of",
  accent: "expertise",
  items: [
    "Anxiety",
    "Panic",
    "Trauma",
    "Complex trauma",
    "Burnout",
    "Perfectionism",
    "Overthinking",
    "Stress",
    "Difficulty sleeping",
    "Body tension",
    "High internal pressure",
  ],
  more: "…and more.",
};

export const how = {
  eyebrow: "How I work",
  title: "Warm, collaborative, and grounded therapy in Santa Monica.",
  lead: "Many of my clients are thoughtful, self-aware, and high-achieving, and still feel stuck in overthinking or emotionally on edge.",
  body: [
    "I’m Dr. Maya Reynolds, a licensed clinical psychologist (PsyD) based in Santa Monica, California. I offer therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.",
    "Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods, including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, so we can understand both the emotional and physiological sides of what you’re experiencing.",
    "I believe therapy works best when you feel respected, understood, and actively involved in the process. My goal isn’t only symptom relief. It’s helping you develop insight, resilience, and a stronger relationship with yourself over time.",
  ],
  facts: ["Licensed Clinical Psychologist, PsyD", "Santa Monica, California", "In person & secure telehealth"],
  cta: "Work with me",
  photoAlt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA",
};

export const specialties = {
  title: "Honoring where you’ve been",
  amp: "&",
  title2: "helping you feel steady where you’re headed.",
  sub: "My",
  subAccent: "specialties",
  subEnd: "include…",
  items: [
    {
      title: "Anxiety & Panic Therapy",
      text: "If worry never quite switches off, you may be living with tension in your body, sleepless nights, and the feeling that something is about to go wrong. Using CBT, mindfulness-based practices, and body-oriented techniques, we’ll work with both your thoughts and your body’s stress response, so you can feel calmer and more in control.",
    },
    {
      title: "Trauma Therapy & EMDR",
      text: "I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that stem from childhood, relationships, or chronic stress. With EMDR and a carefully paced approach centered on safety and stabilization, we’ll help you feel more regulated in daily life, not just during sessions.",
    },
    {
      title: "Burnout & Perfectionism Therapy",
      text: "Years of pushing through can leave you exhausted and disconnected from yourself. This work is for professionals, creatives, and entrepreneurs living with high internal pressure. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    },
  ],
  cta: "Get started",
};

export const office = {
  eyebrow: "Our Office",
  title: "A calm, private space in Santa Monica.",
  accent: "Designed to help you feel at ease.",
  body: [
    "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
    "You’re welcome to meet in person here, or choose a secure telehealth session if you’re located in California. Either way, the goal is the same: a setting where you can slow down and feel safe.",
  ],
  details: [
    { label: "Address", value: "123th Street 45 W, Santa Monica, CA 90401" },
    { label: "Session options", value: "In-person in Santa Monica or secure telehealth for clients in California" },
    { label: "What to expect", value: "A quiet, private room with natural light and comfortable seating" },
  ],
  directions: "Get directions",
  images: [
    { src: "/images/office-1.jpg", w: 1400, h: 1050, alt: "Sunlit therapy room with a gray sofa, glass coffee table, swivel armchair, and tall windows in Dr. Reynolds’ Santa Monica office" },
    { src: "/images/office-2.jpg", w: 1400, h: 1050, alt: "Counseling space with a leather armchair, round side table, sheer curtains, and a bookshelf" },
    { src: "/images/office-shelf.jpg", w: 800, h: 824, alt: "Shelving with books, woven baskets, and a teal vase in the therapy office" },
  ],
};

export const faqs = {
  title: "Frequently asked",
  accent: "questions",
  items: [
    { q: "Do you offer in-person or online therapy?", a: "Both. I see clients in person at my Santa Monica office and offer secure telehealth sessions for clients located in California." },
    { q: "Who do you work with?", a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful, and self-aware, yet feel exhausted, stuck in overthinking, or emotionally on edge." },
    { q: "What does anxiety therapy with you look like?", a: "Sessions are structured enough to feel supportive while leaving space for reflection and depth. I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to address both the emotional and physiological sides of anxiety and panic." },
    { q: "How do you approach trauma therapy?", a: "Carefully, and at a pace that fits you. I work with single-incident trauma and with more complex, long-standing patterns, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life, not just during sessions." },
    { q: "I seem fine on the outside. Is therapy right for me?", a: "Often, yes. Many of my clients feel “functional” while quietly struggling with constant worry, tension in the body, difficulty sleeping, or the sense that they’re always bracing for something to go wrong." },
    { q: "Can you help with burnout and perfectionism?", a: "Yes. I frequently support entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy can help you slow down, reconnect, and build more sustainable ways of living and working." },
    { q: "What is your Santa Monica office like?", a: "It’s a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment." },
    { q: "Do you see children or couples?", a: "My practice is focused on therapy for adults." },
  ],
};

export const book = {
  eyebrow: "Schedule a session",
  title: "Find a therapist who is the right",
  accent: "fit",
  titleEnd: "for you.",
  body: [
    "Reaching out is a meaningful first step. If you’re looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit.",
    "Choose in-person sessions at my Santa Monica office or secure telehealth from anywhere in California.",
  ],
  cta: "Schedule a session",
};

export const footer = {
  blurb: "I want to make getting started simple. Meet with me in person at my Santa Monica office or schedule a secure telehealth session from anywhere in California.",
  area: "Serving Santa Monica, CA and adults across California via telehealth.",
  note: "Dr. Maya Reynolds is a fictional therapist; this is a design exercise.",
};
