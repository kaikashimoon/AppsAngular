import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  n1: number=0
  n2: number=0
  result: number=0


  sumar():void{
    this.result = this.n1 + this.n2

    console.log(this.result)
  }



  
}
