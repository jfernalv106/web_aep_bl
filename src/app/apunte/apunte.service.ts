import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_URL_APUNTE } from '../constantes';
import { Apunte, Apuntes, Capturas, CapturasInput, Categoria, Categorias, MonitorResp, Respuesta, RespuestaMonitor } from './interface-apunte';

@Injectable({
  providedIn: 'root'
})
export class ApunteService {

  constructor(private http: HttpClient) { }

  buscarApuntes( categoria: string,aplicacion:string):Observable<Apuntes>{
    const url = `${ REST_URL_APUNTE }/api/apuntes/${ categoria }/${aplicacion}`;
    return this.http.get<Apuntes>( url);
  }
  categorias():Observable<Categorias>{
    const url = `${ REST_URL_APUNTE }/api/categorias`;
    return this.http.get<Categorias>( url);
  }
  agregarApuntes( apunte: Apunte ): Observable<Respuesta> {
    const { aplicacion,comando,descripcion,categoria } = apunte;
    const ssl={ aplicacion,comando,descripcion,categoria};
    console.log(ssl);
    return this.http.post<Respuesta>(`${ REST_URL_APUNTE }/api/apuntes`, ssl);
  }
  actualizarApuntes( apunte: Apunte ): Observable<Respuesta> {
    return this.http.put<Respuesta>(`${ REST_URL_APUNTE }/api/apuntes`, apunte );
  }
  borrarApuntes( id: string): Observable<Respuesta> {
    return this.http.delete<Respuesta>(`${ REST_URL_APUNTE }/api/apuntes/${ id }`);
  }
  agregarCategoria( cat: Categoria ): Observable<Respuesta> {
    const { aplicacion,categoria} = cat;
    const ssl={ aplicacion,categoria};
    console.log(ssl);
    return this.http.post<Respuesta>(`${ REST_URL_APUNTE }/api/apuntes`, ssl);
  }
  actualizarCategoria( categoria: Categoria ): Observable<Respuesta> {
    return this.http.put<Respuesta>(`${ REST_URL_APUNTE }/api/categorias`, categoria );
  }
  borrarCategoria( id: string): Observable<Respuesta> {
    return this.http.delete<Respuesta>(`${ REST_URL_APUNTE }/api/categorias/${ id }`);
  }

  monitores():Observable<MonitorResp>{
    const url = `${ REST_URL_APUNTE }/api/monitor`;
    return this.http.get<MonitorResp>( url);
  }
  enviaPrivado(id:string, monitor: string ): Observable<RespuestaMonitor> {
    const ssl={ monitor };
    return this.http.post<RespuestaMonitor>(`${ REST_URL_APUNTE }/api/monitor/${ id }`, ssl);
  }
 guardaImagenes(captura:CapturasInput) : Observable<Capturas> {
    const { aplicacion,categoria,descripcion,imagenes} = captura;
    const ssl={ aplicacion,categoria,descripcion,imagenes};
    console.log(ssl);
    return this.http.post<Capturas>(`${ REST_URL_APUNTE }/api/captura/`, ssl);
  }
  buscarCapturas( categoria: string,aplicacion:string):Observable<Capturas>{
    const url = `${ REST_URL_APUNTE }/api/captura/${ categoria }/${aplicacion}`;
    return this.http.get<Capturas>( url);
  }
}
