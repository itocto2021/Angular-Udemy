import { Component } from "@angular/core";

@Component({
    selector    : 'app-heroe',
    templateUrl : 'heroe.component.html'
})


export class HeroeComponent {

    nombre : string = 'Ilder Tocto';
    edad   : number = 23;

    get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre() : void {
        this.nombre = 'Itzayana Tocto';
    }

    cambiarEdad() : void {
         this.edad = 3;
    }

}