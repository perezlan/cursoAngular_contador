import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css']
})
export class ButtonDisComponent {
  @Input()
    contador_dis:number=0;
  
  @Output()
    onDis:EventEmitter<number>=new EventEmitter()
  
  quitar(){
    this.contador_dis--
    this.onDis.emit(this.contador_dis)
  }
}
