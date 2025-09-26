// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['http://localhost:4200', 'https://votre-domaine.com'], // Ajustez selon vos besoins
  methods: ['POST'],
  credentials: true
}));

app.use(express.json());

// Rate limiting pour éviter le spam
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 emails maximum par IP par fenêtre
  message: {
    error: 'Trop de demandes de devis envoyées. Réessayez dans 15 minutes.'
  }
});

// Configuration Nodemailer
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail', // ou votre service email
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Mot de passe d'application Gmail
    }
  });
};

// Template HTML pour l'email
const generateEmailHTML = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1e40af; }
        .value { margin-left: 10px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nouvelle Demande de Devis - Brokdifara</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Entreprise:</span>
            <span class="value">${formData.company}</span>
          </div>
          <div class="field">
            <span class="label">Contact:</span>
            <span class="value">${formData.firstName} ${formData.lastName}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${formData.email}</span>
          </div>
          <div class="field">
            <span class="label">Téléphone:</span>
            <span class="value">${formData.phone || 'Non renseigné'}</span>
          </div>
          <div class="field">
            <span class="label">Produit d'intérêt:</span>
            <span class="value">${formData.products}</span>
          </div>
          <div class="field">
            <span class="label">Quantité estimée:</span>
            <span class="value">${formData.quantity || 'Non renseignée'}</span>
          </div>
          <div class="field">
            <span class="label">Destination:</span>
            <span class="value">${formData.delivery || 'Non renseignée'}</span>
          </div>
          <div class="field">
            <span class="label">Message:</span>
            <div class="value" style="margin-top: 10px; padding: 10px; background: white; border-left: 4px solid #1e40af;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Email envoyé automatiquement depuis le formulaire de devis Brokdifara</p>
          <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Validation des données
const validateFormData = (data) => {
  const required = ['company', 'firstName', 'lastName', 'email', 'products', 'message'];
  const missing = required.filter(field => !data[field] || data[field].trim() === '');
  
  if (missing.length > 0) {
    return { isValid: false, message: `Champs manquants: ${missing.join(', ')}` };
  }
  
  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { isValid: false, message: 'Format email invalide' };
  }
  
  return { isValid: true };
};

// Route pour envoyer l'email
app.post('/api/send-quote', emailLimiter, async (req, res) => {
  try {
    const formData = req.body;
    
    // Validation
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      return res.status(400).json({ 
        success: false, 
        message: validation.message 
      });
    }

    // Configuration de l'email
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Formulaire Brokdifara" <${process.env.EMAIL_USER}>`,
      to: 'contact@brokdifara.com', // Votre email de réception
      replyTo: formData.email,
      subject: `Nouvelle demande de devis - ${formData.company}`,
      html: generateEmailHTML(formData),
      text: `
        Nouvelle demande de devis
        
        Entreprise: ${formData.company}
        Contact: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Téléphone: ${formData.phone || 'Non renseigné'}
        Produit: ${formData.products}
        Quantité: ${formData.quantity || 'Non renseignée'}
        Destination: ${formData.delivery || 'Non renseignée'}
        
        Message:
        ${formData.message}
      `
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    
    console.log(`Email envoyé pour ${formData.company} - ${formData.email}`);
    
    res.json({ 
      success: true, 
      message: 'Votre demande de devis a été envoyée avec succès !' 
    });
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi. Veuillez réessayer plus tard.' 
    });
  }
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});