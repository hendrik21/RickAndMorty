import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PersonajesService} from "../services/personajes.service";
import {Personaje} from "../interfaces/personaje";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public personaje: any;

  constructor(@Inject(MAT_DIALOG_DATA) public idPersonaje: number,
              private personajesService: PersonajesService,
              ) { }

  ngOnInit(): void {
    this.personajesService.obtenerPersonaje(this.idPersonaje).subscribe((personaje) => {
      this.personaje = personaje
      console.log(this.personaje)
    })
  }

}
