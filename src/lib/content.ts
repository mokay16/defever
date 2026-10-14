export const site = {
  candidateName: "Kathleen Defever",
  occupationTitle: "Attorney / Planning Commissioner",
  office: "Tiburon Town Council",
  electionYear: "2026",
  tagline:
    "Over 8 years of service to Tiburon. A record of showing up, listening, and getting things done.",
  address: ["1550 G Tiburon Boulevard", "#500", "Tiburon, CA 94920", "USA"],
  instagramUrl: "https://www.instagram.com/kathleen_defever",
  actBlueUrl: "https://secure.actblue.com/donate/kathleen-defever-1",
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

// Kathleen's own candidate statement, shown on the About page. Her exact
// words: keep edits to typos only, and check with her before rewording.
export const statement = {
  intro:
    "I have served as your Planning Commissioner for 8.5 years – making pivotal decisions about Tiburon such as:",
  decisions: [
    "Drafting the Town’s General Plan – a comprehensive plan covering the next 20 years and every element of Tiburon living - from parks to diversity, to infrastructure and zoning",
    "Deciding Conditional Use Permits for businesses and tracking downtown vibrancy",
    "Adapting Zoning ordinances and creating new ADU policies, including tracking ADU development",
    "Addressing state housing mandates and advising the Council on housing density allocation",
    "Reviewing the Town budget for inconsistencies with the General Plan",
  ],
  paragraphs: [
    "The Commission is the investigatory and planning division of your government. We mostly work behind the scenes, creating long-term plans and advising the Council on a wide range of issues.",
    "I’m an attorney who represents insurance consumers. I have litigated on behalf of those who have been unfairly denied their insurance benefits for 17 years, and recovered millions of dollars for my clients. I hold a Master of Insurance Law, have a PhD in progress, and speak at conferences around the world about international insurance law.",
    "One of my greatest strengths is my ability to take on complex adversarial issues and succeed on behalf of the less powerful party. Achieving success against large corporations requires initiative, strategy, determination, and the skills to craft clever solutions. The people of Tiburon need a tenacious advocate and proven strategist to take on complicated, difficult issues like the impacts of the state housing mandates, the stubborn traffic problem, and the persistent lack of downtown vibrancy – not another bunch of vague promises and “visions” which always lead to zero progress.",
    "I will also use my background in litigation to assess the increasing litigation costs incurred by the town in recent years, which are narrowing the budget surplus at a rapid rate.",
    "None of these skills are held by any of the current town council members, or by any of the other candidates.",
    "Many of my clients are wildfire victims. I am intimately familiar with the devastation of losing a home, a community, or worse, beloved pets and family members to wildfires. As temperatures get hotter for longer periods of time, the vegetation on the Peninsula becomes drier and more susceptible to fire. We don’t want to be another Pacific Palisades. If elected, I will do everything in my power to prevent this kind of tragedy from striking our beautiful town. We need proactive planning toward fire prevention and emergency preparedness. We need to coordinate with existing national and county programs and organizations. I was endorsed by the Marin Professional Firefighters, and already discussed preliminary plans with county leaders.",
    "I also founded the only active Firewise community in Tiburon – which entitles members to significant insurance premium discounts. As an insurance expert, I understand the causes behind rising insurance costs, and what we can do about it. I am coordinating an informational event as a part of the Rotary-Library Speaker Series.",
    "I dedicate my life to making the world a better place. I joined the Rotary 7 years ago; I am serving my 6th year of Presidency – and loving it. Rotarians are professionals and community leaders committed to integrity and service above self. We support and create programs that improve our community, and under my leadership we have repeatedly donated our time, funding, and expertise to organizations such as the Tiburon Police, Tiburon Fire, The Ranch, Tiburon Peninsula Chamber of Commerce, Reed Union Schools, Belvedere-Tiburon Library, the Hilarita, and numerous non-profit organizations located in Tiburon. When we are needed, we show up.",
    "Other candidates speak of what they’d like to do, but cannot show concrete steps they have taken toward those goals. I’ve been working to improve Tiburon since I moved here 18 years ago, and have the track record to prove it.",
    "I’ll be honored to receive your vote on November 3rd.",
  ],
  signOff: "Sincerely,",
  signature: "Kathleen M. Defever, Esq., LLM",
};

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
  title?: string;
  logo?: string;
  organization?: boolean;
}[] = [
  {
    name: "Ben Allen",
    title:
      "State Senator, District 24; Candidate for California Insurance Commissioner",
  },
  {
    name: "Damon Connolly",
    title: "State Assemblymember and State Senate Candidate",
  },
  { name: "Jon Welner", title: "Mayor of Tiburon" },
  { name: "Alice Fredericks", title: "Tiburon Town Council" },
  { name: "Holli Thier", title: "Tiburon Town Council and Past Mayor" },
  { name: "Erica Williams", title: "Tiburon Planning Commission" },
  { name: "Daniel Amir", title: "Tiburon Planning Commissioner" },
  { name: "Eric Woodward", title: "Tiburon Planning Commissioner" },
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
  { name: "Cres Van Keulen", title: "HOA Board Member" },
  { name: "Caroline Kristensen", title: "Attorney" },
  {
    name: "Michael Wear",
    title:
      "Attorney, Wear Trial Law; Former Marin County Deputy District Attorney",
  },
  {
    name: "Jim Allen",
    title: "Belvedere-Tiburon Landmarks Society, Belvedere Land Co.",
  },
  { name: "Eric Crandall" },
  { name: "Linda Emberson", title: "Former Tiburon Design Review Board Member" },
  { name: "Brenda Bottum", title: "Marine Mammal Center Board" },
  { name: "George Landau", title: "Founder, Tiburon-Belvedere Rotary Club" },
  { name: "William Goldberg" },
  { name: "Marshall Gross" },
  { name: "Baanie Rashad", title: "Marine Mammal Rescue Specialist" },
  { name: "Eric Pifer", title: "Physician and Entrepreneur" },
  { name: "Stefanie Cho", title: "Rotary Club / Foundation Treasurer" },
  { name: "Shana Rohde-Lynch", title: "Compass Real Estate Broker and Agent" },
  { name: "Ed Lynch", title: "Compass Real Estate, Tiburon-Belvedere" },
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
  {
    name: "Teamsters Local 665",
    title: "International Brotherhood of Teamsters",
    logo: "/teamsters-665-logo.png",
    organization: true,
  },
];
