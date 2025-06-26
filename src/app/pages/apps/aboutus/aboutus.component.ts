// src/app/pages/apps/services/service-details.component.ts
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
  videoId = 'QyhwSYhX09s'; // Extracted from your YouTube URL
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
  // Initialize only on mobile

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
    title: 'Web Development',
    description: 'At DryRun, we specialize in transforming businesses with enterprise-grade software solutions tailored to their needs. With a legacy of technical excellence, a global team of over 2,000 experts, and a passion for innovation, we help organizations thrive in an ever-evolving digital landscape.',
    imgSrc: '/assets/images/services/we.jpg',
    headingdata: 'Empowering Businesses, Inspiring Innovation',
    imgoverview: '/assets/images/services/eee.jpg',
    icon: 'code',
    btndiscription: 'Get in Touch',
    category: 'Development',

    content: {
      title: 'Our Philosophy',
      paragraphs: [
        'At DryRun, our philosophy is simple—empowering people and businesses through innovation. We believe in fostering a collaborative environment, investing in talent, and delivering meaningful solutions that drive progress for our clients and communities worldwide.',
      ],


    }
  };




}