import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {FirstserviceService} from './firstservice.service'

import { routes } from './app.router'

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { GenreComponent } from './genre/genre.component';
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    GenreComponent,
    HeroesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [FirstserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
