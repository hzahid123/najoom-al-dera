import { Routes } from '@angular/router';
import { FooterComponent } from 'src/app/layouts/full/vertical/footer/footer.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GeographiesComponent } from './geographies/geographies.component';
import { GalleryComponent } from './gallery/gallery.component';
export const AppsRoutes: Routes = [
  {
    path: '',
    children: [

  
         {
        path: 'footer',
        component: FooterComponent,
        data: {
          title: 'footer',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'footer' },
          ],
        },
      },

           {
        path: 'gallery',
        component: GalleryComponent,
        data: {
          title: 'gallery',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'gallery' },
          ],
        },
      },
          {
        path: 'contactus',
        component: ContactusComponent,
        data: {
          title: 'contactus',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'contactus' },
          ],
        },
      },   
       
      {
        path: 'aboutus',
        component: AboutusComponent,
        data: {
          title: 'aboutus',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'aboutus' },
          ],
        },
      },



        {
        path: 'geographies',
        component: GeographiesComponent,
        data: {
          title: 'geographies',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'geographies' },
          ],
        },
      },


  





     
    ],
  },
];
