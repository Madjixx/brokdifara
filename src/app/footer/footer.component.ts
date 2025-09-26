import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="contact" class="footer">
      <div class="container">
        <div class="footer-content grid grid-4">
          <div class="footer-brand">
            <div class="logo">
              <div class="logo-icon">
                <div class="logo-globe"></div>
              </div>
              <div class="logo-text">
                <h3>Brokdifara</h3>
                <span>INTERNATIONAL</span>
              </div>
            </div>
            <p class="brand-description">
              Votre partenaire de confiance pour le commerce international de produits alimentaires de qualité.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" title="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" class="social-link" title="Email">
                <span>✉️</span>
              </a>
              <a href="#" class="social-link" title="WhatsApp">
                <span>📱</span>
              </a>
            </div>
          </div>
          
          <div class="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#produits">Nos Produits</a></li>
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#devis">Demander un devis</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h4>Produits</h4>
            <ul>
              <li><a href="#produits">Produits Alimentaires</a></li>
              <li><a href="#produits">Matières Premières</a></li>
              <li><a href="#contact">Solutions Transport</a></li>
              <li><a href="#contact">Services Immobilier</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h4>Contact</h4>
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <div>
                  <p>10 rue la la Barre</p>
                  <p>77181 Courtry, France</p>
                </div>
              </div>
              
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <div>
                  <p>+33 6 82 39 50 55</p>
                  <p>+33 6 49 51 28 16</p>
                </div>
              </div>
              
              <div class="contact-item">
                <span class="contact-icon">✉️</span>
                <div>
                  <p>contact&#64;brokdifara.com</p>
                  <p>info&#64;brokdifara.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p>&copy; 2024 Brokdifara International. Tous droits réservés.</p>
            <div class="footer-legal">
              <a href="#">Mentions légales</a>
              <span>•</span>
              <a href="#">Politique de confidentialité</a>
              <span>•</span>
              <a href="#">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: white;
      padding: 80px 0 32px;
    }
    
    .footer-content {
      margin-bottom: 48px;
    }
    
    .footer-brand {
      grid-column: span 1;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    
    .logo-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1e40af, #3b82f6);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    
    .logo-globe {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, #10b981, #059669);
      position: relative;
    }
    
    .logo-globe::after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      border-radius: 50%;
      background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%);
    }
    
    .logo-text h3 {
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }
    
    .logo-text span {
      color: #94a3b8;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
    
    .brand-description {
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 24px;
      max-width: 280px;
    }
    
    .social-links {
      display: flex;
      gap: 12px;
    }
    
    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(59, 130, 246, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 18px;
    }
    
    .social-link:hover {
      background: #3b82f6;
      transform: translateY(-2px);
    }
    
    .footer-links h4 {
      color: white;
      font-weight: 700;
      margin-bottom: 24px;
      font-size: 1.1rem;
    }
    
    .footer-links ul {
      list-style: none;
      padding: 0;
    }
    
    .footer-links li {
      margin-bottom: 12px;
    }
    
    .footer-links a {
      color: #cbd5e1;
      text-decoration: none;
      transition: color 0.3s ease;
      font-weight: 400;
    }
    
    .footer-links a:hover {
      color: #3b82f6;
    }
    
    .footer-contact h4 {
      color: white;
      font-weight: 700;
      margin-bottom: 24px;
      font-size: 1.1rem;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .contact-item {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }
    
    .contact-icon {
      font-size: 18px;
      width: 24px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    
    .contact-item p {
      color: #cbd5e1;
      margin: 0;
      line-height: 1.5;
      font-size: 0.95rem;
    }
    
    .footer-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent);
      margin: 48px 0 32px;
    }
    
    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .footer-bottom-content p {
      color: #94a3b8;
      margin: 0;
      font-size: 0.9rem;
    }
    
    .footer-legal {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 0.9rem;
    }
    
    .footer-legal a {
      color: #94a3b8;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-legal a:hover {
      color: #3b82f6;
    }
    
    .footer-legal span {
      color: #64748b;
    }
    
    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: repeat(2, 1fr);
        gap: 48px 32px;
      }
      
      .footer-brand {
        grid-column: span 2;
      }
    }
    
    @media (max-width: 768px) {
      .footer {
        padding: 64px 0 32px;
      }
      
      .footer-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .footer-brand {
        grid-column: span 1;
        text-align: center;
      }
      
      .brand-description {
        max-width: none;
      }
      
      .footer-bottom-content {
        text-align: center;
        flex-direction: column;
      }
    }
  `]
})
export class FooterComponent {}