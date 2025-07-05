import { Component, Output, EventEmitter, Input, ViewEncapsulation, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppSettings } from 'src/app/config';
import { BrandingComponent } from '../../vertical/sidebar/branding.component';
import { ChangeDetectorRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    MaterialModule,
    BrandingComponent,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.15s ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('buttonHover', [
      state('default', style({
        transform: 'scale(1)',
        boxShadow: 'none'
      })),
      state('hover', style({
        transform: 'scale(1.05)',
        boxShadow: '0 4px 8px rgba(0, 116, 186, 0.3)'
      })),
      transition('default <=> hover', animate('0.2s ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  
  isMobileMenuOpen = false;
  translatedServices: any[] = [];
  translatedAboutUs: any[] = [];
  translatedApps: any[] = [];
  isScrolled = false;
  hoverState = 'default';
  
  showFiller = false;

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: '/assets/images/flag/icon-flag-en.svg',
  };

  public languages: any[] = [
    {
      language: 'English',
      code: 'en',
      type: 'US',
      icon: '/assets/images/flag/icon-flag-en.svg',
    },
    {
      language: 'العربية', // Arabic
      code: 'ar-KW',
      icon: '/assets/images/flag/kuwait-flag-icon.svg',
    }
  ];

  @Output() optionsChange = new EventEmitter<AppSettings>();

  constructor(
    private settings: CoreService,
    public dialog: MatDialog,
    private scrollService: ScrollService,
    private translate: TranslateService,
    private cdRef: ChangeDetectorRef,
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth > 959 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  ngOnInit() {
    this.translateAll();
    this.translate.onLangChange.subscribe(() => {
      this.translateAll();
    });
  }

  ngOnDestroy() {
    this.cleanupBodyStyles();
  }

  private translateAll() {
    this.translatedServices = this.services.map(service => ({
      ...service,
      translatedTitle: this.translate.instant('SERVICES.' + service.titleKey)
    }));

    this.translatedAboutUs = this.aboutus.map(about => ({
      ...about,
      translatedTitle: this.translate.instant('ABOUT.' + about.titleKey)
    }));

    this.translatedApps = this.apps.map(app => ({
      ...app,
      translatedTitle: this.translate.instant('APPS.' + app.titleKey)
    }));
  }

  changeLanguage(lang: any): void {
    this.translate.use(lang.code);
    this.selectedLanguage = lang;
    document.documentElement.dir = lang.code === 'ar-KW' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.code;
    this.cdRef.detectChanges();
  }

  toggleMobileMenu() {
    console.log('Toggle mobile menu clicked, current state:', this.isMobileMenuOpen);
    
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  private openMobileMenu() {
    console.log('Opening mobile menu');
    this.isMobileMenuOpen = true;
    document.body.classList.add('menu-open');
    this.cdRef.detectChanges();
  }

  private closeMobileMenu() {
    console.log('Closing mobile menu');
    this.isMobileMenuOpen = false;
    this.cleanupBodyStyles();
    this.cdRef.detectChanges();
  }

  private cleanupBodyStyles() {
    document.body.classList.remove('menu-open');
  }

  onOverlayClick() {
    this.closeMobileMenu();
  }

  onMobileNavClick() {
    this.closeMobileMenu();
  }

  goToContact() {
    this.scrollService.scrollTo('contact-section');
    this.closeMobileMenu();
  }

  goToFaq() {
    this.scrollService.scrollTo('faq-section');
    this.closeMobileMenu();
  }

  goToGeographies() {
    this.scrollService.scrollTo('geographies-section');
    this.closeMobileMenu();
  }

  options = this.settings.getOptions();

  private emitOptions() {
    this.optionsChange.emit(this.options);
  }

  setlightDark(theme: string) {
    this.options.theme = theme;
    this.emitOptions();
  }

  // Navigation items
  apps: any[] = [
    {
      id: 1,
      titleKey: 'BLOGS',
      link: '/apps/blog/post',
    },
    {
      id: 3,
      titleKey: 'SERVICES',
      link: '/apps/services/list',
    }
  ];

  services: any[] = [
    {
      id: 1,
      titleKey: 'SHIP_UPHOLSTERY',
      link: '/apps/services/detail/1',
    },
    {
      id: 2,
      titleKey: 'CAR_UPHOLSTERY',
      link: '/apps/services/detail/2',
    },
    {
      id: 3,
      titleKey: 'FURNITURE_UPHOLSTERY',
      link: '/apps/services/detail/3',
    },
    {
      id: 4,
      titleKey: 'GENERAL_UPHOLSTERY',
      link: '/apps/services/detail/4',
    }
  ];

  aboutus: any[] = [
    {
      id: 1,
      titleKey: 'ABOUT_US',
      link: '/apps/aboutus',
    },
    {
      id: 2,
      titleKey: 'GEOGRAPHY',
      link: '/apps/geographies',
    }
  ];
}