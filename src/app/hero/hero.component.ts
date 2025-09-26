import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="accueil" class="hero">
      <div class="hero-background">
        <img src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg" 
             alt="Commerce International Maritime" class="hero-image">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title fade-in">
            COMMERCE<br>
            <span class="text-accent">INTERNATIONAL</span>
          </h1>
          
          <p class="hero-subtitle fade-in">
            Solutions de commerce de produits alimentaires de qualité
          </p>
          
          <div class="hero-actions fade-in">
            <a href="#devis" class="btn btn-primary btn-lg">
              Demander un devis
            </a>
            <a href="#produits" class="btn btn-secondary btn-lg">
              Nos produits
            </a>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -2;
    }
    
    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.7);
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(30, 64, 175, 0.8) 0%,
        rgba(59, 130, 246, 0.6) 50%,
        rgba(16, 185, 129, 0.4) 100%
      );
      z-index: -1;
    }
    
    .hero-content {
      text-align: center;
      color: white;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .hero-title {
      font-size: 4rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 24px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .text-accent {
      background: linear-gradient(45deg, #10b981, #06d6a0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 48px;
      opacity: 0.9;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
    
    .hero-actions {
      display: flex;
      gap: 24px;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .btn-lg {
      padding: 16px 32px;
      font-size: 1.1rem;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }
    
    .scroll-arrow {
      width: 24px;
      height: 24px;
      border-right: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(45deg);
      opacity: 0.7;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
      }
      
      .hero-actions {
        flex-direction: column;
        align-items: center;
      }
      
      .btn-lg {
        width: 100%;
        max-width: 280px;
      }
    }
  `]
})
export class HeroComponent {}