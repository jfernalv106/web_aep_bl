import { Component } from '@angular/core';
import { ApunteService } from '../apunte.service';
import { Apunte, Categoria } from '../interface-apunte';

@Component({
  selector: 'app-busca-apunte',
  templateUrl: './busca-apunte.component.html',
  styleUrls: ['./busca-apunte.component.scss']
})
export class BuscaApunteComponent {
  apuntes: Apunte[] = [];
  categorias: Categoria[] = [];
  categ: Categoria = {};
  aplicacion: string = '';
  aplicaciones:string[]=[];
  dialog=false;

  constructor(private apuntesService: ApunteService) {}
    ngOnInit(): void {
        this.cargaCategorias();
    }

    buscarApuntes() {
      if (this.categ.categoria == '' || this.aplicacion == '') {
        return;
      }
      this.dialog=true;
      
      this.apuntesService.buscarApuntes(this.categ.categoria??'', this.aplicacion).subscribe(
        (apn) => {
          this.apuntes = [];
          apn.apuntes.forEach(element => {
            element.comando=element.comando?.replace('\n','');
            this.apuntes.push(element);
          });
         
        
        }, (err) => {
  
          this.apuntes = [];
        }
      );
      this.dialog=false;
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
}
