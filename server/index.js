import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data storage directory for inquiries
const dataDir = path.join(__dirname, 'data');
const inquiriesFile = path.join(dataDir, 'inquiries.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(inquiriesFile)) {
  fs.writeFileSync(inquiriesFile, JSON.stringify([], null, 2));
}

// Serve public uploads
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'ProPlayX API', timestamp: new Date().toISOString() });
});

app.get('/api/inquiries', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
    res.json({ success: true, count: data.length, data });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to read inquiries' });
  }
});

app.post('/api/inquiry', (req, res) => {
  try {
    const { fullName, phone, requirement, email, message } = req.body;
    
    if (!fullName || !phone || !requirement) {
      return res.status(400).json({
        success: false,
        error: 'Please provide full name, phone number, and requirement.'
      });
    }

    const inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
    const newInquiry = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      phone: phone.trim(),
      requirement,
      email: email ? email.trim() : null,
      message: message ? message.trim() : null,
      submittedAt: new Date().toISOString()
    };

    inquiries.unshift(newInquiry);
    fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));

    console.log(`[ProPlayX] New Inquiry received from ${fullName} (${phone}) for "${requirement}"`);

    res.status(201).json({
      success: true,
      message: 'Inquiry received successfully! Our team will contact you shortly.',
      inquiry: newInquiry
    });
  } catch (err) {
    console.error('Error saving inquiry:', err);
    res.status(500).json({ success: false, error: 'Failed to process inquiry' });
  }
});

// Serve frontend build in production
const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`  ProPlayX Node.js API Server running on port ${PORT}`);
  console.log(`  Health Check: http://localhost:${PORT}/api/health`);
  console.log(`  Inquiries API: http://localhost:${PORT}/api/inquiries`);
  console.log(`===============================================`);
});
