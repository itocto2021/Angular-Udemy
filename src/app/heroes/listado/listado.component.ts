import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  hermanos : string[] = ['Ilder Tocto', 'Mercy Tocto', 'Gloria Tocto', 'Elver Tocto', 'Nayeli Tocto']
  hermanoBorrado : string = '';

  borrarHermano() {
    this.hermanoBorrado = this.hermanos.shift() || '';
    
  }

}
