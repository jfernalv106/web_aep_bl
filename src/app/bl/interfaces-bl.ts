export interface BlXML {
    Documento?: Documento;
}

export interface Documento {
    
    "numero-referencia"?: string;
    "unidad-peso"?:       string;
    service?:             string;
    "total-peso"?:        number;
    "tipo-accion"?:       string;
    "cond-transporte"?:   string;
    "total-bultos"?:      number;
    "total-volumen"?:     number;
    "total-item"?:        number;
    "unidad-volumen"?:    string;
    "tipo-servicio"?:     string;
    Fechas?:              Fecha[];
    Observaciones?:       Observacione[];
    Locaciones?:          Locacione[];
    Participaciones?:     Participacione[];
    OpTransporte?:        OpTransporte[];
    Referencias?:         Referencia[];
    Items?:               Item[];
    Flete?:               Flete[];
    
}

export interface Empty {
    tipo?:    string;
    version?: string;
}

export interface Fecha {
    fecha?: FechaElement[];
}

export interface FechaElement {
    valor?:  string;
    nombre?: string;
}

export interface Flete {
    "forma-pago-flete"?: FormaPagoFlete[];
}

export interface FormaPagoFlete {
    descripcion?: string;
    tipo?:        string;
}

export interface Item {
    item?: ItemElement[];
}

export interface ItemElement {
    marcas?:            string;
    "tipo-bulto"?:      string;
    descripcion?:       string;
    "carga-peligrosa"?: string;
    "numero-item"?:     string;
    "unidad-peso"?:     string;
    cantidad?:          string;
    "unidad-volumen"?:  string;
    "carga-cnt"?:       string;
    "peso-bruto"?:      string;
    volumen?:           string;
    Contenedores?:      Contenedore[];
    observaciones?:       string
}

export interface Contenedore {
    contenedor?: Contenedor[];
}

export interface Contenedor {
    digito?:            string;
    status?:            string;
    numero?:            string;
    sigla?:             string;
    peso?:              string;
    "tipo-cnt"?:        string;
    "nombre-operador"?: string;
    Sellos?:            Sello[];
   "valor-id-op"?:        string;
}

export interface Sello {
    sello?: SelloElement[];
}

export interface SelloElement {
    codigo?: string;
    emisor?: string;
    numero?: string;
}

export interface Locacione {
    locacion?: Locacion[];
}

export interface Locacion {
    descripcion?: string;
    nombre?:      string;
    codigo?:      string;
}

export interface Observacione {
    observacion?: Observacion[];
}

export interface Observacion {
    nombre?:    string;
    contenido?: string;
}

export interface OpTransporte {
    optransporte?: Optransporte[];
}

export interface Optransporte {
    "nombre-nave"?:       string;
    "sentido-operacion"?: string;
}

export interface Participacione {
    participacion?: Participacion[];
}

export interface Participacion {
    "nacion-id"?:      string;
    "valor-id"?:       string;
    "codigo-pais"?:    string;
    nombres?:          string;
    nombre?:           string;
    "tipo-id"?:        string;
    "codigo-almacen"?: string;
    telefono?:         string;
    direccion?:        string;
    comuna?:           string;
}

export interface Referencia {
    referencia?: ReferenciaElement[];
}

export interface ReferenciaElement {
    numero?:            string;
    fecha?:             string;
    "tipo-referencia"?: string;
    "valor-id-emisor"?: string;
    "nac-id-emisor"?:   string;
    "tipo-id-emisor"?:  string;
    emisor?:            string;
    "tipo-documento"?:  string;
}











export interface BlJson {
    id?:              number;
    nroBl?:           string;
    nroBlOriginal?:   string;
    manifiesto?:      Manifiesto;
    tipoAccion?:      string;
    servicio?:        string;
    tipoServicio?:    string;
    condTransporte?:  string;
    totalBultos?:     number;
    totalPeso?:       number;
    unidadPeso?:      string;
    totalItem?:       number;
    usuarioCr?:       string;
    estado?:          string;
    fechaCr?:         Date;
    fechaUp?:         Date;
    blReferencias?:   BlReferencia[];
    blFechas?:        BlFecha[];
    blParticipantes?: BlParticipante[];
    blTransbordos?:   BlTransbordo[];
    blObservacions?:  BlObservacion[];
    blLocacions?:     BlLocacion[];
    blFletes?:        BlFlete[];
    blItems?:         BlItem[];
    blTransportes?:   BlTransporte[];
    versiones?:       any[];
}

