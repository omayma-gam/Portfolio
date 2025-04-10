import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProjetsComponent} from './projets/projets.component';

export const routes: Routes = [
  {path : "home" ,component:HomeComponent},
  {path : "about" , component:AboutComponent},
  {path : "contact" , component:ContactComponent},
  {path : "projets" ,component:ProjetsComponent},
  {path : "cv" , component:HomeComponent},
  {path : '**' , component:HomeComponent , pathMatch:'full'}
];

