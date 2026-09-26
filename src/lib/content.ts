export const site = {
  candidateName: "Kathleen Defever",
  occupationTitle: "Attorney / Planning Commissioner",
  office: "Tiburon Town Council",
  electionYear: "2026",
  tagline:
    "Over 8 years of service to Tiburon. A record of showing up, listening, and getting things done.",
  address: ["1550 G Tiburon Boulevard", "#500", "Tiburon, CA 94920", "USA"],
  instagramUrl: "https://www.instagram.com/kathleen_defever",
};

export const credentials = [
  "Planning Commissioner, Town of Tiburon",
  "President, Tiburon-Belvedere Rotary",
  "Board Member, Farley Place",
  "Co-Founder, Firewise Community",
];

export const introParagraphs = [
  "Kathleen has been active in the Tiburon community for over 8 years – service to her community is not only a priority in her life, but also a pleasure. She has served on the Tiburon Planning Commission for over 8 years. She's President of the Tiburon-Belvedere Rotary Club, a non-profit service organization.",
  "During Kathleen's tenure with the Planning Commission, she has approved many new downtown businesses for operations. As a result, downtown Tiburon is now undergoing an unprecedented, much-needed revitalization. Kathleen loves her work on the Planning Commission.",
  "Kathleen prioritizes fire safety and emergency preparedness. In her private law practice, she advocates for California fire victims. In her free time, she successfully certified her neighborhood as a nationally-recognized Firewise community – proving that Kathleen does not just talk about the need for fire safety – she actively works toward fire prevention.",
  "Kathleen is also the President of the Tiburon-Belvedere Rotary, a non-profit organization dedicated solely to service to the community.",
  "When she is not serving her community, Kathleen is a successful, internationally-recognized consumer insurance attorney, most recently assisting dozens of fire victims every year in their pursuit of recovery from the devastating California wildfires.",
];

// Photos are all of Tiburon. Wikimedia Commons images are used under their
// Creative Commons licenses, which require the credit shown with each photo —
// keep `credit` when swapping an image, or drop it for campaign-owned photos.
export type Priority = {
  title: string;
  description: string;
  icon: "route" | "home" | "heart" | "flame" | "leaf";
  image: { src: string; alt: string };
  credit?: { text: string; href: string };
};

export const priorities: Priority[] = [
  {
    title: "Tiburon Boulevard Traffic",
    description:
      "Improving traffic flow and safety along Tiburon Boulevard and the town's busiest intersections.",
    icon: "route",
    image: {
      src: "/priorities/traffic.jpg",
      alt: "Aerial view of Tiburon Boulevard and the downtown roundabout",
    },
  },
  {
    title: "Housing",
    description:
      "Reducing the local impact of state housing mandates while protecting Tiburon's character.",
    icon: "home",
    image: {
      src: "/priorities/housing.jpg",
      alt: "Homes on the Tiburon hillside above the harbor",
    },
  },
  {
    title: "Improving Senior Services",
    description:
      "Improving services for seniors across Tiburon, so long-time residents can stay in the community they helped build.",
    icon: "heart",
    image: {
      src: "/priorities/senior-services.jpg",
      alt: "Residents strolling along Main Street in downtown Tiburon",
    },
    credit: {
      text: "Photo: MARELBU, CC BY 3.0",
      href: "https://commons.wikimedia.org/wiki/File:Tiburon,_California_USA_-_Downtown_Tiburon_-_panoramio_(10).jpg",
    },
  },
  {
    title: "Fire Prevention & Emergency Preparedness",
    description:
      "Building on a Firewise-certified track record to keep Tiburon neighborhoods ready and resilient.",
    icon: "flame",
    image: {
      src: "/priorities/fire-station.jpg",
      alt: "The Tiburon Fire District station",
    },
    credit: {
      text: "Photo: Johan Jönsson, CC BY-SA 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Tiburon_Fire_Station.jpg",
    },
  },
  {
    title: "Open Space Preservation",
    description:
      "Protecting Tiburon's world-class open spaces, improving our parks, and supporting the arts.",
    icon: "leaf",
    image: {
      src: "/priorities/open-space.jpg",
      alt: "A trail on Ring Mountain overlooking the Tiburon Peninsula and the Bay",
    },
    credit: {
      text: "Photo: Frank Schulenburg, CC BY-SA 4.0",
      href: "https://commons.wikimedia.org/wiki/File:View_of_the_Tiburon_Peninsula_and_the_Bay_from_Ring_Mountain.jpg",
    },
  },
];

