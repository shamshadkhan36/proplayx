export const sports = [
  { name: 'Pickleball', icon: 'fas fa-table-tennis-paddle-ball' },
  { name: 'Padel', icon: 'fas fa-volleyball' },
  { name: 'Badminton', icon: 'fas fa-shuttlecock' },
  { name: 'Cricket Turf', icon: 'fas fa-baseball' },
  { name: 'Football Turf', icon: 'fas fa-futbol' },
];

export const heroStats = [
  { number: '29', label: 'Courts Live' },
  { number: '5', label: 'Venues Operating' },
  { number: '3', label: 'Cities · MMR & Hyderabad' },
  { number: '25+', label: 'Clubs by 2028' },
];

export const focoAdvantage = [
  {
    title: 'Zero Operational Headache',
    icon: 'fas fa-shield-heart',
    desc: 'The franchise partner purely plays the role of an asset owner. PPX handles 100% of the daily grind—from hiring coaches and court managers to sweeping the courts. You receive regular performance reports without fielding customer calls.',
  },
  {
    title: 'Technology-Driven Performance',
    icon: 'fas fa-mobile-screen-button',
    desc: 'Every court is integrated into the proprietary PPX Booking App. This maximizes occupancy through algorithmic pricing, automated membership renewals, and real-time open-play matchmaking.',
  },
  {
    title: 'Professional Infrastructure',
    icon: 'fas fa-ruler-combined',
    desc: 'PPX oversees the entire design and build phase. We utilize standardized, high-quality materials—from asphalt bases and 5-layer synthetics to heavy-duty nets—ensuring international standard playing conditions.',
  },
  {
    title: 'Ecosystem Integration',
    icon: 'fas fa-network-wired',
    desc: 'Your court isn’t an island. It instantly becomes part of the wider PPX network, benefiting from central marketing campaigns, regional tournaments, and brand collaborations that drive footfall.',
  },
];

export const ppxDeliverables = [
  {
    num: '01',
    title: 'Design & Construction',
    desc: 'End-to-end build out: from civil works and asphalt base laying to installing the specialized 5-layer synthetic court surface, customized fencing nets, and professional sports lighting meeting competitive standards.',
    icon: 'fas fa-hammer',
  },
  {
    num: '02',
    title: 'PPX Booking Platform',
    desc: 'Complete integration with the PPX App. Customers can seamlessly book slots, pay online, and schedule matches. Automated inventory management ensures zero double-bookings and maximizes peak-hour occupancy.',
    icon: 'fas fa-calendar-check',
  },
  {
    num: '03',
    title: 'End-to-End Operations',
    desc: 'Total facility management including manpower hiring and training (coaches, court managers, housekeeping), platform registration, daily walk-in management, monthly coaching plans, memberships, and open-play sessions.',
    icon: 'fas fa-users-gear',
  },
  {
    num: '04',
    title: 'Financial & Accounting',
    desc: 'Transparent and robust financial management. PPX handles daily reconciliation, expense tracking, payroll processing for facility staff, and provides the franchise partner with detailed monthly P&L statements.',
    icon: 'fas fa-file-invoice-dollar',
  },
  {
    num: '05',
    title: 'Marketing & Promotion',
    desc: 'Centralized marketing support from the PPX head office. Targeted digital marketing campaigns, social media management, local SEO, and offline community outreach guarantee high court utilization from month one.',
    icon: 'fas fa-bullhorn',
  },
  {
    num: '06',
    title: 'Event Collaborations',
    desc: 'We leverage our industry network to bring business to your court. PPX collaborates with corporate event organizers, sports leagues, and local brands to host weekend tournaments, corporate offsites, and clinics.',
    icon: 'fas fa-trophy',
  },
];

