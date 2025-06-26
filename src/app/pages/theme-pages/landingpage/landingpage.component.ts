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

register();
interface demos {
  id: number;
  imgSrc: string;
  name?: string;
  nameKey?: string;
  link: string;
  translatedName?: string; // Add this
}

interface testimonials {
  id: number;
  imgSrc: string;
  name: string;
  subtext?: string;
  subtextKey?: string;
  message?: string;
  messageKey?: string;
  translatedSubtext?: string; // Add this
  translatedMessage?: string; // Add this
}

interface features {
  id: number;
  icon: string;
  title?: string;
  titleKey?: string;
  subtext?: string;
  subtextKey?: string;
  translatedTitle?: string; // Add this
  translatedSubtext?: string; // Add this
}
@Component({
  selector: 'app-landingpage',
  imports: [MaterialModule, TablerIconsModule, TranslateModule],
  templateUrl: './landingpage.component.html',
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
    // For iOS and some mobile browsers
    video.play().catch(error => {
      // Fallback for browsers that don't allow autoplay
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
        this.testimonialsSwiper = new Swiper('.testimonialsSwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.testimonialsSwiper .swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            480: {
              slidesPerView: 1.2
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
    // On mobile, show only 1 card initially
    if (window.innerWidth <= 767.98) {
      return this.showAllServices ? this.translatedDemos.length : 1;
    }
    return this.showAllServices ? this.translatedDemos.length : this.initialServiceCount;
  }
  
  get visibleDemoCount() {
    // On mobile, show only 1 card initially
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

  demos: demos[] = [
     {
      id: 1,
      imgSrc: '/assets/images/services/app.jpg',
      nameKey: 'MOBILE_DEV',
      link: '/apps/services/detail/2',
    },
    {
      id: 2,
      imgSrc: '/assets/images/services/websites.jpg',
      nameKey: 'WEBSITE_DEV',
      link: '/apps/services/detail/1',
    },
   
    {
      id: 3,
      imgSrc: '/assets/images/services/ui.jpg',
      nameKey: 'UI_UX',
      link: '/apps/services/detail/3',
    },
    {
      id: 4,
      imgSrc: '/assets/images/services/ecvv.jpg',
      nameKey: 'ECOMMERCE',
      link: '/apps/services/detail/4',
    },
    {
      id: 5,
      imgSrc: '/assets/images/services/custom.jpg',
      nameKey: 'CUSTOM_SOFTWARE',
      link: '/apps/services/detail/5',
    },
    {
      id: 6,
      imgSrc: '/assets/images/services/quality.jpg',
      nameKey: 'QA',
      link: '/apps/services/detail/6',
    },
  ];

  appdemos: demos[] = [
    {
      id: 1,
      imgSrc: '/assets/images/blog/webblog.jpg',
      nameKey: 'WEB_APPS',
      link: '/apps/blog/detail/1',
    },
    {
      id: 2,
      imgSrc: '/assets/images/blog/gami.jpg',
      nameKey: 'MOBILE_APPS',
      link: '/apps/blog/detail/2',
    },
    {
      id: 3,
      imgSrc: '/assets/images/blog/aig.jpg',
      nameKey: 'AI',
      link: '/apps/blog/detail/3',
    },
    {
      id: 4,
      imgSrc: '/assets/images/blog/cust.png',
      nameKey: 'PATIENT_MONITORING',
      link: '/apps/blog/detail/4',
    },
    {
      id: 5,
      imgSrc: '/assets/images/blog/System-Integrations.jpg',
      nameKey: 'WEB_DEV',
      link: '/apps/blog/detail/5',
    },
    {
      id: 6,
      imgSrc: '/assets/images/blog/cross.png',
      nameKey: 'WEB_DEV_2',
      link: '/apps/blog/detail/6',
    },
  ];

  testimonials: testimonials[] = [
    {
      id: 1,
      imgSrc: '/assets/images/profile/sd.jpg',
      name: 'Qasim Al-Mutairi',
      subtextKey: 'MOBILE_APP_DEV',
      messageKey: 'TESTIMONIAL_1'
    },
    {
      id: 2,
      imgSrc: '/assets/images/profile/rr.jpg',
      name: 'Abdullah Al-Fulan',
      subtextKey: 'DOTNET_ANGULAR',
      messageKey: 'TESTIMONIAL_2'
    },
    {
      id: 3,
      imgSrc: '/assets/images/profile/ee.jpg',
      name: 'Mohammed Saleh',
      subtextKey: 'AI_INTEGRATION',
      messageKey: 'TESTIMONIAL_3'
    }
  ];

features: features[] = [
  {
    id: 1,
    icon: 'layout-dashboard',
    titleKey: 'CUSTOM_PORTALS',
    subtextKey: 'CUSTOM_PORTALS_DESC'
  },
  {
    id: 2,
    icon: 'device-mobile',
    titleKey: 'MOBILE_APP_DEV',
    subtextKey: 'MOBILE_APP_DEV_DESC'
  },
  {
    id: 3,
    icon: 'brain',
    titleKey: 'AI_INTEGRATION',
    subtextKey: 'AI_INTEGRATION_DESC'
  },
  {
    id: 4,
    icon: 'code',
    titleKey: 'REUSABLE_BOILERPLATES',
    subtextKey: 'REUSABLE_BOILERPLATES_DESC'
  },
  {
    id: 5,
    icon: 'shield-lock',
    titleKey: 'SECURE_ARCHITECTURE',
    subtextKey: 'SECURE_ARCHITECTURE_DESC'
  },
  {
    id: 6,
    icon: 'chart-bar',
    titleKey: 'DATA_ANALYTICS',
    subtextKey: 'DATA_ANALYTICS_DESC'
  },
  {
    id: 7,
    icon: 'world',
    titleKey: 'MULTILINGUAL_SUPPORT',
    subtextKey: 'MULTILINGUAL_SUPPORT_DESC'
  },
  {
    id: 8,
    icon: 'tool',
    titleKey: 'EASY_MAINTENANCE',
    subtextKey: 'EASY_MAINTENANCE_DESC'
  },
  {
    id: 9,
    icon: 'server-cog',
    titleKey: 'API_DEVELOPMENT',
    subtextKey: 'API_DEVELOPMENT_DESC'
  },
  {
    id: 10,
    icon: 'credit-card',
    titleKey: 'PAYMENT_INTEGRATION',
    subtextKey: 'PAYMENT_INTEGRATION_DESC'
  },
  {
    id: 11,
    icon: 'refresh',
    titleKey: 'ONGOING_SUPPORT',
    subtextKey: 'ONGOING_SUPPORT_DESC'
  },
  {
    id: 12,
    icon: 'book',
    titleKey: 'DEVELOPER_DOCS',
    subtextKey: 'DEVELOPER_DOCS_DESC'
  },

];
}