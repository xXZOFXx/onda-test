import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Form } from '../models/Form';



@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  API_URI = 'http://ec2-18-191-181-3.us-east-2.compute.amazonaws.com:3000/api';


  constructor( private http: HttpClient) { }

 getForms() {

  return this.http.get(`${this.API_URI}/forms`);

  }

  getForm(id:string){

    return this.http.get(`${this.API_URI}/forms/${id}`);


  }

  deleForm( id:string){

    return this.http.delete(`${this.API_URI}/forms/${id}`);

  }

  salvarForm(form: Form){

    return this.http.post(`${this.API_URI}/forms`, form);

  }


  updateForm( id: string, updateForm: Form ) {

    return this.http.put(`${this.API_URI}/forms/${id}`, updateForm);


  }



}
