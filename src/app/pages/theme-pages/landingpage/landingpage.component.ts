import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { ViewportScroller } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterLink } from '@angular/router';
import {  TranslateModule } from '@ngx-translate/core';
import { ScrollService } from 'src/app/services/scroll.service';
import {   AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';

register();
interface demos {
  id: number;
  imgSrc: string;
  name?: string;
  nameKey?: string;
  link: string;
  translatedName?: string;
  category?: string;
}

interface testimonials {
  id: number;
  imgSrc: string;
  name: string;
  subtext?: string;
  subtextKey?: string;
  message?: string;
  messageKey?: string;
  translatedSubtext?: string;
  translatedMessage?: string;
}

interface features {
  id: number;
  icon: string;
  title?: string;
  titleKey?: string;
  subtext?: string;
  subtextKey?: string;
  translatedTitle?: string;
  translatedSubtext?: string;
}

@Component({
  selector: 'app-landingpage',
  imports: [MaterialModule, TablerIconsModule, TranslateModule , RouterModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']

})
export class AppLandingpageComponent implements OnInit, AfterViewInit  {
  private testimonialsSwiper: Swiper | undefined;

  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  showAllServices = false;
  showAllDemos = false;
  initialServiceCount = 4;
  initialDemoCount = 4;
  showAllFeatures = false;
  initialFeatureCount = 4;
  options = this.settings.getOptions();
  isRTL = false;

  constructor(
    private settings: CoreService,
    private scroller: ViewportScroller,
    private scrollService: ScrollService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.translateAll();
    this.translate.onLangChange.subscribe(() => {
      this.translateAll();
    });
    this.initTestimonialsSwiper();
  }

  goToContact() {
    this.scrollService.scrollTo('contact-section');
  }

  ngAfterViewInit() {
    this.forceVideoPlay();
    this.initTestimonialsSwiper();
  }
  
  forceVideoPlay() {
    const video = document.querySelector('.video-background') as HTMLVideoElement;
    if (video) {
      video.play().catch(error => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            video.muted = true;
            video.play();
          });
        }
      });
    }
  }

  private initTestimonialsSwiper() {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setTimeout(() => {
        const slideCount = this.translatedTestimonials.length;
        const enableLoop = slideCount >= 4;
        
        this.testimonialsSwiper = new Swiper('.testimonialsSwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: enableLoop,
          loop: enableLoop,
          autoplay: enableLoop ? {
            delay: 3000,
            disableOnInteraction: false,
          } : false,
          pagination: {
            el: '.testimonialsSwiper .swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            480: {
              slidesPerView: enableLoop ? 1.2 : 1
            }
          }
        });
      }, 100);
    }
  }

  gotoDemos() {
    this.scroller.scrollToAnchor('demos');
  }

  get visibleServiceCount() {
    if (window.innerWidth <= 767.98) {
      return this.showAllServices ? this.translatedDemos.length : 1;
    }
    return this.showAllServices ? this.translatedDemos.length : this.initialServiceCount;
  }
  
  get visibleDemoCount() {
    if (window.innerWidth <= 767.98) {
      return this.showAllDemos ? this.translatedAppDemos.length : 1;
    }
    return this.showAllDemos ? this.translatedAppDemos.length : this.initialDemoCount;
  }

  get visibleFeatureCount() {
    if (window.innerWidth <= 767) {
      return this.showAllFeatures ? this.translatedFeatures.length : 1;
    }
    return this.showAllFeatures ? this.translatedFeatures.length : this.initialFeatureCount;
  }

  toggleFeatures() {
    this.showAllFeatures = !this.showAllFeatures;
  }
  
  toggleServices() {
    this.showAllServices = !this.showAllServices;
  }
  
  toggleDemos() {
    this.showAllDemos = !this.showAllDemos;
  }

  translatedDemos: demos[] = [];
  translatedAppDemos: demos[] = [];
  translatedTestimonials: testimonials[] = [];
  translatedFeatures: features[] = [];

  private translateAll() {
    this.translatedDemos = this.demos.map(demo => ({
      ...demo,
      translatedName: this.translate.instant('LANDING.DEMOS.' + demo.nameKey)
    }));

    this.translatedAppDemos = this.appdemos.map(app => ({
      ...app,
      translatedName: this.translate.instant('LANDING.APP_DEMOS.' + app.nameKey)
    }));

    this.translatedTestimonials = this.testimonials.map(testimonial => ({
      ...testimonial,
      translatedSubtext: this.translate.instant('LANDING.TESTIMONIALS.' + testimonial.subtextKey),
      translatedMessage: this.translate.instant('LANDING.TESTIMONIALS.' + testimonial.messageKey)
    }));

    this.translatedFeatures = this.features.map(feature => ({
      ...feature,
      translatedTitle: this.translate.instant('LANDING.FEATURES.' + feature.titleKey),
      translatedSubtext: this.translate.instant('LANDING.FEATURES.' + feature.subtextKey)
    }));
  }

  // Marine Upholstery Services
  demos: demos[] = [
    {
      id: 1,
      imgSrc: '/assets/images/services/ship-upholstery.jpg',
      nameKey: 'SHIP_UPHOLSTERY',
      link: '/apps/services/detail/1',
    },
    {
      id: 2,
      imgSrc: '/assets/images/services/yacht-interior.jpg',
      nameKey: 'CAR_UPHOLSTERY',
      link: '/apps/services/detail/2',
    },
    {
      id: 3,
      imgSrc: '/assets/images/services/boat-seats.jpg',
      nameKey: 'FURNITURE_UPHOLSTERY',
      link: '/apps/services/detail/3',
    },
    {
      id: 4,
      imgSrc: '/assets/images/services/marine-cushions.jpg',
      nameKey: 'GENERAL_UPHOLSTERY',
      link: '/apps/services/detail/4',
    },
  ];

  // Portfolio Projects
