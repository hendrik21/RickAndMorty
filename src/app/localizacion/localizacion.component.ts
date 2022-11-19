import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.css']
})
export class LocalizacionComponent implements OnInit {

  public personaje: any
  public URL: string = 'https://rickandmortyapi.com/api/character';

  constructor(@Inject(MAT_DIALOG_DATA) public idPersonaje: number,
              private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get(this.URL + '/' + this.idPersonaje).subscribe(personaje => {
      // @ts-ignore
      this.personaje = personaje;
        this.httpClient.get(this.personaje.location.url).subscribe(locacion => {
          console.log(locacion)
          this.personaje.location = locacion
        })
    })
  }

}
