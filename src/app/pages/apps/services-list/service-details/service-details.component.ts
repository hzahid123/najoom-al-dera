// src/app/pages/apps/services/service-details.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/apps/servicees/services.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from 'src/app/services/scroll.service';
import { Location } from '@angular/common';
import { ContactusComponent } from 'src/app/pages/contactus/contactus.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    TablerIconsModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
  animations: [
    trigger('hoverAnimation', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      })),
      state('hovered', style({
        transform: 'scale(1.02)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class ServiceDetailsComponent implements OnInit, OnDestroy {
  serviceId!: number;
  service = signal<any>(null);
  private paramSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scrollService: ScrollService,
    private servicesService: ServicesService,
    private location: Location,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.paramSubscription = this.route.paramMap.subscribe(params => {
      console.log('Route params changed:', params.get('id'));
      this.serviceId = Number(params.get('id'));
      this.loadService();
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }

  private loadService(): void {
    const service = this.servicesService.getServiceById(this.serviceId);
    if (service) {
      this.service.set(service);
      console.log('Service loaded:', service);
    } else {
      // Just stay here, show not found UI (don't navigate!)
      this.service.set(null);
      console.log('Service not found for ID:', this.serviceId);
    }
  }

  goToContact() {
    this.scrollService.scrollTo('contact-section');
  }

  get isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  // Add these methods for hover effects
  onHover(card: any) {
    card.state = 'hovered';
  }

  onLeave(card: any) {
    card.state = 'normal';
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
}