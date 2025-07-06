import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [
    MaterialModule,CommonModule
  ],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent  {

}