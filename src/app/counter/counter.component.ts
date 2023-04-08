import { Component } from '@angular/core';

@Component({
    selector: "app-contador",
    templateUrl:"./counter.component.html",
    styleUrls:["./counter.component.css"],
})
export class CounterComponent{
    title="Contador";
  nombre: string = 'Mario';
  contador_counter: number=0;

  handleCount(value:number){
    this.contador_counter=value;
  }
  

  
}