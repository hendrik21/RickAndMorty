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

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    LocalizacionComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatListModule,
        FontAwesomeModule,
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
