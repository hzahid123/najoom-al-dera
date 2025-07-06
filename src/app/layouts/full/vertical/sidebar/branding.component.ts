import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  standalone: true,
  template: `
    <a href="/" class="logo-container" dir="ltr">
      <div class="logo-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" class="ship-icon">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#374151;stop-opacity:1" />
            </linearGradient>
          </defs>
          
          <!-- Ocean waves -->
          <path d="M2 28 Q10 24 18 28 T34 28 Q36 30 38 28 V38 H2 Z" fill="url(#waveGradient)" class="wave-animation"/>
          <path d="M0 32 Q8 28 16 32 T32 32 Q38 34 40 32 V40 H0 Z" fill="url(#waveGradient)" opacity="0.7"/>
          
          <!-- Ship hull -->
          <path d="M8 20 Q20 16 32 20 L30 28 Q20 24 10 28 Z" fill="url(#shipGradient)"/>
          
          <!-- Ship cabin -->
          <rect x="14" y="12" width="12" height="8" fill="#d97706" rx="2"/>
          
          <!-- Mast -->
          <line x1="20" y1="4" x2="20" y2="20" stroke="#8b5cf6" stroke-width="2"/>
          
          <!-- Sail -->
          <path d="M22 6 Q28 8 22 14 Z" fill="#f8fafc" opacity="0.9"/>
          
          <!-- Anchor symbol -->
          <circle cx="12" cy="18" r="2" fill="#fbbf24" opacity="0.8"/>
        </svg>
      </div>
      
      <div class="logo-text">
        <span class="logo-main">
          <span class="logo-najum">Najum</span>
          <span class="logo-separator">⚓</span>
          <span class="logo-deera">Al-Deera</span>
        </span>
        <span class="logo-tagline">Marine Upholstery Excellence</span>
      </div>
    </a>
  `,
  styles: [`
    .logo-container {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
      color: inherit;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(30, 64, 175, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;
    }

    .logo-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }

    .logo-container:hover::before {
      left: 100%;
    }

    .logo-container:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(30, 64, 175, 0.2);
      border-color: rgba(59, 130, 246, 0.3);
    }

    .logo-icon {
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .ship-icon {
      filter: drop-shadow(0 4px 8px rgba(30, 64, 175, 0.3));
      transition: transform 0.3s ease;
    }

    .logo-container:hover .ship-icon {
      transform: scale(1.1) rotate(2deg);
    }

    .wave-animation {
      animation: wave 3s ease-in-out infinite;
    }

    @keyframes wave {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(-2px); }
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      font-family: 'Segoe UI', 'Roboto', sans-serif;
    }

    .logo-main {
      display: flex;
      align-items: center;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 2px;
    }

    .logo-najum {
      background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 800;
      letter-spacing: -0.5px;
      animation: shimmer 2s ease-in-out infinite;
      position: relative;
    }

    .logo-najum::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
      animation: glitter 3s ease-in-out infinite;
    }

    @keyframes shimmer {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes glitter {
      0%, 100% { left: -100%; opacity: 0; }
      50% { left: 100%; opacity: 1; }
    }

    .logo-separator {
      margin: 0 8px;
      font-size: 20px;
      color: #fbbf24;
      animation: float 2s ease-in-out infinite, sparkle 1.5s ease-in-out infinite;
      filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.6));
    }

    @keyframes sparkle {
      0%, 100% { filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.6)); }
      50% { filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.9)) drop-shadow(0 0 12px rgba(251, 191, 36, 0.4)); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-2px); }
    }

    .logo-deera {
      background: linear-gradient(135deg, #e5e7eb 0%, #f3f4f6 25%, #ffffff 50%, #f3f4f6 75%, #e5e7eb 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      letter-spacing: -0.3px;
      animation: shimmer 2.5s ease-in-out infinite;
      position: relative;
    }

    .logo-deera::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
      animation: glitter 3.5s ease-in-out infinite;
    }

    .logo-tagline {
      font-size: 11px;
      font-weight: 600;
      color: #cbd5e1;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 2px;
      opacity: 0.9;
      transition: all 0.3s ease;
    }

    .logo-container:hover .logo-tagline {
      opacity: 1;
      color: #e2e8f0;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .logo-container {
        padding: 8px 12px;
      }
      
      .logo-main {
        font-size: 22px;
      }
      
      .logo-tagline {
        font-size: 9px;
      }
      
      .logo-icon {
        margin-right: 12px;
      }
      
      .ship-icon {
        width: 32px;
        height: 32px;
      }
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .logo-najum {
        -webkit-text-fill-color: #1e40af;
      }
      
      .logo-deera {
        -webkit-text-fill-color: #374151;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .logo-container,
      .ship-icon,
      .wave-animation,
      .logo-separator {
        animation: none;
        transition: none;
      }
    }
  `]
})
export class BrandingComponent {}