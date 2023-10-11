import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  
  constructor() {}
  abrirURL() {
    const url = 'https://www.realmadrid.com';
    window.open(url, '_blank'); 
  }
  abrirURL2() {
    const url = 'https://villarrealcf.es';
    window.open(url, '_blank'); 
  }
  abrirURL3() {
    const url = 'https://www.realsociedad.eus';
    window.open(url, '_blank'); 
  }
}
