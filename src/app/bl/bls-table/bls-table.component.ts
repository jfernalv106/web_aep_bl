import { Component, Input } from '@angular/core';
import { BlJson } from '../interfaces-bl';

@Component({
  selector: 'app-bls-table',
  templateUrl: './bls-table.component.html',
  styleUrls: ['./bls-table.component.scss']
})
export class BlsTableComponent {
  @Input()  bls:BlJson[]=[];
  @Input()  blsAux:BlJson[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log('');

  }
  referencia(b:BlJson){
    return b.blReferencias?.find((c)=>c.tipoDocumento=='BL')?.numero;
  }

}

