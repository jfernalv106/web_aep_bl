import * as moment from 'moment';
import * as xml2js from 'xml2js';
import {
    BlJson,
    BlXML,
    BlFecha,
    BlReferencia,
    BlParticipante,
    BlFlete,
    BlItem,
    BlLocacion,
    BlObservacion,
    BlTransbordo,
    BlTransporte,
} from './interfaces-bl';
import {
    Manifiesto,
    BlItemContenedor,
    BlItemContenedorSello,
} from './interfaces-bl';

export const b64toBl = (base64: string) => {
    const json = atob(base64.replace('data:text/xml;base64,', ''));
    const p: xml2js.Parser = new xml2js.Parser();
    let bl: BlJson = {};

    p.parseString(json, (err, result) => {
        if (err) {
            throw err;
        }
        const j = JSON.stringify(result, null, 4);
        const blXml: BlXML = JSON.parse(j);
        let blFechas: BlFecha[] = [];
        let blReferencias: BlReferencia[] = [];
        let blParticipantes: BlParticipante[] = [];
        let blTransbordos: BlTransbordo[] = [];
        let blObservacions: BlObservacion[] = [];
        let blLocacions: BlLocacion[] = [];
        let blFletes: BlFlete[] = [];
        let blItems: BlItem[] = [];
        let blTransportes: BlTransporte[] = [];
        let manifiesto: Manifiesto = {};
        
        blXml.Documento?.Fechas?.map((f) => {
            f.fecha?.map((fc) => {
                blFechas.push({
                    nombre: `${fc.nombre??''}`,
                    valor:moment(fc.valor, "DD-MM-YYYY").toDate(),
                });
            });
        });
        blXml.Documento?.Referencias?.map((r) => {
            r.referencia?.map((ref) => {
                blReferencias.push({
                    emisor: `${ref.emisor??''}`,
                    fecha: moment(ref.fecha, "DD-MM-YYYY").toDate(),
                    nacIdEmisor: `${ref['nac-id-emisor']??''}`,
                    numero: `${ref.numero??''}`,
                    tipoDocumento: `${ref['tipo-documento']??''}`,
                    tipoIdEmisor: `${ref['tipo-id-emisor']??''}`,
                    tipoReferencia: `${ref['tipo-referencia']??''}`,
                    valorIdEmisor: `${ref['valor-id-emisor']??''}`,
                });
            });
        });
        manifiesto.nroMfto =
            parseInt(
                blReferencias.find((m) => m.tipoDocumento == 'MFTO')?.numero ??
                    '0'
            ) ?? 0;
        blXml.Documento?.Participaciones?.map((p) => {
            p.participacion?.map((pr) => {
                blParticipantes.push({
                    codigoAlmacen: `${pr['codigo-almacen']??''}`,
                    comuna: `${pr.comuna??''}`,
                    direccion: `${pr.direccion??''}`,
                    nacionId: `${pr['nacion-id']??''}`,
                    nombres: `${pr.nombres??''}`,
                    telefono: `${pr.telefono??''}`,
                    tipoId: `${pr['tipo-id']??''}`,
                    tipoParticipante: `${pr.nombre??''}`,
                    valorId: `${pr['valor-id']??''}`,
                });
            });
        });
        blXml.Documento?.Flete?.map((f) => {
            f['forma-pago-flete']?.map((fl) => {
                blFletes.push({ descripcion: `${fl.descripcion}`, tipo: `${fl.tipo}` });
            });
        });
        blXml.Documento?.Items?.map((i) => {
            i.item?.map((it) => {
                let blItemContenedor: BlItemContenedor[] = [];
                it.Contenedores?.map((c) => {
                    c.contenedor?.map((cn) => {
                        let blItemContenedorSello: BlItemContenedorSello[] = [];
                        cn.Sellos?.map((s) => {
                            s.sello?.map((sl) => {
                                blItemContenedorSello.push({
                                    codigo: `${sl.codigo??''}`,
                                    emisor: `${sl.emisor??''}`,
                                    numero: `${sl.numero??''}`,
                                });
                            });
                            blItemContenedor.push({
                                blItemContenedorSellos: blItemContenedorSello,
                                digito: `${cn.digito??''}`,
                                estado: `${cn.status??''}`,
                                nombreOperador: `${cn['nombre-operador']??''}`,
                                numero: `${cn.numero??''}`,
                                peso: parseFloat(cn.peso ?? '0.0'),
                                sigla: `${cn.sigla??''}`,
                                tipoCnt: `${cn['tipo-cnt']??''}`,
                                valorIdOp: `${cn['valor-id-op']??''}`,
                            });
                        });
                    });
                });
                blItems.push({
                    blItemContenedors: blItemContenedor,
                    cantidad: parseInt(it.cantidad ?? '0'),
                    cargaPeligrosa: `${it['carga-peligrosa']??''}`,
                    descripcion: `${it.descripcion??''}`,
                    marcas: `${it.marcas??''}`,
                    nroItem: parseInt(`${it['numero-item']}` ?? '0'),
                    observaciones: `${it.observaciones??''}`,
                    pesoBruto: parseFloat(`${it['peso-bruto']}` ?? '0.0'),
                    tipoBulto: { cod: `${it['tipo-bulto']??''}` },
                    unidadPeso: `${it['unidad-peso']??''}`,
                    unidadVolumen: `${it['unidad-volumen']??''}`,
                    volumen: parseFloat(it.volumen ?? '0.0'),
                });
            });
        });
        blXml.Documento?.Locaciones?.map((l) => {
            l.locacion?.map((lc) => {
                blLocacions.push({
                    codigo: `${lc.codigo??''}`,
                    descripcion: `${lc.descripcion??''}`,
                    nombre: `${lc.nombre??''}`,
                });
            });
        });

        blXml.Documento?.Observaciones?.map((o) => {
            o.observacion?.map((ob) => {
                blObservacions.push({
                    contenido: `${ob.contenido??''}`,
                    nombre: `${ob.nombre??''}`,
                });
            });
        });

        blXml.Documento?.OpTransporte?.map((t)=>{
            t.optransporte?.map((tr)=>{
                blTransportes.push({
                    nombreNave:`${tr['nombre-nave']??''}`,
                    sentidoOperacion:`${tr['sentido-operacion']??''}`
                });
            })
        });

        bl = {
            nroBl: `${blXml.Documento?.['numero-referencia']??''}`,
            nroBlOriginal: `${blXml.Documento?.['numero-referencia']??''}`,

            tipoAccion: `${blXml.Documento?.['tipo-accion']??''}`,
            servicio: `${blXml.Documento?.service??''}`,
            tipoServicio: `${blXml.Documento?.['tipo-servicio']??''}`,
            condTransporte: `${blXml.Documento?.['cond-transporte']??''}`,
            totalBultos: parseInt(`${blXml.Documento?.['total-bultos']}`),
            totalPeso: parseFloat(`${blXml.Documento?.['total-peso']}`),
            unidadPeso: `${blXml.Documento?.['unidad-peso']??''}`,
            totalItem: parseFloat(`${blXml.Documento?.['total-item']}`),
            usuarioCr: 'Angular',
            estado: 'ACTIVO',
            blFechas: blFechas,
            blReferencias: blReferencias,
            blFletes: blFletes,
            blItems: blItems,
            blLocacions: blLocacions,
            blObservacions: blObservacions,
            blParticipantes: blParticipantes,
            blTransbordos: blTransbordos,
            blTransportes: blTransportes,
            manifiesto: manifiesto,
        };
    });
    return bl;
};
