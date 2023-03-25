import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./apunte/apunte.module').then(m => m.ApunteModule) },
                    { path: 'apunte', loadChildren: () => import('./apunte/apunte.module').then(m => m.ApunteModule) },
                    { path: 'qr', loadChildren: () => import('./qr/qr.module').then(m => m.QrModule) },
                    { path: 'bl', loadChildren: () => import('./bl/bl.module').then(m => m.BlModule) },
                  
                ]
            },
      
            { path: '**', redirectTo: '' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