appdemos: demos[] = [
  {
    id: 1,
    imgSrc: '/assets/images/portfolio/luxury-yacht.jpg',
    nameKey: 'SHIP_UPHOLSTERY',
    link: '/apps/gallery',
    category: 'ship' // Add category property
  },
  {
    id: 2,
    imgSrc: '/assets/images/portfolio/fishing-vessel.jpg',
    nameKey: 'CAR_UPHOLSTERY',
    link: '/apps/gallery',
    category: 'car' // Add category property
  },
  {
    id: 3,
    imgSrc: '/assets/images/portfolio/speedboat.jpg',
    nameKey: 'FURNITURE_UPHOLSTERY',
    link: '/apps/gallery',
    category: 'furniture' // Add category property
  },
  {
    id: 4,
    imgSrc: '/assets/images/portfolio/traditional-dhow.jpg',
    nameKey: 'GENERAL_UPHOLSTERY',
    link: '/apps/gallery',
    category: 'general' // Add category property
  },
];

  // Client Testimonials
  testimonials: testimonials[] = [
    {
      id: 1,
      imgSrc: '/assets/images/profile/user-1.jpg',
      name: 'Captain Ahmed Al-Rashid',
      subtextKey: 'YACHT_OWNER',
      messageKey: 'TESTIMONIAL_1'
    },
    {
      id: 2,
      imgSrc: '/assets/images/profile/user-4.jpg',
      name: 'Mohammed Al-Sabah',
      subtextKey: 'SHIPPING_COMPANY',
      messageKey: 'TESTIMONIAL_2'
    },
    {
      id: 3,
      imgSrc: '/assets/images/profile/user-5.jpg',
      name: 'Khalid Al-Mutairi',
      subtextKey: 'MARINA_MANAGER',
      messageKey: 'TESTIMONIAL_3'
    }
  ];

  // Features and Services
  features: features[] = [
    {
      id: 1,
      icon: 'droplet',
      titleKey: 'WATERPROOF_MATERIALS',
      subtextKey: 'WATERPROOF_MATERIALS_DESC'
    },
    {
      id: 2,
      icon: 'palette',
      titleKey: 'CUSTOM_DESIGN',
      subtextKey: 'CUSTOM_DESIGN_DESC'
    },
    {
      id: 3,
      icon: 'anchor',
      titleKey: 'MARINE_EXPERTISE',
      subtextKey: 'MARINE_EXPERTISE_DESC'
    },
    {
      id: 4,
      icon: 'shield-check',
      titleKey: 'QUALITY_GUARANTEE',
      subtextKey: 'QUALITY_GUARANTEE_DESC'
    },
    {
      id: 5,
      icon: 'sun',
      titleKey: 'UV_RESISTANT',
      subtextKey: 'UV_RESISTANT_DESC'
    },
    {
      id: 6,
      icon: 'clock',
      titleKey: 'QUICK_DELIVERY',
      subtextKey: 'QUICK_DELIVERY_DESC'
    },
    {
      id: 7,
      icon: 'map-pin',
      titleKey: 'ON_SITE_SERVICE',
      subtextKey: 'ON_SITE_SERVICE_DESC'
    },
    {
      id: 8,
      icon: 'settings',
      titleKey: 'MAINTENANCE_SUPPORT',
      subtextKey: 'MAINTENANCE_SUPPORT_DESC'
    },
    {
      id: 9,
      icon: 'flame',
      titleKey: 'FIRE_RESISTANT',
      subtextKey: 'FIRE_RESISTANT_DESC'
    },
    {
      id: 10,
      icon: 'color-swatch',
      titleKey: 'COLOR_MATCHING',
      subtextKey: 'COLOR_MATCHING_DESC'
    },
    {
      id: 11,
      icon: 'phone',
      titleKey: 'EMERGENCY_REPAIR',
      subtextKey: 'EMERGENCY_REPAIR_DESC'
    },
    {
      id: 12,
      icon: 'currency-dollar',
      titleKey: 'COMPETITIVE_PRICING',
      subtextKey: 'COMPETITIVE_PRICING_DESC'
    },
    {
      id: 13,
      icon: 'user-check',
      titleKey: 'CONSULTATION_SERVICE',
      subtextKey: 'CONSULTATION_SERVICE_DESC'
    },
    {
      id: 14,
      icon: 'tool',
      titleKey: 'INSTALLATION_SERVICE',
      subtextKey: 'INSTALLATION_SERVICE_DESC'
    }
  ];
}