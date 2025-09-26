import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="produits" class="section">
      <div class="container">
        <h2 class="section-title">Nos Produits Alimentaires</h2>
        <p class="section-subtitle">
          Une sélection premium de produits alimentaires de qualité internationale
        </p>
        
        <div class="products-grid grid grid-3">
          <div class="product-card card fade-in" *ngFor="let product of products; let i = index" 
               [style.animation-delay.ms]="i * 100">
            <div class="product-image">
              <img [src]="product.image" [alt]="product.name" loading="lazy">
              <div class="product-overlay">
                <button class="btn btn-primary">En savoir plus</button>
              </div>
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-origin">
                <span class="origin-label">Origine:</span>
                <span class="origin-value">{{ product.origin }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="cta-section">
          <h3>Besoin d'un produit spécifique ?</h3>
          <p>Contactez-nous pour des demandes personnalisées</p>
          <a href="#contact" class="btn btn-primary">Nous contacter</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .products-grid {
      margin-bottom: 80px;
    }
    
    .product-card {
      padding: 0;
      overflow: hidden;
      border-radius: 16px;
    }
    
    .product-image {
      position: relative;
      height: 240px;
      overflow: hidden;
    }
    
    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .product-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(30, 64, 175, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .product-card:hover .product-image img {
      transform: scale(1.1);
    }
    
    .product-card:hover .product-overlay {
      opacity: 1;
    }
    
    .product-info {
      padding: 24px;
    }
    
    .product-name {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 8px;
      line-height:25px;
    }
    
    .product-description {
      color: #64748b;
      margin-bottom: 16px;
      line-height: 1.5;
    }
    
    .product-origin {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .origin-label {
      font-weight: 600;
      color: #475569;
      font-size: 0.9rem;
    }
    
    .origin-value {
      color: #1e40af;
      font-weight: 500;
      font-size: 0.9rem;
    }
    
    .cta-section {
      text-align: center;
      padding: 48px 32px;
      background: linear-gradient(135deg, #f8fafc, #e2e8f0);
      border-radius: 16px;
      margin-top: 48px;
    }
    
    .cta-section h3 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 12px;
    }
    
    .cta-section p {
      color: #64748b;
      margin-bottom: 24px;
      font-size: 1.1rem;
    }
    
    @media (max-width: 768px) {
      .product-image {
        height: 200px;
      }
      
      .cta-section {
        padding: 32px 24px;
      }
    }
  `]
})
export class ProductsComponent {
  products = [
    {
      name: 'Sucre Premium',
      description: 'Sucre blanc raffiné de première qualité, idéal pour l\'industrie alimentaire et la consommation directe.',
      origin: 'Brésil, Thaïlande',
      image: 'https://images.pexels.com/photos/33162/sugar-cubes-white-sugar-sugar-cubes.jpg'
    },
    {
      name: 'Poulet Halal',
      description: 'Viande de poulet fraîche et congelée, certifiée halal, respectant les standards internationaux de qualité.',
      origin: 'France, Pologne',
      image: 'https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg'
    },
    {
      name: 'Riz Premium',
      description: 'Riz long grain de haute qualité, parfait pour l\'exportation et les marchés exigeants.',
      origin: 'Thaïlande, Vietnam',
      image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg'
    },
    {
      name: 'Huiles Végétales',
      description: 'Huiles de tournesol, soja et palme raffinées, conditionnées selon vos spécifications.',
      origin: 'Ukraine, Argentine',
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg'
    },
    {
      name: 'Lait en Poudre',
      description: 'Lait en poudre entier et écrémé, riche en nutriments, parfait pour tous usages alimentaires.',
      origin: 'Nouvelle-Zélande',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg'
    },
    {
      name: 'Pâtes Alimentaires',
      description: 'Large gamme de pâtes italiennes traditionnelles, fabriquées avec du blé dur de qualité supérieure.',
      origin: 'Italie',
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg'
    },
    {
      name: 'Noix de Cajou',
      description: 'Noix de cajou premium, calibrées et conditionnées selon les standards internationaux.',
      origin: 'Côte d\'Ivoire, Vietnam',
      image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg'
    },
    {
      name: 'Café & Cacao',
      description: 'Grains de café arabica et cacao de plantation, torréfaction personnalisée disponible.',
      origin: 'Côte d\'Ivoire, Éthiopie',
      image: 'https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg'
    },
    {
      name: 'Conserves de Poisson',
      description: 'Sardines et thon en conserve, pêche durable, conditionnement de qualité alimentaire.',
      origin: 'Maroc, Espagne',
      image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg'
    },
    {
      name: 'Blé Premium',
      description: 'Blé tendre et dur de qualité boulangère, idéal pour la meunerie et l\'industrie alimentaire.',
      origin: 'France, Ukraine',
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg'
    },
    {
      name: 'Poissons Frais',
      description: 'Sélection de poissons frais et surgelés, chaîne du froid respectée, traçabilité garantie.',
      origin: 'Atlantique Nord',
      image: 'https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg'
    },
    {
      name: 'Épices & Condiments',
      description: 'Large gamme d\'épices et condiments du monde entier, qualité premium garantie.',
      origin: 'Inde, Madagascar',
      image: 'https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg'
    }
  ];
}