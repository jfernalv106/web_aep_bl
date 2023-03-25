import { Component } from '@angular/core';
import { PresentacionVcard } from '../interfaces_qr';

@Component({
  selector: 'app-vcard',
  templateUrl: './vcard.component.html',
  styleUrls: ['./vcard.component.scss']
})
export class VcardComponent {
  vcard: PresentacionVcard={};
  constructor() { }

  ngOnInit(): void {
    this.vcard = {
      nombre: '',
      apellido:'',
      cargo: '',
      direccion: '',
      tel: '',
      cel: '',
      url: '',
      mail: '',
      mail2: '',
      empresa: '',
      qr: '',
    };
  }
  generar() {
    this.vcard.qr =`BEGIN:VCARD
VERSION:3.0
N:${this.vcard.apellido};${this.vcard.nombre}
FN:${this.vcard.nombre} ${this.vcard.apellido}
ORG:${this.vcard.empresa}
TITLE:${this.vcard.cargo}
ADR;TYPE=WORK:${this.vcard.direccion}
URL:${this.vcard.url}
EMAIL;WORK;INTERNET:${this.vcard.mail}
EMAIL;HOME;INTERNET:${this.vcard.mail2}
TEL;type=CELL;type=pref:${this.vcard.cel}
TEL;type=WORK;type=pref:${this.vcard.tel}
END:VCARD`;
     console.log(this.vcard.qr);
  }

}
