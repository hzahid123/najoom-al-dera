	import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BrandingComponent } from '../../vertical/sidebar/branding.component';
import { TablerIconsModule } from 'angular-tabler-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
   imports: [CommonModule,MaterialModule,RouterModule,	MatFormFieldModule,TranslateModule,
MatInputModule,BrandingComponent,TablerIconsModule],
})
export class FooterComponent {
   isRTL = false;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(event => {
      this.isRTL = event.lang === 'ar-KW';
    });
  }

  onSubmit() {
 
  }


}