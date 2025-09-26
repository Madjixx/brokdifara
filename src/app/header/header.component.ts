import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <div>
              <img style="width:50px" src="assets/images/logo.png" alt="">
            </div>
            <div class="logo-text">
              <h2>Brokdifara</h2>
              <span>INTERNATIONAL</span>
            </div>
          </div>
          
          <div class="nav-menu" [class.active]="isMenuOpen">
            <a href="#accueil" class="nav-link">Accueil</a>
            <a href="#produits" class="nav-link">Produits</a>
            <a href="#apropos" class="nav-link">À propos</a>
            <a href="#contact" class="nav-link">Contact</a>
            <a href="#devis" class="btn btn-primary">Demander un devis</a>
          </div>
          
          <button class="menu-toggle" (click)="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 16px 0;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
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
    
    .logo-text h2 {
      color: #1e293b;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }
    
    .logo-text span {
      color: #64748b;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
    
    .nav-menu {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    
    .nav-link {
      color: #64748b;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }
    
    .nav-link:hover {
      color: #1e40af;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #1e40af;
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      gap: 4px;
    }
    
    .menu-toggle span {
      width: 24px;
      height: 3px;
      background: #64748b;
      transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 24px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .menu-toggle {
        display: flex;
      }
      
      .nav-link {
        padding: 12px 0;
        width: 100%;
        text-align: center;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}