// src/app/pages/apps/services/aboutus.component.ts
import { MaterialModule } from 'src/app/material.module';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';

import AOS from 'aos';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
register();

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    TablerIconsModule,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
})
export class AboutusComponent implements OnInit, AfterViewInit {
  private valuesSwiper: Swiper | undefined;
  private leadershipSwiper: Swiper | undefined;
  videoId = 'your-upholstery-showcase-video-id'; // Replace with actual video ID
  safeVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true
    });

    const videoUrl = 'https://www.youtube.com/embed/' + this.videoId + '?autoplay=1&mute=1';
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    this.initSwipers();
  }

  ngAfterViewInit() {
    this.initSwipers();
  }

  initSwipers() {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      // Values Swiper
      this.valuesSwiper = new Swiper('.valuesSwiper', {
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
      });

      // Leadership Swiper
      this.leadershipSwiper = new Swiper('.leadershipSwiper', {
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
      });
    }
  }

  service = {
    title: 'Premium Upholstery Services',
    description: 'Based in Kuwait, we specialize in premium upholstery services for marine vessels, luxury vehicles, and custom furniture. With decades of expertise in craftsmanship and attention to detail, we transform interiors with quality materials and precision workmanship that stands the test of time.',
    imgSrc: '/assets/images/services/upholstery-hero.jpg',
    headingdata: 'Crafting Excellence, One Stitch at a Time',
    imgoverview: '/assets/images/services/workshop-overview.jpg',
    icon: 'tools',
    btndiscription: 'Request Quote',
    category: 'Upholstery Services',

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

    // Core Values
    values: [
      {
        icon: 'diamond',
        title: 'Premium Quality',
        description: 'We use only the finest materials and employ time-tested techniques to ensure every piece meets the highest standards of quality and durability.'
      },
      {
        icon: 'palette',
        title: 'Custom Design',
        description: 'Every project is unique. We work closely with clients to create personalized designs that reflect their style and functional requirements.'
      },
      {
        icon: 'clock',
        title: 'Timely Delivery',
        description: 'We respect our clients\' schedules and consistently deliver projects on time without compromising on quality or attention to detail.'
      },
      {
        icon: 'heart_handshake',
        title: 'Client Satisfaction',
        description: 'Building lasting relationships through exceptional service, clear communication, and ensuring complete satisfaction with every project.'
      }
    ],

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
    ]
  };
}