/**
 * Created by App-Client2 on 11/18/2016.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { GenreComponent } from './genre/genre.component'
import {HeroesComponent} from "./heroes/heroes.component";

export const router: Routes =[
  {path:'', redirectTo:'',pathMatch:'full'},
  {path:'artiste', component:ArtisteComponent},
  {path:'genre', component:GenreComponent},
  {path:'heroes',component:HeroesComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
