import { Component, Input } from '@angular/core';
import { Apunte } from '../interface-apunte';

@Component({
  selector: 'app-resultados-apunte',
  templateUrl: './resultados-apunte.component.html',
  styleUrls: ['./resultados-apunte.component.scss']
})
export class ResultadosApunteComponent {

  @Input() apuntes: Apunte[] = [];
  @Input() apuntesAux: Apunte[] = [];
  termino: string = '';
  constructor() { }

  ngOnInit(): void {
    this.termino = '';
  }
  teclaPresionada() {
   
    this.apuntes = this.apuntesAux;
    this.apuntes = this.apuntes.filter((apunte) =>
      apunte.descripcion?.toLowerCase().includes(this.termino.toLowerCase())
    );
    console.log(this.termino);
  }
}
