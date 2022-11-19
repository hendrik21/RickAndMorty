import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, map, switchMap} from 'rxjs';
import {Personaje} from "../interfaces/personaje";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  public URL: string = 'https://rickandmortyapi.com/api/character';
  public personajes: any

  constructor(private httpClient: HttpClient) { }

  async obtenerPersonajes() {
    this.personajes = await this.httpClient.get(this.URL)
  }

  obtenerPersonaje(idPersonaje: number): Observable<Personaje> {
    return this.httpClient.get<Personaje>(this.URL + '/'+idPersonaje);
  }
}
