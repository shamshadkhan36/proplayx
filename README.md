# ProPlayX — Interactive Sports Infrastructure Platform (Node.js + React)

A full-stack, highly interactive clone of [proplayx.in](https://proplayx.in) built with **React**, **Vite**, and **Node.js Express**.

---

## ⚡ Interactive Features (Clean & Halal Operations Focus)

The platform is strictly centered on physical sports facilities, court engineering, certified equipment, tournament operations, and turnkey construction without financial speculation or interest:

### 1. 🎨 Interactive Court Design Studio (`CourtCustomizer.jsx`)
- **Real-Time SVG Visualizer**: Render live court line markings, kitchen zones, glass enclosures, and nets for **Pickleball**, **Padel Tennis**, **Badminton**, and **Cricket / Football Turf**.
- **Day / Night Arena Mode**: Toggle between daylight mode and night mode with illuminated 500-lux tournament floodlight beams.
- **Custom Color Palettes**: Switch between *ProPlayX Azure & Navy*, *US Open Royal & Forest*, *Clay & Tropical Teal*, and *Night Arena Cyber Cyan*.
- **Add-on Upgrades**: Dynamic cost recalculation when toggling LED floodlights, all-weather tensile canopy, AI automated streaming cameras, dugout benches, and club audio.
- **1-Click Quotation Lock-in**: Pre-fills the contact form with custom specs and fires celebratory confetti!

### 2. 🎾 Signature Gear Studio & Audio Simulator (`GearStudio.jsx`)
- **Interactive Technical Hotspots**: Explore Toray T700 Raw Carbon Fiber, Honeycomb Polypropylene Core, Thermoformed Hyper-Edge, and Perforated Ergo-Grip.
- **Core Thickness Toggle**: Switch between 13mm Power and 16mm Control cores.
- **Web Audio API Strike Simulator**: Click *"Hear Sweet-Spot Pop Sound"* to hear an authentic synthetic 820Hz carbon-fiber pickleball drive!

### 3. 🤝 Interactive FOCO vs FOFO Operational Comparator & Quiz (`FranchiseComparator.jsx`)
- **Side-by-Side Operational Matrix**: Compare physical management responsibilities, coaching staffing, court booking apps, and club oversight.
- **Personalized 2-Question Quiz**: Diagnoses operational involvement to recommend either turnkey management or self-run club operations.

### 4. 📍 Venue Explorer with Filters & Detail Modal (`Venues.jsx` & `VenueModal.jsx`)
- **City Filters**: Filter across MMR/Mumbai, Hyderabad, and Rajasthan.
- **Click-to-Explore Modal**: Click any venue card to view facility images, court specs, amenities (valet, pro shop, floodlights), and an instant **WhatsApp Booking** shortcut.

### 5. 🔍 Searchable Knowledge Base (`FaqSection.jsx`)
- Live search bar to filter questions regarding rooftop courts, land requirements, USAPA/FIP certification, construction timelines, and transparent facility operations.

### 6. 🔥 Real-Time Community Activity Ticker (`LiveTicker.jsx`)
- Floating live toast at bottom-left showcasing recent court construction inquiries, tournament announcements, and active matches.

### 7. 📱 Connected Turnkey Inquiry Form (`ContactSection.jsx`)
- Integrated with the Node.js Express backend (`POST /api/inquiry`).
- Supports auto-prefilling directly from the **Court Design Studio**.

---

## 🏃 Running the Project

### Development (Client & Server)
```bash
npm run dev
```
- **Frontend App**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`

### Production Build & Launch
```bash
npm run build
npm start
```
Runs the unified production Express server at `http://localhost:5000`.
