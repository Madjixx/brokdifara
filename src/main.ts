import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Import components
import { AboutComponent } from './app/about/about.component';
import { HeaderComponent } from './app/header/header.component';
import { HeroComponent } from './app/hero/hero.component';
import { ProductsComponent } from './app/products/products.component';
import { QuoteFormComponent } from './app/quote-form/quote-form.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ProductsComponent,
    AboutComponent,
    QuoteFormComponent,
    FooterComponent
  ],
  template: `
    <div class="app">
      <app-header></app-header>
      <main class="main-content">
        <app-hero></app-hero>
        <app-products></app-products>
        <app-about></app-about>
        <app-quote-form></app-quote-form>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .main-content {
      flex: 1;
      padding-top: 80px; /* Account for fixed header */
    }
    
    /* Smooth scrolling for anchor links */
    html {
      scroll-behavior: smooth;
    }
    
    /* Ensure sections have proper spacing for fixed header */
    section[id] {
      scroll-margin-top: 100px;
    }
  `]
})
export class App {}

bootstrapApplication(App);