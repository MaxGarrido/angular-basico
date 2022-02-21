import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 35;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return this.nombre + '-' + this.edad;
    }

    cambiarNombre() : void {
        this.nombre = 'Batman';
    }

    cambiarEdad() : void {
        this.edad = 40;
    }
    
}