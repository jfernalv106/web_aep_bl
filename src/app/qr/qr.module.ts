import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VcardComponent } from './vcard/vcard.component';
import { FormsModule } from '@angular/forms';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { QRCodeModule } from 'angularx-qrcode';
import { QrRouteModule } from './qr-route.module';


@NgModule({
  declarations: [
    VcardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgPrimeModule,
    QRCodeModule,
    QrRouteModule
  ],
  exports:[
    VcardComponent
  ]
})
export class QrModule { }