export const journey = [
  {
    year: "2018",
    title: "Appointed to the Planning Commission",
    body: "Began reviewing land use, permits, and long-range planning for the Town of Tiburon.",
  },
  {
    year: "2020–Present",
    title: "Elected President, Rotary Club of Tiburon-Belvedere",
    body: "Leading a non-profit organization of professionals dedicated to integrity and \"service above self.\"",
  },
  {
    year: "2020–21",
    title: "Elected Chair of the Planning Commission",
    body: "Led the review of dozens of downtown business permits during a critical revitalization period. The chair role rotates among commissioners each term.",
  },
  {
    year: "2021",
    title: "Co-led Tiburon's first Firewise-certified neighborhood",
    body: "Built one of the peninsula's earliest nationally recognized fire-safety certifications, block by block.",
  },
  {
    year: "2022–Present",
    title: "Joined the Farley Place Board",
    body: "Serving on the board of Farley Place, an affordable senior community serving Tiburon and Belvedere.",
  },
  {
    year: "2026",
    title: "Filed for Tiburon Town Council",
    body: "Running for one of three open seats in the November 3 general election.",
  },
];

export const aboutKathleen = [
  "Kathleen grew up on a beautiful farm in Michigan, where she learned a true sense of honesty and community from her humble, small-town Midwestern roots. She moved to Tiburon almost twenty years ago, drawn to its natural beauty and world-class sophistication, and has called it home ever since.",
  "Kathleen manages her own law practice, Defever Law, and an advisory firm, MisInsured, representing only insurance consumers – never insurance companies. She began her law career defending federal criminals with the prestigious Federal Criminal Defender's Office in Chicago, Illinois, before shifting to a nationwide practice in Plaintiff's Insurance Litigation, helping both the disabled and those who lost their homes to fires and floods – most recently victims of the Malibu and Altadena Fires in Southern California. She holds a B.A. and J.D. from DePaul University and an LL.M. in Insurance Law from the University of Connecticut, and is currently pursuing a Ph.D. in International Insurance Law (2023–Present).",
  "Kathleen believes in service above self. She's the six-year President of the Rotary Club of Tiburon-Belvedere, a four-year Board Member of Farley Place – an affordable Senior Community serving Tiburon and Belvedere – and a dedicated advocate for wildfire safety, representing wildfire victims in her practice while leading her own neighborhood to Firewise USA certification.",
  "Kathleen loves to read about history, sociology, psychology, and economics. She also loves the opera, great wines, wellness and spirituality, and French and Italian food. She speaks intermediate French and some Spanish.",
];

export const achievements = [
  "Tiburon Planning Commission, 2018-Present",
  "DePaul University (B.A., J.D.)",
  "University of Connecticut (L.L.M.)",
  "International Insurance Law PhD, 2023-Present",
  "Manages her own law practice, Defever Law, and an advisory firm, MisInsured, representing only insurance consumers – never insurance companies",
];

export const memberships = [
  "Association Internationale de Droit des Assurances – International Association of Insurance Law",
  "California Bar Association",
  "Rotary International",
  "Marin Women's Political Action Committee",
  "American Women's Club Brussels",
];

export const stats = [
  { value: "8+", label: "Years serving Tiburon on the Planning Commission" },
  { value: "4", label: "Years on the Farley Place Board, serving local seniors" },
  { value: "6", label: "Years as President, Tiburon-Belvedere Rotary" },
  { value: "1st", label: "Firewise-certified neighborhood, co-founded" },
];

// Kathleen is actively collecting more of these — update as new ones come in.
// Set `organization: true` for groups (unions, PACs, newspapers) — they're
// shown in their own, larger row above the individual endorsers.
export const endorsements: {
  name: string;
  title: string;
  logo?: string;
  organization?: boolean;
}[] = [
  { name: "Alice Fredericks", title: "Tiburon Town Council" },
  { name: "Erica Williams", title: "Tiburon Planning Commission" },
  { name: "Marilyn Nemzer", title: "Marin County Board of Education" },
  { name: "Jerry Riessen", title: "Tiburon Open Space" },
  { name: "Krupa Antani", title: "RUSD Governing Board of Trustees Candidate" },
  { name: "Ava Fruin", title: "Larkspur Corte Madera School District Board" },
  { name: "Lynn Fox, PhD", title: "Professor of Psychology" },
  { name: "Henry McWhinney", title: "Marketing Executive" },
  { name: "Kalpana Reddy", title: "Wellness Practitioner and Business Owner" },
  { name: "Jeffrey Schaub", title: "Award-Winning Broadcast Journalist" },
  { name: "Susan Bolle", title: "Delegate, Marin Democratic Committee" },
  { name: "Jeff Chanin", title: "Attorney" },
  { name: "Diane Green", title: "Art Docent, Belvedere-Tiburon Library" },
  { name: "Hawi Awash", title: "Co-Founder, YEMA" },
  {
    name: "Marin Professional Firefighters",
    title: "IAFF Local 1775",
    logo: "/marin-firefighters-logo.png",
    organization: true,
  },
  {
    name: "Marin Women's PAC",
    title: "Political Action Committee",
    logo: "/marin-womens-pac-logo.png",
    organization: true,
  },
  {
    name: "Marin Independent Journal",
    title: "Newspaper",
    logo: "/marin-ij-logo.svg",
    organization: true,
  },
];
