import { Component, OnInit } from '@angular/core';
import {switchMap, tap, map, Observable, forkJoin} from "rxjs"
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faCircleInfo, faLocationPin, faHeart} from "@fortawesome/free-solid-svg-icons";
import {PersonajesService} from "./services/personajes.service";
import {EpisodiosService} from "./services/episodios.service";
import {Personaje} from "./interfaces/personaje";
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

  constructor(private personajesService: PersonajesService,
              private episodiosService: EpisodiosService,
              public faIconLibrary: FaIconLibrary,
              public dialog: MatDialog,
              private httpClient: HttpClient) {}

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
      height: '75vh',
      data: idPersonaje
    });
  }

  guardarFavorito(idPersonaje: number) {

  }

}
