import { Component, OnInit } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Mateo', 'Lucas'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  cambiarCliente() {

    if (this.genero === 'femenino') {
      this.nombre = 'Andrés';
      this.genero = 'masculino';
    }
    else {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }
  }

  borrarCliente() {
    const cliente = this.clientes.pop();
    if (cliente === undefined)
      this.clientes = ['Maria', 'Pedro', 'Juan', 'Mateo', 'Lucas'];
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Andrés',
    edad: 46,
    direccion: 'Madrid, España'
  };

    //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'SuperLopez',
      vuela: true
    }
  ]
   //ASync Pipe
    miObservable = interval(2000); //0,1,2,3,4,5,6,...

    valorPromesa = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa')
      },3500);
    });
}
