export interface Apuntes {
    apuntes: Apunte[];
}

export interface Apunte {
    _id?:         string;
    categoria?:  string;
    aplicacion?:  string;
    descripcion?: string;
    comando?:     string;
    fecha?:       Date;
   
}
export interface Categorias {
    categorias: Categoria[];
}

export interface Categoria {
    _id?:        string;
    categoria?: string;
    aplicacion?: string[];
    fecha?:      Date;
}
export interface Respuesta {
    ok:      boolean;
    token:   string;
    mensaje: string;
}
export interface MonitorIntf{
    id:string;
    monitor:string;
}
export interface MonitorResp {
    ok:        boolean;
    monitores: MonitorIntf[];
}
export interface RespuestaMonitor {
    ok:      boolean;
    id:   string;
    monitor: string;
}

export interface CapturasInput{
    categoria:string;
    descripcion:string;
    aplicacion:string;
    imagenes:ImageneB64[];
}
export interface ImageneB64{
    imagenB64:string;
    nombre:string;
}
export interface Capturas {
    capturas?: Captura[];
}

export interface Captura {
    _id?:         string;
    categoria?:   string;
    descripcion?: string;
    aplicacion?:  string;
    url?:         string[];
    __v?:         number;
}
export interface PresentacionVcard{
    nombre:string;
    apellido:string;
    cargo:string;
    direccion:string;
    empresa:string;
    tel:string;
    cel:string;
    url:string;
    mail:string;
    mail2:string;
    qr:string;
}


