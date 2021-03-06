import { Component, OnInit, HostBinding } from '@angular/core';

import { Form } from '../models/Form';

import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @HostBinding('class') classes = 'formulario';

  form: Form  = {

    id_comentarios: 0,
    nombre:'',
    telefono:'',
    correo:'',
    comentarios:'',
    create_at: new Date()
    


  };


  constructor(private formularioService: FormularioService) { }




  ngOnInit() {
  }


  salvarNuevoForm(){
      delete this.form.create_at;
      delete this.form.id_comentarios;
      
    this.formularioService.salvarForm(this.form)
      .subscribe(
        res => {

          console.log(res);

        },

        err => console.error(err)

      )
  }


}
