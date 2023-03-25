import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlXmlComponent } from './bl-xml/bl-xml.component';
import { BlsManifiestoComponent } from './bls-manifiesto/bls-manifiesto.component';
import { BlInputComponent } from './bl-input/bl-input.component';


@NgModule({
  imports: [RouterModule.forChild([
      { path: 'xml', component: BlXmlComponent },
      { path: 'bls', component: BlsManifiestoComponent },
      { path: 'bl-input', component: BlInputComponent }

  ])],
  exports: [RouterModule]
})
export class BlRouteModule { }
