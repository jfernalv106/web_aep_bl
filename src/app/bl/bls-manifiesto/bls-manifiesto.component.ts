import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { BlService } from '../bl.service';
import { Manifiesto, BlNative } from '../interfaces-bl';

@Component({
  selector: 'app-bls-manifiesto',
  templateUrl: './bls-manifiesto.component.html',
  styleUrls: ['./bls-manifiesto.component.scss']
})
export class BlsManifiestoComponent {
  manifiestos: Manifiesto[] = [];
    manifiesto: Manifiesto = {};
    row: number = 30;
    bls: BlNative[] = [];

    totalRecords: number = 0;

    loading: boolean = false;

    seleccion: boolean = false;

    constructor(private blService: BlService) {}

    ngOnInit(): void {
        this.blService.listManifiestos().subscribe((ct) => {
            this.manifiestos = ct;
            console.log(this.manifiestos);
            console.log(this.manifiestos.length);
        });
    }

    loadCustomers(event: LazyLoadEvent) {
        this.loading = true;
        this.blService
            .buscarBlNativeManifiestoPage(
                this.manifiesto.nroMftoInterno ?? '',
                (event.first??this.row)/this.row,
                this.row
            )
            .subscribe((ct) => {
                this.bls = ct.content ?? [];
                console.log(ct.content);
                this.totalRecords = ct.totalElements ?? 0;
                this.loading = false;
            });
    }

    onSelect() {
      this.loading = true;
        if (this.manifiesto.nave) {
            this.seleccion = true;
            this.blService
            .buscarBlNativeManifiestoPage(
                this.manifiesto.nroMftoInterno ?? '',
                0,
                this.row
            )
            .subscribe((ct) => {
                this.bls = ct.content ?? [];
                console.log(ct);
                this.totalRecords = ct.totalElements ?? 0;
                this.loading = false;
            });
        }

    }
}
