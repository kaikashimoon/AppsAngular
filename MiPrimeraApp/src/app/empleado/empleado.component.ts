import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = 'Kai'
  apellido = 'Leon'
  private edad = 22
  habilitacionCuadro=false
  usuRegistrado=false
  textoDeRegistro="No hay nadie registrado"
  // empresa = 'Chiguiritos'


  getEdad() {
    return this.edad
  }

  llamaEmpresa(value: String) {

  }

  getRegistroUsuario() {
    this.usuRegistrado=true
  }

  setUsuarioRegistrado(event: Event) {

    // alert('Usuario Registrado')

    // this.textoDeRegistro= 'El usuario se acaba de registrar'

    if((<HTMLInputElement>event.target).value=="si") {
      this.textoDeRegistro= 'El usuario se acaba de registrar'
    } else {
      this.textoDeRegistro="No hay nadie registrado"

    }

  }
  

  constructor() {}
  ngOnInit(): void {
    
  }

}
