import { Component, OnInit } from '@angular/core';
import {DomSanitizer, } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faCircleInfo, faLocationPin, faHeart} from "@fortawesome/free-solid-svg-icons";
import {DetallesComponent} from "./detalles/detalles.component";
import {LocalizacionComponent} from "./localizacion/localizacion.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public peticionesEpisodios: any = [];
  public URL: string = 'https://rickandmortyapi.com/api/character';
  public personajes: any = [];
  public episodios: any = [];
  public descargaJson: any;

  constructor(
              public faIconLibrary: FaIconLibrary,
              public dialog: MatDialog,
              private httpClient: HttpClient,
              private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.faIconLibrary.addIcons(faCircleInfo, faLocationPin, faHeart);
    this.httpClient.get(this.URL).subscribe(personajes => {
      // @ts-ignore
      this.personajes = Object.values(personajes.results);
      for (let i in this.personajes) {
        for (let j in this.personajes[i].episode) {
          this.httpClient.get(this.personajes[i].episode[j]).subscribe(episodios => {
            this.personajes[i].episode.push(Object.values(episodios));
            this.personajes[i].episode.shift()
          })
        }
        console.log(this.personajes[i]);
      }
    })

  }


  visualizarDetalles(idPersonaje: number) {
    this.dialog.open(DetallesComponent, {
      width: '75vw',
      height: '75vh',
      data: idPersonaje
    });
  }

  visualizarLocalizacion(idPersonaje: number) {
    this.dialog.open(LocalizacionComponent, {
      width: '75vw',
      height: '40vh',
      data: idPersonaje
    });
  }

  async guardarFavorito(idPersonaje: number) {
    const yourModuleName = require('file-saver');
    let personaje = await this.httpClient.get(this.URL + '/' + idPersonaje).toPromise()
    let json = JSON.stringify(personaje)
    // @ts-ignore
    let nombreArchivo = personaje.name;
    let archivo = new Blob([JSON.stringify(json)], {
      type: 'application/json'
    });

// Save the file
    yourModuleName.saveAs(archivo, nombreArchivo);
  }
}
