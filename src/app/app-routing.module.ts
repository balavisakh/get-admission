import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { CollegesListComponent } from './modules/colleges/colleges-list/colleges-list.component';
import { CollegesDetailsComponent } from './modules/colleges/colleges-details/colleges-details.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { OnConstructionComponent } from './on-construction/on-construction.component';
import { TopExamsComponent } from './top-exams/top-exams.component';
import { Comedk2020Component } from './comedk2020/comedk2020.component';



export const routes: Routes = [
  {
    path: '',
    // component: FullComponent,
    // canActivate: [ auth],
    children: [
      {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'colleges',
        component: CollegesListComponent
      }, {
        path: 'colleges/:id',
        component: CollegesDetailsComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'on-construction',
        component: OnConstructionComponent
      },
      {
        path: 'top-exams',
        component: TopExamsComponent
      },
      {
        path: 'comedk',
        component: Comedk2020Component 
      },
      {
        path: '**',
        redirectTo: 'home', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
