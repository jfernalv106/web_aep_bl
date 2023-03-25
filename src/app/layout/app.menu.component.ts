import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'BL',
                items: [
                    { label: 'Carga BL', icon: 'pi pi-fw pi-id-card', routerLink: ['/bl/xml'] },
                    { label: 'BLs Manifiesto', icon: 'pi pi-fw pi-id-card', routerLink: ['/bl/bls'] },
                    { label: 'Nuevo', icon: 'pi pi-fw pi-id-card', routerLink: ['/bl/bl-input'] },
       
                ]
            },
            {
                label: 'Apuntes',
                items: [
                    { label: 'Buscar', icon: 'pi pi-fw pi-id-card', routerLink: ['/apunte/buscar'] },
                    { label: 'Nuevo', icon: 'pi pi-fw pi-id-card', routerLink: ['/apunte/nuevo'] },
       
                ]
            },
            {
                label: 'QR',
                items: [
                    { label: 'VCARD', icon: 'pi pi-fw pi-id-card', routerLink: ['/qr/vcard'] },
                  
                ]
            },
         
            
        ];
    }
}
