import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Personaje} from "../interfaces/personaje";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private URL: string = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    return this.httpClient.get<any>(this.URL)
  }
}
