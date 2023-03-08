import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public personaje: any;
  private episodio: any;
  public URL: string = 'https://rickandmortyapi.com/api';

  constructor(@Inject(MAT_DIALOG_DATA) public idPersonaje: number,
              private httpClient: HttpClient
              ) { }

  ngOnInit(): void {
    this.httpClient.get(this.URL + '/character/' + this.idPersonaje).subscribe(personaje => {
      this.personaje = personaje;
        for (let i in this.personaje.episode) {
          this.httpClient.get(this.personaje.episode[i]).subscribe(episodios => {
            this.personaje.episode.push(Object.values(episodios));
            this.personaje.episode.shift()
          })
        }
        console.log(this.personaje)
    })
  }

  verDetallesEpisodio(id: any) {

    this.httpClient.get(this.URL + '/episode/' + id).subscribe(episodio => {
      this.episodio = episodio;
      console.log(episodio);
    })
  }
}
