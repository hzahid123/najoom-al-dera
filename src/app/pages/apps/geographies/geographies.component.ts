
// src/app/pages/apps/services/service-details.component.ts
import { MaterialModule } from 'src/app/material.module';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {  TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

register();

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
export class GeographiesComponent implements OnInit, AfterViewInit {
  videoId = 'mS3tCWnNRqk';
    safeVideoUrl: SafeResourceUrl;
  
  isRTL = false;
  service = {
    imgoverview: '/assets/images/geographies/kk.jpg',
    content: {
      paragraphs: [
        'Global Delivery Center - 1',
        'DryRun(Private) Limited Plot C, 245 humablock, Iqbal Town, Lahore, Punjab +923126449414'
      ],
   paragraphss: [
      'Kuwait Delivery Center - 1',
      'Najum Al-Deera Center',
      'Car Seat Upholstery',
      'Private - Express - Trien',
      'Phone: 96686771 - 911119771',
      'Kuwait - Shuwaikh - International Street - Opp. Beirut Restaurant'
    ]
    }
  };

  leaders = [

    {
      name: 'LEADERSHIP.ABBAS_NAME',
      img: '/assets/images/aboutus/abbas.png',
      title: 'LEADERSHIP.MANAGER1'
    },
        {
      name: 'LEADERSHIP.ZAHID_NAME',
      img: '/assets/images/aboutus/zahid.png',
      title: 'LEADERSHIP.FOUNDER'
    },
    {
      name: 'LEADERSHIP.TARIQ_NAME',
      img: '/assets/images/aboutus/tariq.png',
      title: 'LEADERSHIP.MANAGER2'
    },
  ];

  constructor(private sanitizer: DomSanitizer, private translate: TranslateService) {
    this.translate.onLangChange.subscribe(event => {
      this.isRTL = event.lang === 'ar-KW';
    });
  }

  ngOnInit() {
       AOS.init({
          duration: 800,
          once: true
        });
    
        const videoUrl = 'https://www.youtube.com/embed/' + this.videoId + '?autoplay=1&mute=1';
        this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
        this.initSwipers();
    
    this.initSwipers();
  }

  ngAfterViewInit() {
    this.initSwipers();
  }


  getTranslatedTitle(key: string): { firstPart: string; rest: string } {
    const translated = this.translate.instant(key);
    const [first, ...rest] = translated.split('|');
    return {
      firstPart: first.trim(),
      rest: rest.join('|').trim()
    };
  }

  initSwipers() {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      new Swiper('.leadershipSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: '.leadershipSwiper .swiper-pagination', clickable: true }
      });
    }
  }
}
