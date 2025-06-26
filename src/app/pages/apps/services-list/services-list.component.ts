// src/app/pages/apps/services/services-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/apps/servicees/services.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [MatCardModule, TablerIconsModule, MatButtonModule],
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  services = this.servicesService.getServices();
  featuredServices = this.servicesService.getFeaturedServices();

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  viewServiceDetails(id: number): void {
    this.router.navigate(['apps/services/detail', id]);
  }
}