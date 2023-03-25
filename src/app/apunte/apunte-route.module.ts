import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputApunteComponent } from './input-apunte/input-apunte.component';
import { RouterModule } from '@angular/router';
import { BuscaApunteComponent } from './busca-apunte/busca-apunte.component';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'buscar', component: BuscaApunteComponent },
      { path: 'nuevo', component: InputApunteComponent }

  ])],
  exports: [RouterModule]
})
export class ApunteRouteModule { }
