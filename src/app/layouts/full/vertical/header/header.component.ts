import { Component, Output, EventEmitter, Input, ViewEncapsulation, OnInit } from '@angular/core';
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
import { Location } from '@angular/common';

import { Router } from '@angular/router';

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
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  
  isMobileMenuOpen = false;
  translatedServices: any[] = [];
  translatedAboutUs: any[] = [];
  translatedApps: any[] = [];
  
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
  //     private location: Location,

  // private router: Router,
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.translateAll();
    this.translate.onLangChange.subscribe(() => {
      this.translateAll();
    });
  }

  
   goToContact() {
    this.scrollService.scrollTo('contact-section');
  }
  goToFaq() {
  this.scrollService.scrollTo('faq-section');
}
goToGeographies() {
  this.scrollService.scrollTo('geographies-section');
}
// navigateFromHeader(link: string) {
//   console.log('Before replaceState:', window.history.length, history.state);
//   this.location.replaceState(this.location.path());
//   console.log('After replaceState:', window.history.length, history.state);

//   this.router.navigateByUrl(link).then(() => {
//     console.log('After navigateByUrl:', window.history.length, history.state);
//   });
// }





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
  // so below methode  is to applied all changes on project to do RTL(right to left  )direction of all project grids and components

// changeLanguage(lang: any): void {
//   this.translate.use(lang.code);
//   this.selectedLanguage = lang;
  
//   // Set document direction and lang attribute
//   document.documentElement.dir = lang.code === 'ar-KW' ? 'rtl' : 'ltr';
//   document.documentElement.lang = lang.code;
  
//   // Add these classes to body
//   if (lang.code === 'ar-KW') {
//     document.body.classList.add('rtl');
//     document.body.classList.remove('ltr');
//   } else {
//     document.body.classList.add('ltr');
//     document.body.classList.remove('rtl');
//   }
  
  // this.cdRef.detectChanges();

  // }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.toggleMobileFilterNav.emit();
  }
    options = this.settings.getOptions();

  private emitOptions() {
    this.optionsChange.emit(this.options);
  }

  setlightDark(theme: string) {
    this.options.theme = theme;
    this.emitOptions();
  }



  // ... rest of your existing methods (setlightDark, emitOptions)

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
      titleKey: 'WEB_DEV',
      link: '/apps/services/detail/1',
      
    },
    {
      id: 2,
      titleKey: 'MOBILE_DEV',
      link: '/apps/services/detail/2',
    },
    {
      id: 3,
      titleKey: 'UI_UX',
      link: '/apps/services/detail/3',
    },
    {
      id: 4,
      titleKey: 'ECOMMERCE',
      link: '/apps/services/detail/4',
    },
    {
      id: 5,
      titleKey: 'CUSTOM_SOFTWARE',
      link: '/apps/services/detail/5',
    },
    {
      id: 6,
      titleKey: 'QA',
      link: '/apps/services/detail/6',
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
      titleKey: 'GEOGRAPHIES',
      link: '/apps/geographies',
    }
  ];
}