export const commercialModels = [
  {
    id: 'option-a',
    badge: 'Option A',
    title: 'Profit Share Model',
    split: '75% / 25%',
    partnerShare: '75% of Net Profit',
    ppxShare: '25% of Net Profit',
    highlight: 'Aligned incentives where PPX shares operational risk and focuses heavily on expense optimization.',
    points: [
      '75% of Net Operating Profit distributed to Franchise Owner',
      '25% of Net Profit retained by ProPlayX as management fee',
      'PPX handles 100% daily operations, staffing, and marketing',
      'Detailed monthly P&L statements with complete audit transparency',
    ],
  },
  {
    id: 'option-b',
    badge: 'Option B',
    title: 'Top-Line Fee Model',
    split: '10% Revenue',
    partnerShare: '90% Gross Revenue (Net of Site OpEx)',
    ppxShare: '10% Management Fee',
    highlight: 'Ideal for asset owners seeking a predictable, fixed management fee structure.',
    points: [
      '10% of Gross Revenue paid as a Management Fee to PPX',
      'Franchise partner retains the remaining balance after deducting site operational expenses',
      'Full integration with the PPX booking app and customer network',
      'Dedicated facility managers deployed and trained by PPX',
    ],
  },
];

export const singleCourtCosting = {
  footprint: '~2,000 sq. ft. footprint (including play area & safety margins)',
  total: '₹4,89,000',
  totalNumber: 489000,
  disclaimer: 'Excludes civil retaining walls, GST & Land cost. Billed on actual site dimensions.',
  items: [
    { desc: 'Asphalt Base Preparation', rate: 'Rs 120 per sq. ft.', cost: '₹2,40,000', raw: 240000 },
    { desc: '5-Layer Synthetic Surface', rate: 'Rs 55 per sq. ft.', cost: '₹1,10,000', raw: 110000 },
    { desc: 'Perimeter Safety Nets', rate: 'Rs 14 per sq. ft. (up to 20ft height)', cost: '₹55,000*', raw: 55000 },
    { desc: 'Center Net System', rate: 'Heavy Duty Professional Standard', cost: '₹19,000', raw: 19000 },
    { desc: 'Sports Lighting System', rate: 'Luminaires and Poles', cost: '₹45,000', raw: 45000 },
    { desc: 'Facility Branding', rate: 'PPX & Franchise Signage', cost: '₹20,000', raw: 20000 },
  ],
};

export const unitEconomics = {
  targetGross: '₹1,50,000 – ₹2,00,000+',
  stabilizedGross: '₹2,21,000',
  estOpex: '~₹60,000',
  netProfit: '~₹1,60,000',
  payback: '8–12 Months',
  streams: [
    { name: 'Pay & Play (Peak Hours)', matrix: '4 hours/day @ Rs 800/hr × 30 days', monthly: '₹96,000' },
    { name: 'Pay & Play (Off-Peak)', matrix: '2 hours/day @ Rs 500/hr × 30 days', monthly: '₹30,000' },
    { name: 'Coaching & Academies', matrix: '2 batches (10 kids each) @ Rs 2500/mo', monthly: '₹50,000' },
    { name: 'Monthly Memberships', matrix: '10 adults @ Rs 3000/mo', monthly: '₹30,000' },
    { name: 'Events / Tournaments', matrix: '1 weekend event per month (average)', monthly: '₹15,000' },
  ],
};

export const roadmap = [
  { yr: '100+ Courts', title: 'Tier-1 & Tier-2 expansion', desc: 'Expanding pickleball, padel and badminton facilities into new metros and growth cities.' },
  { yr: '25+ Clubs', title: 'Blu Racquet Club rollout', desc: 'Opening flagship clubs nationwide through the FOCO and FOFO franchise models.' },
  { yr: '50+ Institutions', title: 'School & developer partnerships', desc: 'Collaborating with schools, colleges and real estate developers to activate underused land.' },
  { yr: 'Ongoing', title: 'Tech-driven engagement', desc: 'State-level leagues, dynamic app features and AI-assisted skill tracking for every player.' },
];

