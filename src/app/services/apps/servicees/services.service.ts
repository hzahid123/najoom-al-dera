// src/app/services/apps/services/services.service.ts
import { Injectable } from '@angular/core';
import { Service, services  } from 'src/app/pages/apps/services-list/serviceData';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private servicesList = signal<Service[]>(services);

  constructor() {}

  getServices(): Service[] {
    return this.servicesList();
  }

  getServiceById(id: number): Service | undefined {
    return this.servicesList().find(service => service.id === id);
  }

  getFeaturedServices(): Service[] {
    return this.servicesList().filter(service => service.featured);
  }
}