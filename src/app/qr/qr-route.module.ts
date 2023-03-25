import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VcardComponent } from './vcard/vcard.component';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'vcard', component: VcardComponent }

  ])],
  exports: [RouterModule]
})
export class QrRouteModule { }
