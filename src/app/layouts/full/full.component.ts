import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy , ViewChild, ViewEncapsulation,ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { CoreService } from 'src/app/services/core.service';
import { AppSettings } from 'src/app/config';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TablerIconsModule } from 'angular-tabler-icons';
import { HeaderComponent } from './vertical/header/header.component';
import { AppBreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { CustomizerComponent } from './shared/customizer/customizer.component';
import { AppLandingpageComponent } from "../../pages/theme-pages/landingpage/landingpage.component";
import { ContactusComponent } from 'src/app/pages/contactus/contactus.component';
import { MatDialog } from '@angular/material/dialog';
import { FooterComponent } from 'src/app/layouts/full/vertical/footer/footer.component';
import { AppFaqComponent } from "../../pages/theme-pages/faq/faq.component";
import { GeographiesComponent } from "../../pages/apps/geographies/geographies.component";

import { ScrollService } from 'src/app/services/scroll.service';

// for mobile app sidebar
interface apps {
  id: number;
  img: string;
  title: string;
  // subtitle: string;
  link: string;
}
interface services {
  id: number;
  title: string;
  link: string;
}
interface aboutus {
  id: number;
  title: string;
  link: string;
}

@Component({
    selector: 'app-full',
    imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    HeaderComponent,
    // AppBreadcrumbComponent,
    CustomizerComponent,
    // AppLandingpageComponent
    FooterComponent,
    AppFaqComponent,
  GeographiesComponent
],
    templateUrl: './full.component.html',
    styleUrls: [],
    encapsulation: ViewEncapsulation.None
})
export class FullComponent implements OnInit ,OnDestroy {

    @ViewChild('contactSection') contactSection!: ElementRef;
     // Method to expose to header


  public sidenav: MatSidenav;
  resView = false;
  @ViewChild('content', { static: true }) content!: MatSidenavContent;
  //get options from service
  options = this.settings.getOptions();
  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private scrollSub: Subscription;

  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  get isTablet(): boolean {
    return this.resView;
  }

  // for mobile app sidebar
 

  constructor(
    private settings: CoreService,
    private router: Router,
    private dialog: MatDialog,
    private scrollService: ScrollService,
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer
    
  ) {
    this.htmlElement = document.querySelector('html')!;
   

    // Initialize project theme with options
    this.receiveOptions(this.options);

    // This is for scroll to top
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        this.content.scrollTo({ top: 0 });
      });

       this.iconRegistry.addSvgIcon(
    'whatsapp', // 👈 The name you'll use in <mat-icon svgIcon="whatsapp">
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/whatsapp.svg') // 👈 Path to your SVG file
  );
  }

// Add this to your component class
public isGeographiesRoute = false;

// Update your ngOnInit to include route checking
ngOnInit() {
  this.checkCurrentRoute();
  
  this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.checkCurrentRoute();
  });

  this.scrollSub = this.scrollService.scrollToSection$.subscribe(sectionId => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  });
}

private checkCurrentRoute() {
  this.isGeographiesRoute = this.router.url.includes('geographies');
}

  ngOnDestroy() {
     if (this.scrollSub) {
      this.scrollSub.unsubscribe();
    }
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
    this.resetCollapsedState();
  }

  resetCollapsedState(timer = 400) {
    setTimeout(() => this.settings.setOptions(this.options), timer);
  }

  receiveOptions(options: AppSettings): void {
   // this.options = options;
    this.toggleDarkTheme(options);
    this.toggleColorsTheme(options);
  }

  toggleDarkTheme(options: AppSettings) {
    if (options.theme === 'dark') {
      this.htmlElement.classList.add('dark-theme');
      this.htmlElement.classList.remove('light-theme');
    } else {
      this.htmlElement.classList.remove('dark-theme');
      this.htmlElement.classList.add('light-theme');
    }
  }

  toggleColorsTheme(options: AppSettings) {
    // Remove any existing theme class dynamically
    this.htmlElement.classList.forEach((className) => {
      if (className.endsWith('_theme')) {
        this.htmlElement.classList.remove(className);
      }
    });

    // Add the selected theme class
    this.htmlElement.classList.add(options.activeTheme);
  }

openContactUsdia() {
  this.dialog.open(ContactusComponent, {
    width: '800px',
    maxWidth: '95vw', // More edge space on mobile
    height: 'auto', // Let content determine height
    maxHeight: '85vh', // Better mobile viewport usage
    panelClass: 'contact-us-dialog',
    backdropClass: 'contact-us-backdrop',
    autoFocus: false,
    disableClose: false
  });
}

// this below is for automatically scrolling to contact us 
// openContactUs() {
//   const element = document.getElementById('contact-section');
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// }


}



