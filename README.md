# ProPlayX — Multi-Page Sports Infrastructure & Operations Platform (Node.js + React)

A full-stack, cleanly sectioned multi-page platform built with **React Router**, **Vite**, and **Node.js Express**, accurately structured per client specifications.

---

## 📑 Page Architecture

The application is structured into 5 distinct, purposeful pages:

### 🏠 Main Page (`/`) — *Talks about what ProPlayX does*
- **Hero Section**: Core value proposition (*"We build the court. We run the club."*), live court statistics (29 Courts Live, 5 Venues, 3 Cities, 25+ Clubs), and fast-action CTAs.
- **Sports Strip**: Icon showcase of regulation sports (Pickleball, Padel, Badminton, Cricket Turf, Football Turf).
- **What ProPlayX Does (Dual Pillars)**:
  - **Pillar 1: Turnkey Construction** (Civil earthworks, acrylic/glass systems, 500-lux tournament floodlights).
  - **Pillar 2: Club & Facility Operations** (Certified coaching academies, tournaments, app booking, court upkeep).
- **Quick Directory Grid**: Visual navigation cards routing directly to each of the 4 deep-dive pages.
- **Signature Gear Showcase**: High-res studio photography of the Pro-Play X Carbon Hybrid paddle & balls with interactive hotspot inspection.

---

### 💼 Page 1: Franchise Options (`/franchise`)
- **Blu Racquet Club Concept**: Multi-racket destination model uniting pickleball, padel, and badminton.
- **Operating Models**:
  - **FOCO** (*Franchise Owned, Company Operated*): Turnkey management where ProPlayX deploys coaches, organizes leagues, and maintains the facility.
  - **FOFO** (*Franchise Owned, Franchise Operated*): Self-operated club backed by ProPlayX tech, software, and vendor pricing.
- **Interactive FOCO vs FOFO Comparator & Role Quiz**: 2-question assessment diagnosing the ideal operational partnership.
- **2026–2028 National Roadmap**: National growth milestones (Tier 1 & 2 cities, 25+ clubs).
- **Dedicated Franchise Inquiry Form**.

---

### 📐 Page 2: Court Costing and Construction (`/construction` or `/costing`)
- **Turnkey Costing Spec Sheet**: Specifications, dimensions, surface materials, and transparent pricing for Pickleball, Padel, Badminton, Box Cricket, and Football Turf.
- **Interactive Court Design Studio (`CourtCustomizer.jsx`)**:
  - Live SVG regulation court lines for all sports.
  - Day / Night 500-lux arena floodlight mode.
  - 4 custom tournament color palettes.
  - High-performance add-ons (LED floodlights, tensile canopy, cameras, dugouts) with instant turnkey cost calculations.
- **4-Stage Engineering Process**: Site evaluation, civil concrete sub-base, surface/glass installation, and official federation handover.
- **Dedicated Construction Inquiry Form** with 1-click spec pre-filling.

---

### 👥 Page 3: About Us (`/about`)
- **Baseline Story**: Company mission, vision, and philosophy for transforming racket sports access in India.
- **Director Profile**: Samrat S Kapur (Founder & CEO), leadership bio, 25+ years industry experience, and direct LinkedIn profile link.
- **Live Sports Centers (Venues Explorer)**:
  - Interactive city filters (MMR/Mumbai, Hyderabad, Rajasthan).
  - 5 Live Operating Centers with facility details.
  - 3 Upcoming Pipeline Centers.
  - Interactive Venue Modal with high-res photos, amenities, and direct WhatsApp booking.
- **Technical Knowledge Base / Searchable FAQs**: Ground dimensions, rooftop engineering, drainage, and federation certifications (USAPA, FIP, BWF).

---

### 📞 Page 4: Contact Us (`/contact`)
- **Direct Reach-Out Cards**: Phone (+91 74000 14111 / +91 74000 15111), Email (contact@proplayx.in), and Registered Office (Aaradhya Primus, Dahisar East, Mumbai).
- **Direct WhatsApp Action**: 1-click chat routing to official team.
- **Interactive Turnkey Inquiry Form**: Submits lead directly to Node.js Express backend (`POST /api/inquiry`) with confirmation feedback.

---

## 🏃 Running the Project

### Development (Client & Server Concurrently)
```bash
npm run dev
```
- **Client (React SPA)**: `http://localhost:3000`
- **Server (Node.js API)**: `http://localhost:5000`

### Production Build & Launch
```bash
npm run build
npm start
```
Runs the unified production Express server at `http://localhost:5000` with client-side SPA routing fallback.
