import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  @Input()
    contador_add:number=0

  @Output() 
    onAdd:EventEmitter<number>=new EventEmitter()

  add(){
    this.contador_add++;
    this.onAdd.emit(
        this.contador_add
      )
  }
}
