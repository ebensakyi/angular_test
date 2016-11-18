import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router'

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { GenreComponent } from './genre/genre.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    GenreComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
