import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { EpisodioComponent } from './episodio/episodio.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    LocalizacionComponent,
    EpisodioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    FontAwesomeModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
