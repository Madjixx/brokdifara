import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="apropos" class="section about-section">
      <div class="container">
        <div class="about-content grid grid-2">
          <div class="about-text">
            <h2 class="section-title left-aligned">
              À propos de Brokdifara International
            </h2>
            <p class="about-description">
              Qui sommes-nous ? Chez Brokdifara International, nous sommes
              spécialisés dans l’intermédiation commerciale à l’échelle
              mondiale. Actifs dans le domaine de l’import-export, nous
              connectons producteurs, fournisseurs et clients afin de faciliter
              les échanges internationaux. Notre expertise Grâce à un réseau
              solide de partenaires et de fournisseurs fiables, nous proposons
              une large gamme de produits : Agroalimentaire : Matières premières
              : Transports : voitures, camions. Nous plaçons la
              qualité, la fiabilité et la satisfaction client au cœur de notre
              activité. Chaque transaction est réalisée avec professionnalisme
              et transparence afin de bâtir des relations durables et
              mutuellement bénéfiques. Pourquoi nous choisir ? Un accompagnement
              personnalisé dans vos projets d’import-export. Des produits de
              qualité sont issus de fournisseurs rigoureusement sélectionnés.
              Une expertise internationale qui vous ouvre les portes de nouveaux
              marchés.
            </p>
          </div>

          <div class="about-image">
            <img
              src="assets/images/logo.png"
              alt="Commerce international"
              loading="lazy"
            />
            <div class="image-overlay">
              <div class="overlay-content">
                <h3>Excellence & Confiance</h3>
                <p>
                  Votre partenaire de confiance pour le commerce international
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="features-list">
          <div class="feature-item" *ngFor="let feature of features">
            <div class="feature-icon">
              <span [innerHTML]="feature.icon"></span>
            </div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about-section {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      }

      .about-content {
        align-items: center;
        gap: 64px;
      }

      .left-aligned {
        text-align: left;
        margin-bottom: 24px;
      }

      .about-description {
        font-size: 1.2rem;
        line-height: 1.7;
        color: #475569;
        margin-bottom: 48px;
      }

      .features-list {
        margin-bottom: 48px;
      }

      .feature-item {
        display: flex;
        gap: 20px;
        margin-bottom: 32px;
        align-items: flex-start;
      }

      .feature-icon {
        width: 56px;
        height: 56px;
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        flex-shrink: 0;
      }

      .feature-content h3 {
        color: #1e293b;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 1.1rem;
      }

      .feature-content p {
        color: #64748b;
        line-height: 1.6;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
      }

      .stat-item {
        text-align: center;
      }

      .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1e40af;
        margin-bottom: 8px;
      }

      .stat-label {
        color: #64748b;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 1px;
      }

      .about-image {
        position: relative;
        border-radius: 16px;
        overflow: hidden;
      }

      .about-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .image-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(30, 64, 175, 0.9));
        color: white;
        padding: 40px 32px;
      }

      .overlay-content h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .overlay-content p {
        opacity: 0.9;
        font-weight: 300;
      }

      @media (max-width: 768px) {
        .about-content {
          grid-template-columns: 1fr;
          gap: 48px;
        }

        .about-image {
          height: 300px;
          order: -1;
        }

        .stats-grid {
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .feature-item {
          gap: 16px;
          margin-bottom: 24px;
        }
      }
    `,
  ],
})
export class AboutComponent {
  features = [
    {
      icon: '🌍',
      title: 'Réseau International',
      description:
        'Partenaires dans plus de 30 pays à travers le monde pour vous garantir les meilleurs produits.',
    },
    {
      icon: '✅',
      title: 'Qualité Certifiée',
      description:
        'Tous nos produits respectent les standards internationaux et certifications requises.',
    },
    {
      icon: '🚛',
      title: 'Logistique Optimisée',
      description:
        'Solutions de transport et logistique adaptées à vos besoins et contraintes.',
    },
    {
      icon: '🤝',
      title: 'Service Personnalisé',
      description:
        "Une équipe dédiée pour vous accompagner dans tous vos projets d'import-export.",
    },
  ];
}
