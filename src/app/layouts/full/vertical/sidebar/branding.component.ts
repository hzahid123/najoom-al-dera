import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  standalone: true,
  template: `
    <a href="/" class="logo-container" dir="ltr">
      <span class="logo-text">
        <span class="logo-initial">Najum</span>
        <span class="logo-full">Al-Deera</span>
      </span>
    </a>
  `,
  styles: [`
    .logo-container {
      display: inline-flex;
      align-items: center;
      height: 60px;
      overflow: hidden;
      text-decoration: none;
      cursor: pointer;
      color: inherit;
      transition: all 0.6s ease;
    }

    .logo-text {
      display: flex;
      align-items: center;
      font-family: 'Segoe UI', sans-serif;
      font-size: 30px;
      font-weight: 700;
      color: #0074BA;
    }

    .logo-initial {
      background-color: #0074BA;
      color: white;
      padding: 4px 10px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 1px;
    }

    .logo-full {
      margin-left: 2px;
      opacity: 1;
      transform: none;
    }
  `]
})
export class BrandingComponent {}
