import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_URL } from '../constantes';
import { Manifiesto, BlJson, PageBl, PageBlNative } from './interfaces-bl';

@Injectable({
  providedIn: 'root'
})
export class BlService {
  constructor(private http: HttpClient) { }


  buscarManifiesto(nro:string,nroInterno:string): Observable<Manifiesto> {
    let url = `${REST_URL}manifiesto?`;
    if (nro != '') {
        url += `nro=${nro}&`;
    }
    if (nroInterno != '') {
        url += `nroInterno=${nroInterno}&`;
    }
   
    return this.http.get<Manifiesto>(url);
  }
  listManifiestos(): Observable<Manifiesto[]> {
    let url = `${REST_URL}manifiestos`;
    return this.http.get<Manifiesto[]>(url);
  }
  guardaBl(bl:BlJson) : Observable<BlJson> {
    return this.http.post<BlJson>(`${ REST_URL }bl`, bl);
  }
  buscarBlManifiestoPage(manifiesto:string,page:number,row:number): Observable<PageBl>{
    let url = `${REST_URL}bls/page?`;
   
        url += `manifiesto=${manifiesto}&`;
        url += `page=${page}&`;
        url += `rows=${row}&`;
   
    return this.http.get<PageBl>(url);
  }
  
  buscarBlNativeManifiestoPage(manifiesto:string,page:number,row:number): Observable<PageBlNative>{
    let url = `${REST_URL}bls/page_native?`;
   
        url += `manifiesto=${manifiesto}&`;
        url += `page=${page}&`;
        url += `rows=${row}&`;
   
    return this.http.get<PageBlNative>(url);
  }
}
