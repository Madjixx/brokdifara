import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="produits" class="section">
      <div class="container">
        <h2 class="section-title">Nos offres de produits</h2>
        <p class="section-subtitle">
          Une sélection premium de produits de qualité internationale
        </p>
        <div class="produit-info">
          <h3>Marchandises</h3>
        </div>
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
        <div class="produit-info">
          <h3>Matières premières</h3>
        </div>
        <div class="products-grid grid grid-3">
          <div class="product-card card fade-in" *ngFor="let product of productsRaw; let i = index" 
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
        <div class="produit-info">
          <h3>Moyen de transport et Immobilier</h3>
        </div>
        <div class="products-grid grid grid-3">
          <div class="product-card card fade-in" *ngFor="let product of productsTransport; let i = index" 
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
      line-height: 15px;
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

    .produit-info h3 {
      color: #1e293b;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 32px;
      border-bottom:  2px solid #1e293b; 
      width: auto;
      display: inline-block;
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
      name: 'Sucres (Sugar icumsa 45)',
      description: 'Sucre blanc raffiné de première qualité, idéal pour l\'industrie alimentaire et la consommation directe.',
      origin: 'Brésil (Brazil',
      image: 'assets/images/sucre.jpg'
    },
    {
      name: 'Poulet (Chicken)',
      description: 'Viande de poulet fraîche et congelée, certifiée halal, respectant les standards internationaux de qualité.',
      origin: 'Inde, Indonésie, Thaîlande',
      image: 'assets/images/poulet.jpg'
    },
    {
      name: 'Riz (rice)',
      description: 'Riz long grain de haute qualité, parfait pour l\'exportation et les marchés exigeants.',
      origin: 'Inde , Indonésie, Thaîlande',
      image: 'assets/images/riz.jpeg'
    },
    {
      name: 'Huiles, Soja',
      description: 'Huiles de tournesol, soja et palme raffinées, conditionnées selon vos spécifications.',
      origin: 'Europe',
      image: 'assets/images/huile.jpg'
    },
    {
      name: 'Lait en Poudre',
      description: 'Lait en poudre entier et écrémé, riche en nutriments, parfait pour tous usages alimentaires.',
      origin: 'Europe',
      image: 'assets/images/lait.jpg'
    },
    {
      name: 'Pâtes (Pasta)',
      description: 'Large gamme de pâtes italiennes traditionnelles, fabriquées avec du blé dur de qualité supérieure.',
      origin: 'Europe',
      image: 'assets/images/pattes.jpg'
    },
    {
      name: 'Noix de Cajou',
      description: 'Noix de cajou premium, calibrées et conditionnées selon les standards internationaux.',
      origin: 'Afrique du Nord',
      image: 'assets/images/noix.jpeg'
    },
    {
      name: 'Café (coffee), Cacao (cocoa)',
      description: 'Grains de café arabica et cacao de plantation, torréfaction personnalisée disponible.',
      origin: 'Rwanda',
      image: 'assets/images/cafe.jpeg'
    },
    {
      name: 'Sardines',
      description: 'Sardines et thon en conserve, pêche durable, conditionnement de qualité alimentaire.',
      origin: 'Ethiopie',
      image: 'assets/images/poisson-conserve.jpg'
    },
    {
      name: 'Blé (wheat)',
      description: 'Blé tendre et dur de qualité boulangère, idéal pour la meunerie et l\'industrie alimentaire.',
      origin: 'France, Ukraine',
      image: 'assets/images/blé.jpeg'
    },
    {
      name: 'Poisson(fish)',
      description: 'Sélection de poissons frais et surgelés, chaîne du froid respectée, traçabilité garantie.',
      origin: 'Mauritanie',
      image: 'assets/images/poisson.jpg'
    },
    {
      name: 'Conserves (canned food)',
      description: 'Large gamme d\'épices et condiments du monde entier, qualité premium garantie.',
      origin: 'United States-China',
      image: 'assets/images/conserve.jpg'
    }
  ];
  productsRaw = [
    {
      name: 'Fer (iron)',
      description: 'Fer de haute résistance, adapté pour la construction, la fabrication industrielle et les infrastructures lourdes.',
      origin: 'Afrique du Sud, Turquie',
      image: 'assets/images/fer.jpg'
    },
    {
      name: 'Cuivre (copper)',
      description: 'Cuivre raffiné de qualité supérieure, utilisé dans les secteurs électriques, électroniques et de la plomberie.',
      origin: 'Afrique',
      image: 'assets/images/cuivre.jpg'
    },
    {
      name: 'Ciment (cements)',
      description: 'Ciment Portland de première qualité, garantissant solidité, durabilité et performance pour tous types de constructions.',
      origin: 'Afrique du Sud, Sénégal, Turquie',
      image: 'assets/images/ciment.jpg'
    }];
    productsTransport = [
  {
    name: 'Voiture (Car)',
    description: 'Véhicules neufs et d’occasion, fiables et performants, conformes aux normes européennes de sécurité et de confort.',
    origin: 'Belgique',
    image: 'assets/images/voiture.jpg'
  },
  {
    name: 'Camion (Truck)',
    description: 'Camions robustes et économiques, adaptés au transport de marchandises lourdes et aux longues distances.',
    origin: 'Belgique',
    image: 'assets/images/camion.jpg'
  },
  {
    name: 'Villa (Villa)',
    description: 'Villas modernes et spacieuses, conçues pour allier confort, élégance et durabilité dans un cadre privilégié.',
    origin: 'Sénégal, Côte d’Ivoire',
    image: 'assets/images/villa.jpg'
  },
  {
    name: 'Terrain (Land)',
    description: 'Terrains bien situés, propices à la construction résidentielle ou commerciale, avec titres fonciers sécurisés.',
    origin: 'Sénégal, Côte d’Ivoire',
    image: 'assets/images/terrain.jpg'
  }
]
;
}