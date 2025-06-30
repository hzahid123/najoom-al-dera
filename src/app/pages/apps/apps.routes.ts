import { Routes } from '@angular/router';

import { AppBlogsComponent } from './blogs/blogs.component';
import { AppBlogDetailsComponent } from './blogs/details/details.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { FooterComponent } from 'src/app/layouts/full/vertical/footer/footer.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServiceDetailsComponent } from './services-list/service-details/service-details.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GeographiesComponent } from './geographies/geographies.component';
import { GalleryComponent } from './gallery/gallery.component';
export const AppsRoutes: Routes = [
  {
    path: '',
    children: [

   

             {
        path: 'case-studies',
        component: CaseStudiesComponent,
        data: {
          title: 'case-studies',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'case-studies' },
          ],
        },
      },
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
        path: 'blog/post',
        component: AppBlogsComponent,
        data: {
          title: 'Posts',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Posts' },
          ],
        },
      },
      {
        path: 'blog/detail/:id',
        component: AppBlogDetailsComponent,
        data: {
          title: 'Blog Detail',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Blog Detail' },
          ],
        },
      },
        // New Services Routes
  {
    path: 'services/list',
    component: ServicesListComponent,
    data: {
      title: 'Services',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Services' },
      ],
    },
  },
  {
    path: 'services/detail/:id',
    component: ServiceDetailsComponent,
    data: {
      title: 'Service Details',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Services', url: '/services/list' },
        { title: 'Service Details' },
      ],
    },
      runGuardsAndResolvers: 'always' // Ensures component reloads

  }
  ,
       
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