export const venuesLive = [
  { name: 'KBP College — Thane', courts: '3 Pickleball Courts', desc: 'Outdoor acrylic courts hosting daily academy coaching and recreational matchplay.' },
  { name: 'Lush — Mira Road', courts: '8 Pickleball · 4 Badminton', desc: 'A premier mega multi-racket club hosting regional leagues and tournament matches.' },
  { name: 'Celebration Club — Andheri', courts: '5 Pickleball Courts', desc: 'Lokhandwala, Andheri West — home to high-profile doubles tournaments.' },
  { name: 'Pikl — Banjara Hills, Hyderabad', courts: '2 Pickleball Courts', desc: 'Joint-venue facility bringing elite racket sports to a prime Hyderabad location.' },
  { name: 'Blu Racquet Club — Mira Road', courts: '4 Badminton · 2 Pickleball · 1 Padel', desc: 'Flagship venue near Gaurav Residency, Kanakia Mira Road.' },
];

export const venuesUpcoming = [
  { name: 'Jaipur Center', status: 'Opening Soon', badgeBg: '#FBEFD9', badgeText: '#A8791E', desc: 'A world-class pickleball hub expanding our footprint into Rajasthan.' },
  { name: 'Ghatkopar, Mumbai', status: 'In Pipeline', badgeBg: '#EEE9DC', badgeText: '#8A7B57', desc: 'New multi-sport court infrastructure planned across Ghatkopar East and West.' },
  { name: 'Navi Mumbai & Virar', status: 'In Pipeline', badgeBg: '#EEE9DC', badgeText: '#8A7B57', desc: 'Modern racket sports facilities expanding access across the MMR region.' },
];

export const costRows = [
  { sport: 'Pickleball Court (PPX Spec)', dims: '44 ft × 20 ft (~2,000 sq ft)', material: '5-Layer Synthetic Surface, Asphalt Base, 20ft Nets, Sports Lighting', cost: '₹4.89 Lakhs / court' },
  { sport: 'Padel Tennis Court', dims: '20m × 10m', material: '12mm toughened glass, steel frame, fibrillated turf', cost: '₹18L – ₹25L / court' },
  { sport: 'Badminton Court', dims: '44 ft × 20 ft', material: 'BWF-approved teak wood cushion / synthetic PVC', cost: '₹4.5L – ₹8L / court' },
  { sport: 'Box Cricket Turf', dims: '60 ft × 40 ft', material: '50mm FIFA-quality artificial grass, enclosure netting', cost: '₹6L – ₹12L / setup' },
  { sport: 'Football Turf', dims: '5-a-side / 7-a-side', material: '50mm UV-stabilized monofilament turf & infill', cost: '₹80 – ₹120 / sq. ft.' },
];

export const contactInfo = {
  phone: '+91 74000 14111 / +91 74000 15111',
  whatsappNumber: '917400014111',
  email: 'contact@proplayx.in',
  fallbackEmail: 'Proplayx.contact@gmail.com',
  address: '406, Aaradhya Primus Building, Near Thakur Mall, Dahisar East, Mumbai, MH',
  businessPlanPdf: '/ProPlayX_FOCO_Business_Plan.pdf',
  social: {
    instagram: 'https://www.instagram.com/pro.playx?igsh=MTZhem83Y2lpcmNvYw==',
    facebook: 'https://www.facebook.com',
    linkedin: 'https://www.linkedin.com',
    youtube: 'https://youtube.com/@pro.play.x?si=DH4se0Ho47_W3YVy',
  },
  director: {
    name: 'Samrat S Kapur',
    role: 'Founder & CEO, ProPlayX',
    initials: 'SSK',
    bio: "With over 25 years across business management, operations and sports infrastructure development, Samrat leads ProPlayX's vision to revolutionize racket-sports access across India.",
    linkedin: 'https://www.linkedin.com/in/samratskapur',
  },
};
