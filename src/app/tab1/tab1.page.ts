import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
interface Jugador {
  imagen: string;
  nombre: string;
  goles: string;
  seleccionado: boolean;
  mensaje : string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  JUGADORES:Jugador[] =  [
    {
      imagen : 'assets/lewan.jpg',
      nombre:'Lewandowski',
      goles:'23',
      seleccionado: false,
      mensaje :'¡Es el maximo goleador!',
    },
    {
      imagen : 'assets/benzema.jpg',
      nombre :'Benzema',
      goles:'19',
      seleccionado: false,
      mensaje :'¡Se retiro a Arabia!',
    },{
      imagen : 'assets/joselu.jpg',
      nombre:'Joselu',
      goles:'16',
      seleccionado: false,
      mensaje :'¡Ahora esta en el Madrid!',
    },
    {
      imagen : 'assets/borja.png',
      nombre:'Borja Iglesias',
      goles:'15',
      seleccionado: false,
      mensaje :'¡Es el maximo goleador del Betis!',
    },
    {
      imagen : 'assets/griezman.png',
      nombre :'Griezmann',
      goles:'15',
      seleccionado: false,
      mensaje :'¡Es el maximo goleador del Atletico de Madrid!',
    }
  ]
  constructor(public toastController: ToastController) {}
  async mostrarMensajeToast(jugador: Jugador) {
    if (jugador.seleccionado) {
      const toast = await this.toastController.create({
        message: jugador.mensaje,
        duration: 2000,
      });
      toast.present();
    }
  }
  
}
