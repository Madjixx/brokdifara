import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="devis" class="section quote-section">
      <div class="container">
        <h2 class="section-title">Demander un Devis</h2>
        <div class="section-subtitle">
         Pour vous Préciser les prix, ainsi que les modalités de livraison et de paiement, nous vous remercions de
          bien vouloir nous transmettre les documents suivants :
          <ul class="list-disc">
            <li>Lettre officielle de votre demande à l’attention de notre société</li>
            <li>LOI pour chaque produit en notre attention avec ICPO</li>
            <li>TARGET PRICE</li>
            <li>Garantie BANCAIRE ET/OU PREUVE DE FONDS</li>
            <li>Mode règlement accepté : tout mode de paiement</li>
          </ul>
          A réception de ces éléments, nous ne manquerons pas de répondre à votre demande, dans les meilleurs
          délais, en vous transmettons, prix, procédure et délai pour chaque produit.
        </div>
        
        <div class="quote-content grid grid-2">
          <div class="quote-info">
            <h3>Pourquoi choisir Brokdifara ?</h3>
            
            <div class="benefit-list">
              <div class="benefit-item" *ngFor="let benefit of benefits">
                <div class="benefit-icon">{{ benefit.icon }}</div>
                <div class="benefit-text">
                  <h4>{{ benefit.title }}</h4>
                  <p>{{ benefit.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="contact-info">
              <h4>Besoin d'aide ?</h4>
              <div class="contact-details">
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <span>+33 6 82 39 50 55</span>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📱</span>
                  <span>+33 6 49 51 28 16</span>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">✉️</span>
                  <span>contact&#64;brokdifara.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <form class="quote-form card" (ngSubmit)="onSubmit()" #quoteForm="ngForm">
            <div class="form-group">
              <label for="company">Entreprise *</label>
              <input type="text" id="company" name="company" [(ngModel)]="formData.company" 
                     required class="form-control" placeholder="Nom de votre entreprise">
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">Prénom *</label>
                <input type="text" id="firstName" name="firstName" [(ngModel)]="formData.firstName" 
                       required class="form-control" placeholder="Votre prénom">
              </div>
              <div class="form-group">
                <label for="lastName">Nom *</label>
                <input type="text" id="lastName" name="lastName" [(ngModel)]="formData.lastName" 
                       required class="form-control" placeholder="Votre nom">
              </div>
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" [(ngModel)]="formData.email" 
                     required class="form-control" placeholder="votre@email.com">
            </div>
            
            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone" 
                     class="form-control" placeholder="+33 X XX XX XX XX">
            </div>
            
            <div class="form-group">
              <label for="products">Produits d'intérêt *</label>
              <select id="products" name="products" [(ngModel)]="formData.products" 
                      required class="form-control">
                <option value="">Sélectionnez un produit</option>
                <option value="Sucres (Sugar)">Sucres (Sugar)</option>
                <option value="Poulet (Chicken)">Poulet (Chicken)</option>
                <option value="Riz (rice)">Riz (rice)</option>
                <option value="Huiles, Soja">Huiles, Soja</option>
                <option value="Lait en Poudre">Lait en poudre</option>
                <option value="Pâtes (Pasta)">Pâtes (Pasta)</option>
                <option value="Noix de Cajou">Noix de cajou</option>
                <option value="Café (coffee), Cacao (cocoa)">Café (coffee), Cacao (cocoa)</option>
                <option value="Sardines">Sardines</option>
                <option value="Blé (wheat)">Blé (wheat)</option>
                <option value="Poisson(fish)">Poisson(fish)</option>
                <option value="Conserves (canned food)">Conserves (canned food)</option>
                <option value="autre">Autre (préciser dans le message)</option>
              </select>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="quantity">Quantité estimée</label>
                <input type="text" id="quantity" name="quantity" [(ngModel)]="formData.quantity" 
                       class="form-control" placeholder="Ex: 100 tonnes">
              </div>
              <div class="form-group">
                <label for="delivery">Destination</label>
                <input type="text" id="delivery" name="delivery" [(ngModel)]="formData.delivery" 
                       class="form-control" placeholder="Pays/Ville de livraison">
              </div>
            </div>
            
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" [(ngModel)]="formData.message" 
                        required class="form-control" rows="4" 
                        placeholder="Décrivez vos besoins spécifiques, délais souhaités, etc."></textarea>
            </div>
            
            <div class="form-actions">
              <button type="submit" class="btn btn-primary btn-lg" 
                      [disabled]="!quoteForm.valid || isSubmitting">
                <span *ngIf="isSubmitting">Envoi en cours...</span>
                <span *ngIf="!isSubmitting">Demander un devis</span>
              </button>
            </div>
            
            <div class="form-note">
              <p>* Champs obligatoires. Réponse sous 24h ouvrées.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .quote-section {
      background: #ffffff;
    }
    
    .quote-content {
      gap: 64px;
      align-items: flex-start;
    }
    
    .quote-info h3 {
      color: #1e293b;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 32px;
    }
    
    .benefit-list {
      margin-bottom: 48px;
    }
    
    .benefit-item {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      align-items: flex-start;
    }
    
    .benefit-icon {
      font-size: 24px;
      width: 40px;
      flex-shrink: 0;
    }
    
    .benefit-text h4 {
      color: #1e293b;
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .benefit-text p {
      color: #64748b;
      line-height: 1.6;
      font-size: 0.95rem;
    }
    
    .contact-info {
      padding: 32px;
      background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
      border-radius: 12px;
    }
    
    .contact-info h4 {
      color: #1e293b;
      font-weight: 700;
      margin-bottom: 20px;
    }
    
    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #475569;
      font-weight: 500;
    }
    
    .contact-icon {
      font-size: 18px;
      width: 24px;
    }
    
    .quote-form {
      padding: 40px;
    }
    
    .form-group {
      margin-bottom: 24px;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #374151;
    }
    
    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 16px;
      transition: all 0.3s ease;
      background: white;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #1e40af;
      box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
    }
    
    .form-control::placeholder {
      color: #9ca3af;
    }
    
    select.form-control {
      cursor: pointer;
    }
    
    textarea.form-control {
      resize: vertical;
      min-height: 100px;
    }
    
    .form-actions {
      margin-top: 32px;
      text-align: center;
    }
    
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .form-note {
      margin-top: 16px;
      text-align: center;
    }
    
    .form-note p {
      color: #6b7280;
      font-size: 0.9rem;
      font-style: italic;
    }
    
    @media (max-width: 768px) {
      .quote-content {
        grid-template-columns: 1fr;
        gap: 48px;
      }
      
      .quote-form {
        padding: 32px 24px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
      
      .contact-info {
        padding: 24px;
      }
    }
  `]
})
export class QuoteFormComponent {
  isSubmitting = false;
  
  formData = {
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    products: '',
    quantity: '',
    delivery: '',
    message: ''
  };

  benefits = [
    {
      icon: '⚡',
      title: 'Réponse Rapide',
      description: 'Devis personnalisé sous 24h ouvrées'
    },
    {
      icon: '💰',
      title: 'Prix Compétitifs',
      description: 'Meilleurs tarifs grâce à notre réseau mondial'
    },
    {
      icon: '🛡️',
      title: 'Sécurité Garantie',
      description: 'Transactions sécurisées et assurance qualité'
    },
    {
      icon: '🚀',
      title: 'Livraison Optimisée',
      description: 'Solutions logistiques adaptées à vos besoins'
    }
  ];

 onSubmit() {
  if (this.isSubmitting) return;

  this.isSubmitting = true;

  const templateParams = {
    to_email: 'niang.madjiguene94@gmail.com',
    company: this.formData.company,
    firstName: this.formData.firstName,
    lastName: this.formData.lastName,
    email: this.formData.email,
    phone: this.formData.phone,
    products: this.formData.products,
    quantity: this.formData.quantity,
    delivery: this.formData.delivery,
    message: this.formData.message,
  };

  emailjs
    .send('service_dwas97b', 'template_0iay9mk', templateParams, 'ZT6MljcAJcs3pZPbt')
    .then((result: EmailJSResponseStatus) => {
      alert('✅ Devis envoyé avec succès !');
      this.resetForm();
      this.isSubmitting = false;
    })
    .catch((error) => {
      alert('❌ Erreur lors de l’envoi : ' + error.text);
      this.isSubmitting = false;
    });
}
  
  resetForm() {
    this.formData = {
      company: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      products: '',
      quantity: '',
      delivery: '',
      message: ''
    };
  }
}