import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  constructor() { }
  ANIO ="2022/2023";
  CAMPEON ="FC.BARCELONA";
  nombre : String ="";
   Equipo = [
    {
      imagen : 'assets/logo_barça.png',
      nombre:'FC.BARCELONA',
      puntos:'88',
      colorLinea: 'azul'
    },
    {
      imagen : 'assets/logo_madrid.png',
      nombre :'REAL MADRID',
      puntos:'78',
      colorLinea: 'azul'
    },{
      imagen : 'assets/logo_atletico.jpg',
      nombre:'ATLETICO DE MADRID',
      puntos:'77',
      colorLinea: 'azul'

    },
    {
      imagen : 'assets/logo_real.png',
      nombre:'REAL SOCIEDAD',
      puntos:'71',
      colorLinea: 'azul'
    },
    {
      imagen : 'assets/logo_villareal.png',
      nombre :'VILLAREAL',
      puntos:'64'
    },{
      imagen : 'assets/betis.png',
      nombre:'BETIS',
      puntos:'60'
    },
    //--------------------------
    {
      imagen : 'assets/OSASUNA.png',
      nombre:'OSASUNA',
      puntos:'53',
      
    },
    {
      imagen : 'assets/bilbao.png',
      nombre :'ATHLETIC DE BILBAO',
      puntos:'51',
      
    },{
      imagen : 'assets/mallorca.png',
      nombre:'R.C.D. Mallorca',
      puntos:'50',
      

    },
    {
      imagen : 'assets/girona.png',
      nombre:'GIRONA',
      puntos:'49',
     
    },
    {
      imagen : 'assets/rayo.png',
      nombre :'RAYO VALLECANO',
      puntos:'49',
    },{
      imagen : 'assets/sevilla.png',
      nombre:'SEVILLA',
      puntos:'49',
    },
    
    //--------------------------
    {
      imagen : 'assets/celta.png',
      nombre:'CELTA DE VIGO',
      puntos:'43',
      
    },
    {
      imagen : 'assets/cadiz.png',
      nombre :'CADIZ',
      puntos:'42',
      
    },{
      imagen : 'assets/getafe.png',
      nombre:'GETAFE',
      puntos:'42',
      

    },
    {
      imagen : 'assets/valencia.png',
      nombre:'VALENCIA C.F',
      puntos:'42',
     
    },
    {
      imagen : 'assets/almeria.png',
      nombre :'ALMERIA',
      puntos:'41',
    },{
      imagen : 'assets/valladolid.png',
      nombre:'VALLADOLID',
      puntos:'40',
      colorLinea: 'rojo'
    },
    {
      imagen : 'assets/espanyol.png',
      nombre :'RCD ESPANYOL',
      puntos:'37',
      colorLinea: 'rojo'
    },{
      imagen : 'assets/elche.png',
      nombre:'ELCHE C.F',
      puntos:'25',
      colorLinea: 'rojo'
    }
  ]
  ngOnInit() {
  }

}
