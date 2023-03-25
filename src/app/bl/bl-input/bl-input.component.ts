import { Component } from '@angular/core';
import { BlJson, BlReferencia, BlFecha } from '../interfaces-bl';
import { BlService } from '../bl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bl-input',
  templateUrl: './bl-input.component.html',
  styleUrls: ['./bl-input.component.scss']
})
export class BlInputComponent {

  blJson:BlJson={}
  tiposDoc:string[]=['BL','MFTO'];
  tiposFecha:string[]=['FEM','FZARPE','FPRES','FEMB'];
  constructor(private blService:BlService){
    this.blJson={};
  }
  agregaReferencia(){
    if(!this.blJson.blReferencias){
      this.blJson.blReferencias=[];
    }
    this.blJson.blReferencias?.push({});
  }
  removerReferencia(referencia:BlReferencia){
    this.blJson.blReferencias=this.blJson.blReferencias?.filter((rf)=>rf!=referencia);
  }
  agregarFecha(){
    if(!this.blJson.blFechas){
      this.blJson.blFechas=[];
    }
    this.blJson.blFechas?.push({});
  }
  removerFecha(fecha:BlFecha){
    this.blJson.blFechas=this.blJson.blFechas?.filter((rf)=>rf!=fecha);
  }
  guardar(){
    Swal.fire(JSON.stringify(this.blJson))
  }
}
