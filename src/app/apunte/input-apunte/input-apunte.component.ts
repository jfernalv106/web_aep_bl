import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ApunteService } from '../apunte.service';
import { Categoria, Apunte } from '../interface-apunte';
@Component({
  selector: 'app-input-apunte',
  templateUrl: './input-apunte.component.html',
  styleUrls: ['./input-apunte.component.scss']
})
export class InputApunteComponent {
  dialog = false;
  categorias: Categoria[] = [];
  categ: Categoria = {};
  apunte: Apunte = {};


  constructor(private apuntesService: ApunteService) { }

  ngOnInit(): void {
    this.cargaCategorias();
  }
  cargaCategorias() {
    this.apuntesService.categorias().subscribe(
      (its) => {
        this.categorias = its.categorias;
        console.log(this.categorias);
      },
      (err) => {
        this.categorias = [];
      }
    );
  }

  guardar() {

    this.apunte.categoria = this.categ.categoria;
    const { aplicacion, categoria, comando, descripcion } = this.apunte;
    if (
      aplicacion == '' ||
      categoria == '' ||
      comando == '' ||
      descripcion == ''
    ) {
    
      Swal.fire(JSON.stringify('Debe completar todos lo campos'))
     
      return;
    }
    try {
      this.apuntesService.agregarApuntes(this.apunte).subscribe(
        (sl) => {
          
          Swal.fire(JSON.stringify('Guardado'))
          this.apunte={};
        },
        (err) => {
          console.log('error');
          console.log(err);
        }
      );
    } catch (error) {
      Swal.fire(JSON.stringify(error))
     
    }
  }
 
}
