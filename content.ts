// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const hero = {
  name: "Madhu",
  role: "Photographer",
  location: "Berlin, Germany",
  headline:
    "I chase light for a living — and for fun. Street scenes, quiet portraits, and the odd sunrise that made getting out of bed worth it.",
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I picked up a camera to document a trip and never really put it down again. What started as travel snapshots turned into a habit of noticing — the way light lands on a wall at 6pm, the half-second before someone's expression settles.",
    "I shoot mostly street and portrait work, with a soft spot for film. There's something about not knowing what you got until the roll comes back that keeps me honest — fewer, more deliberate frames instead of a thousand almost-photos.",
    "When I'm not shooting, I'm probably scouting locations on foot, elbow-deep in a Lightroom catalog at 1am, or trying to convince a friend that yes, we do need to wake up before sunrise for this.",
  ],
};

export const experience = {
  heading: "Journey",
  roles: [
    {
      title: "Freelance Photographer",
      company: "Self-employed",
      period: "2023 — Present",
      summary:
        "Shooting portraits, events, and personal street series around Berlin. Building a body of work one roll of film and one memory card at a time.",
    },
    {
      title: "Featured Artist",
      company: "Neukölln Open Studios",
      period: "2023",
      summary:
        "Exhibited a 12-print street photography series exploring solitude in a crowded city. First time seeing my own work on a gallery wall.",
    },
    {
      title: "Where it started",
      company: "A borrowed camera, a long trip",
      period: "2019",
      summary:
        "Picked up a friend's old DSLR for a month of travel and came home with 4,000 photos and a new obsession. Never looked back.",
    },
  ],
};

export const projects = {
  heading: "Featured series",
  items: [
    {
      title: "Strangers of the S-Bahn",
      year: "2024",
      summary:
        "A candid street portrait series shot entirely on Berlin's commuter trains — six months, one camera, and a lot of quietly asking permission afterward.",
      link: { label: "View series", href: "#" },
    },
    {
      title: "Concrete & Light",
      year: "2023",
      summary:
        "Berlin's brutalist architecture at golden hour. A study in how harsh, blocky buildings soften completely for about twenty minutes a day.",
      link: { label: "View series", href: "#" },
    },
    {
      title: "Ilford Diaries",
      year: "2023 — ongoing",
      summary:
        "A running black-and-white film journal — one roll a month, no digital backup plan, no do-overs. Currently on roll #14.",
      link: { label: "View series", href: "#" },
    },
  ],
};

export const skills = {
  heading: "Gear & craft",
  groups: [
    {
      label: "Photography",
      items: ["Street photography", "Portraiture", "Film photography", "Long exposure", "Natural light"],
    },
    {
      label: "Gear",
      items: ["Fujifilm X-T4", "35mm f/1.4", "Ilford HP5 film", "A very patient tripod"],
    },
    {
      label: "Post",
      items: ["Lightroom", "Capture One", "Darkroom printing", "Film scanning"],
    },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [
    {
      text:
        "Madhu has this way of making you forget there's a camera pointed at you at all — and somehow that's exactly when the best shot happens.",
      author: "Lena Brandt",
      role: "Portrait client",
    },
    {
      text:
        "I've seen a lot of Berlin street photography. The S-Bahn series stuck with me because it's not about the city — it's about the ten seconds before someone notices they're being seen.",
      author: "Jonas Richter",
      role: "Curator, Neukölln Open Studios",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Open to portrait sessions, collaborations, and prints. Based in Berlin, happy to travel for the right light.",
  email: "madhu@example.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/yourname" },
    { label: "500px", href: "https://500px.com/yourname" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  ],
};

export const meta = {
  title: "Madhu — Photographer",
  description: "Berlin-based photographer. Street, portrait, and film work.",
};
