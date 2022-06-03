import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'andres';
  nombreUpper: string = 'ANDRES';
  nombreCompleto: string = 'AnDrEs chaMorro';

  fecha: Date = new Date(); //el dia de hoy
}
