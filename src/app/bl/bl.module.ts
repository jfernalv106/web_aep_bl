import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlInputComponent } from './bl-input/bl-input.component';
import { BlXmlComponent } from './bl-xml/bl-xml.component';
import { BlsTableComponent } from './bls-table/bls-table.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { FormsModule } from '@angular/forms';
import { BlRouteModule } from './bl-route.module';
import { BlsManifiestoComponent } from './bls-manifiesto/bls-manifiesto.component';



@NgModule({
  declarations: [
    BlInputComponent,
    BlXmlComponent,
    BlsTableComponent,
    BlsManifiestoComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    BlRouteModule,
    FormsModule
  ],exports:[
    BlInputComponent,
    BlXmlComponent,
    BlsTableComponent,
    BlsManifiestoComponent,
    
  ]
})
export class BlModule { }