export interface BlFecha {
    nombre?: string;
    valor?:  Date;
}

export interface BlFlete {
    tipo?:        string;
    descripcion?: string;
}

export interface BlItem {
    nroItem?:           number;
    marcas?:            string;
    cargaPeligrosa?:    string;
    tipoBulto?:         TipoBulto;
    descripcion?:       string;
    cantidad?:          number;
    pesoBruto?:         number;
    unidadPeso?:        string;
    volumen?:           number;
    unidadVolumen?:     string;
    observaciones?:     string;
    blItemContenedors?: BlItemContenedor[];
}

export interface BlItemContenedor {
    sigla?:                  string;
    numero?:                 string;
    digito?:                 string;
    tipoCnt?:                string;
    peso?:                   number;
    valorIdOp?:              string;
    nombreOperador?:         string;
    estado?:                 string;
    blItemContenedorSellos?: BlItemContenedorSello[];
}

export interface BlItemContenedorSello {
    numero?: string;
    codigo?: string;
    emisor?: string;
}

export interface TipoBulto {
    cod?:       string;
    tipoBulto?: string;
    bulto?:     string;
}

export interface BlLocacion {
    nombre?:      string;
    codigo?:      string;
    descripcion?: string;
}

export interface BlObservacion {
    nombre?:    string;
    contenido?: string;
}

export interface BlParticipante {
    tipoParticipante?: string;
    tipoId?:           string;
    nacionId?:         string;
    valorId?:          string;
    nombres?:          string;
    codigoAlmacen?:    string;
    direccion?:        string;
    comuna?:           string;
    telefono?:         string;
}

export interface BlReferencia {
    tipoReferencia?: string;
    tipoDocumento?:  string;
    numero?:         string;
    fecha?:          Date;
    tipoIdEmisor?:   string;
    nacIdEmisor?:    string;
    valorIdEmisor?:  string;
    emisor?:         string;
}

export interface BlTransbordo {
    codigoLugar?:      string;
    descripcionLugar?: string;
}

export interface BlTransporte {
    sentidoOperacion?: string;
    nombreNave?:       string;
}

export interface Manifiesto {
    nroMftoInterno?:        string;
    nroMftoInternoEmpresa?: string;
    nroMfto?:               number;
    nave?:                  string;
    viaje?:                 string;
    servicio?:              string;
    agencia?:               string;
    fechaMfto?:             Date;
    estado?:                string;
    inscripcionDesde?:      Date;
    inscripcionHasta?:      Date;
    trasladoPuerto?:        Date;
    almacen?:               string;
    usuarioCr?:             string;
    fechaCr?:               Date;
    usuarioUp?:             string;
    fechaUp?:               Date;
    fechaUltLec?:           Date;
    tipoCarga?:             string;
    motivoAnulacion?:       string;
    fechaTraspaso?:         Date;
    faltas?:                boolean;
    faltaSin?:              boolean;
    naveManifiesto?:        string;
}




export interface PageBl {
    content?:          BlJson[];
    pageable?:         Pageable;
    last?:             boolean;
    totalElements?:    number;
    totalPages?:       number;
    size?:             number;
    number?:           number;
    sort?:             Sort;
    first?:            boolean;
    numberOfElements?: number;
    empty?:            boolean;
}


export interface Pageable {
    sort?:       Sort;
    offset?:     number;
    pageNumber?: number;
    pageSize?:   number;
    paged?:      boolean;
    unpaged?:    boolean;
}

export interface Sort {
    empty?:    boolean;
    sorted?:   boolean;
    unsorted?: boolean;
}
export interface PageBlNative {
    content?:          BlNative[];
    pageable?:         Pageable;
    last?:             boolean;
    totalElements?:    number;
    totalPages?:       number;
    size?:             number;
    number?:           number;
    sort?:             Sort;
    first?:            boolean;
    numberOfElements?: number;
    empty?:            boolean;
}

export interface BlNative {
    id?:         number;
    manifiesto?: number;
    estado?:     string;
    nave?:       string;
    bultos?:     number;
    bl?:         string;
}