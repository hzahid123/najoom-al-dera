import { Component, OnInit, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDialogRef } from '@angular/material/dialog';
import emailjs from 'emailjs-com';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TablerIconsModule,
    TranslateModule
  ],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  isRTL = false;
  formData: any = {
    name: '',
    company: '',
    email: '',
    region: '',
    phone: '',
    budget: '',
    services: {
      RemoteITResources: false,
      CustomSoftware: false,
      WebDev: false,
      MobileApp: false,
      ARVR: false,
      Gaming: false,
      CyberSecurity: false,
      Other: false
    },
    projectDetails: ''
  };
  
  regions = [
    { id: '0', name: 'All Regions' },
    { id: '1', name: 'India' },
    { id: '2', name: 'Africa' },
    { id: '3', name: 'United Kingdom' },
    { id: '4', name: 'United States' },
    { id: '5', name: 'Europe' },
    { id: '6', name: 'Asia' },
    { id: '7', name: 'Australia' }
  ];
  
  budgets = [
    { id: '0', name: 'Undecided' },
    { id: '1', name: '< $10,000' },
    { id: '2', name: '$10,000 - $20,000' },
    { id: '3', name: '$20,000 - $50,000' },
    { id: '4', name: '$50,000 - $100,000' },
    { id: '5', name: '> $100,000' }
  ];
  
  serviceID = 'service_qtauws6';
  templateID = 'template_abawn9t';
  userID = 't5jFONp5KWdruYIDB';
  
  constructor(
    private translate: TranslateService,
    @Optional() public dialogRef: MatDialogRef<ContactusComponent>
  ) {
    this.translate.onLangChange.subscribe(event => {
      this.isRTL = event.lang === 'ar-KW';
    });
  }
 
  ngOnInit() {
    emailjs.init(this.userID);
  }

  // Close dialog method
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  
  onSubmit() {
    const selectedRegion = this.regions.find(r => r.id === this.formData.region)?.name || '';
    const selectedBudget = this.budgets.find(b => b.id === this.formData.budget)?.name || '';
    const selectedServices = Object.entries(this.formData.services)
      .filter(([_, checked]) => checked)
      .map(([key]) => this.getServiceLabel(key))
      .join(', ');
    
    const templateParams = {
      name: this.formData.name,
      company: this.formData.company,
      email: this.formData.email,
      region: selectedRegion,
      phone: this.formData.phone,
      budget: selectedBudget,
      services: selectedServices,
      project_details: this.formData.projectDetails
    };
    
    emailjs.send(this.serviceID, this.templateID, templateParams)
      .then(() => {
        alert(this.translate.instant('CONTACT.SUCCESS_MESSAGE'));
        if (this.dialogRef) {
          this.closeDialog(); // Close dialog after successful submission
        }
      }, (err) => {
        console.error('Send email error:', err);
        alert(this.translate.instant('CONTACT.ERROR_MESSAGE'));
      });
  }
  
  getServiceLabel(serviceKey: string): string {
    const map: { [key: string]: string } = {
      RemoteITResources: this.translate.instant('SERVICES_contactform.REMOTE_IT'),
      CustomSoftware: this.translate.instant('SERVICES_contactform.CUSTOM_SOFTWARE'),
      WebDev: this.translate.instant('SERVICES_contactform.WEB_DEV'),
      MobileApp: this.translate.instant('SERVICES_contactform.MOBILE_APP'),
      ARVR: this.translate.instant('SERVICES_contactform.AR_VR'),
      Gaming: this.translate.instant('SERVICES_contactform.GAMING'),
      CyberSecurity: this.translate.instant('SERVICES_contactform.CYBER_SECURITY'),
      Other: this.translate.instant('SERVICES_contactform.OTHER')
    };
    return map[serviceKey] || serviceKey;
  }
  
  getServiceKeys(): string[] {
    return Object.keys(this.formData.services);
  }
}