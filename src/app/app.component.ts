import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faCircleInfo, faLocationPin, faHeart} from "@fortawesome/free-solid-svg-icons";
import {PersonajesService} from "./services/personajes.service";
import {Personaje} from "./interfaces/personaje";
import {DetallesComponent} from "./detalles/detalles.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public personajes: any;

  constructor(private personajesService: PersonajesService,
              public faIconLibrary: FaIconLibrary,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.faIconLibrary.addIcons(faCircleInfo, faLocationPin, faHeart);
    this.personajesService.obtenerPersonajes().subscribe((personaje: any) => {
      this.personajes = personaje.results
      console.log(this.personajes);
    });
  }

  visualizarDetalles(idPersonaje: number) {
    this.dialog.open(DetallesComponent, {
      width: '75vw',
      height: '75vh',
      data: idPersonaje
    });
  }

  visualizarLocalizacion(idPersonaje: number) {

  }

  guardarFavorito(idPersonaje: number) {

  }

}
