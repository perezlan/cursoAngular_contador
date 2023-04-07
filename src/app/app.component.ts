import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  nombre: string = 'Mario';
  contador: number=0;

  add(){
    this.contador++
  }

  quitar(){
    this.contador--
  }
}
