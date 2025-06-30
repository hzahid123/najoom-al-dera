import { MaterialModule } from 'src/app/material.module';
import { Component, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Pagination, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

import AOS from 'aos';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Register Swiper web components
register();

// Configure Swiper modules
Swiper.use([Pagination, Autoplay]);

interface ServiceCategory {
  category: string;
  items: string[];
}

interface Value {
  icon: string;
  iconClass?: string;
  title: string;
  description: string;
}

interface ContentSection {
  title: string;
  paragraphs: string[];
}

interface Mission {
  title: string;
  description: string;
}

interface ServiceData {
  headingdata: string;
  description: string;
  btndiscription: string;
  content: ContentSection;
  mission: Mission;
  vision: Mission;
  services: ServiceCategory[];
  values: Value[];
  title: string;
  imgSrc: string;
  imgoverview: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    TablerIconsModule,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'], // Fixed: should be styleUrls (plural)
})
export class AboutusComponent implements OnInit, AfterViewInit, OnDestroy {
  private valuesSwiper: Swiper | undefined;
  private leadershipSwiper: Swiper | undefined;
  private isBrowser: boolean;
  
  videoId = 'your-upholstery-showcase-video-id'; // Replace with actual video ID
  safeVideoUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    // Initialize safeVideoUrl in constructor to avoid undefined issues
    const videoUrl = `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  ngOnInit(): void {
     import('aos').then((AOS) => {
    AOS.init();
  });
    if (this.isBrowser) {
      // Initialize AOS only in browser environment
      AOS.init({
        duration: 800,
        once: true
      });

      // Update video URL if needed
      const videoUrl = `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      // Add a small delay to ensure DOM is fully rendered
      setTimeout(() => {
        this.initSwipers();
      }, 100);
    }
  }

  ngOnDestroy(): void {
    // Clean up Swiper instances
    if (this.valuesSwiper) {
      this.valuesSwiper.destroy(true, true);
    }
    if (this.leadershipSwiper) {
      this.leadershipSwiper.destroy(true, true);
    }
  }

  private initSwipers(): void {
    if (!this.isBrowser) return;

    try {
      if (window.innerWidth <= 768) {
        // Values Swiper
        const valuesSwiperEl = document.querySelector('.valuesSwiper');
        if (valuesSwiperEl && !this.valuesSwiper) {
          this.valuesSwiper = new Swiper('.valuesSwiper', {
            modules: [Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.valuesSwiper .swiper-pagination',
              clickable: true,
            },
            on: {
              init: () => {
                console.log('Values Swiper initialized');
              }
            }
          });
        }

        // Leadership Swiper
        const leadershipSwiperEl = document.querySelector('.leadershipSwiper');
        if (leadershipSwiperEl && !this.leadershipSwiper) {
          this.leadershipSwiper = new Swiper('.leadershipSwiper', {
            modules: [Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.leadershipSwiper .swiper-pagination',
              clickable: true,
            },
            on: {
              init: () => {
                console.log('Leadership Swiper initialized');
              }
            }
          });
        }
      }
    } catch (error) {
      console.error('Error initializing Swipers:', error);
    }
  }

  // Service data with proper typing
  service: ServiceData = {
    // Hero section properties
    headingdata: 'Crafting Excellence, One Stitch at a Time',
    description: 'Based in Kuwait, we specialize in premium upholstery services for marine vessels, luxury vehicles, and custom furniture. With decades of expertise in craftsmanship and attention to detail, we transform interiors with quality materials and precision workmanship that stands the test of time.',
    btndiscription: 'Request Quote',

    // Content section properties
    content: {
      title: 'Our Craftsmanship',
      paragraphs: [
        'With over two decades of experience in Kuwait\'s marine and automotive industries, we have built a reputation for delivering exceptional upholstery work. Our expertise spans from luxury yacht interiors to custom car seats, and bespoke furniture pieces that reflect both functionality and elegance.',
        'Every project begins with understanding our client\'s vision and ends with meticulous attention to detail. We use premium materials sourced from trusted suppliers, ensuring durability in Kuwait\'s challenging climate while maintaining the highest aesthetic standards.',
      ],
    },

    // Mission and Vision
    mission: {
      title: 'Our Mission',
      description: 'To provide exceptional upholstery services that combine traditional craftsmanship with modern techniques, delivering personalized solutions that exceed our clients\' expectations while preserving the art of fine upholstery for future generations.'
    },

    vision: {
      title: 'Our Vision',
      description: 'To be Kuwait\'s premier upholstery specialist, recognized for transforming spaces through superior craftsmanship, innovative design solutions, and unwavering commitment to quality in marine, automotive, and furniture upholstery.'
    },

    // Services offered
    services: [
      {
        category: 'Marine Upholstery',
        items: ['Yacht Interior Design', 'Boat Seating', 'Marine Canvas Work', 'Waterproof Cushions']
      },
      {
        category: 'Automotive Upholstery', 
        items: ['Custom Car Seats', 'Leather Interior Restoration', 'Convertible Tops', 'Classic Car Restoration']
      },
      {
        category: 'Furniture & Custom Work',
        items: ['Antique Furniture Restoration', 'Custom Furniture Design', 'Commercial Seating', 'Residential Upholstery']
      }
    ],

    // Core Values with iconClass for CSS styling
    values: [
      {
        icon: 'diamond',
        iconClass: 'quality',
        title: 'Premium Quality',
        description: 'We use only the finest materials and employ time-tested techniques to ensure every piece meets the highest standards of quality and durability.'
      },
      {
        icon: 'palette',
        iconClass: 'design',
        title: 'Custom Design',
        description: 'Every project is unique. We work closely with clients to create personalized designs that reflect their style and functional requirements.'
      },
      {
        icon: 'clock',
        iconClass: 'time',
        title: 'Timely Delivery',
        description: 'We respect our clients\' schedules and consistently deliver projects on time without compromising on quality or attention to detail.'
      },
      {
        icon: 'heart_handshake',
        iconClass: 'satisfaction',
        title: 'Client Satisfaction',
        description: 'Building lasting relationships through exceptional service, clear communication, and ensuring complete satisfaction with every project.'
      }
    ],

    // Additional properties
    title: 'Premium Upholstery Services',
    imgSrc: '/assets/images/services/upholstery-hero.jpg',
    imgoverview: '/assets/images/services/workshop-overview.jpg',
    icon: 'tools',
    category: 'Upholstery Services'
  };

  // Method to handle CTA button click
  onCtaClick(): void {
    // Add your CTA logic here
    console.log('CTA button clicked');
  }

  // Method to handle contact button click
  onContactClick(): void {
    // Add your contact logic here
    console.log('Contact button clicked');
  }
}