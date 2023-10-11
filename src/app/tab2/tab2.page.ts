import { Component } from '@angular/core';

interface jugador {
  imagen : string;
  nombre: string;
  asistencias: string;
  seleccionado: boolean;
  color : string;
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  JUGADORES:jugador[] =  [
    {
      imagen : 'assets/griezman.png',
      nombre:'Antoine Griezmann',
      asistencias:'16',
      seleccionado: false,
      color: 'warning'
    },
    {
      imagen : 'assets/asistencias/rodry.jpg',
      nombre :'Rodrygo',
      asistencias:'9',
      seleccionado: false,
      color: 'primary'
    },{
      imagen : 'assets/asistencias/mikel.jpg',
      nombre:'Mikel Merino',
      asistencias:'8',
      seleccionado: false,
      color: 'light'
    },
    {
      imagen : 'assets/asistencias/vini.jpg',
      nombre:'Vinícius Júnior',
      asistencias:'8',
      seleccionado: false,
      color: 'danger'
    },
    {
      imagen : 'assets/asistencias/lucas.jpg',
      nombre :'Lucas Robertone',
      asistencias:'7',
      seleccionado: false,
      color: 'dark'
    }
  ]
  constructor() {}

}
