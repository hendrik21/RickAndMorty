import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  constructor(private httpClient: HttpClient) { }

  obtenerEpisodios(URL: string): Observable<any> {
    return this.httpClient.get<any>(URL)
  }
}
