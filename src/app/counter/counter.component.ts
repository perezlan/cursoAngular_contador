import { Component } from '@angular/core';

@Component({
    selector: "app-contador",
    templateUrl:"./counter.component.html",
})
export class CounterComponent{
    title="Contador";
  nombre: string = 'Mario';
  contador: number=0;

  add(){
    this.contador++
  }

  quitar(){
    this.contador--
  }
}