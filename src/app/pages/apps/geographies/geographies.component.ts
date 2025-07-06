// src/app/pages/apps/services/geographies.component.ts
import { MaterialModule } from 'src/app/material.module';
import { Component, OnInit } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-geographies',
  standalone: true,
  imports: [
    TablerIconsModule,
    CommonModule,
    MaterialModule,
    TranslateModule
  ],
  templateUrl: './geographies.component.html',
  styleUrl: './geographies.component.scss'
})
export class GeographiesComponent implements OnInit {
  isRTL = false;
  
  service = {
    imgoverview: '/assets/images/geographies/kk.jpg',
    content: {
      // Kuwait office details
      kuwaitOffice: {
        centerName: 'Najum Al-Deera Center',
        service: 'Car Seat Upholstery',
        types: 'Private - Express - Trien',
        phone: '96686771 - 911119771',
        address: 'Kuwait - Shuwaikh - International Street - Opp. Beirut Restaurant'
      },
      // Pakistan office details
      pakistanOffice: {
        centerName: 'DryRun(Private) Limited',
        service: 'Global Delivery Center',
        phone: '+923126449414',
        address: 'Plot C, 245 humablock, Iqbal Town, Lahore, Punjab'
      }
    }
  };

  constructor(private translate: TranslateService) {
    // Handle RTL language changes
    this.translate.onLangChange.subscribe(event => {
      this.isRTL = event.lang === 'ar-KW';
    });
  }

  ngOnInit() {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }

  getTranslatedTitle(key: string): { firstPart: string; rest: string } {
    const translated = this.translate.instant(key);
    const [first, ...rest] = translated.split('|');
    return {
      firstPart: first.trim(),
      rest: rest.join('|').trim()
    };
  }
}