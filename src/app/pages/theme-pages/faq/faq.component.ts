import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-faq',
    imports: [MatCardModule, MatExpansionModule, MatButtonModule,TranslateModule],
    templateUrl: './faq.component.html'
    , styleUrls: ['./faq.component.scss'],
})
export class AppFaqComponent {
 isRTL = false;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(event => {
      this.isRTL = event.lang === 'ar-KW';
    });
  }
  panelOpenState = false;
}
