import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaApunteComponent } from './busca-apunte/busca-apunte.component';
import { ResultadosApunteComponent } from './resultados-apunte/resultados-apunte.component';
import { InputApunteComponent } from './input-apunte/input-apunte.component';
import { FormsModule } from '@angular/forms';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { ApunteRouteModule } from './apunte-route.module';



@NgModule({
  declarations: [
    BuscaApunteComponent,
    ResultadosApunteComponent,
    InputApunteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgPrimeModule,
    ApunteRouteModule
  ],exports:[
    BuscaApunteComponent,
    ResultadosApunteComponent,
    InputApunteComponent
  ]
})
export class ApunteModule { }
