module.exports = {
    // IP IMPRESORA: http://172.20.68.206/
    CarpetaModelos: "K:\\TEST\\demonPrintBack\\Modelos-nuevos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    // CarpetaModelos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    // CarpetaModelos: "D:/KEVIN/recursosAPP/demontPrint/Modelos/Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    RutaCarpetaArchivos: "K:\\TEST\\demonPrintBack\\Archivos", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // RutaCarpetaArchivos: "/opt/lampp/htdocs", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // RutaCarpetaArchivos: "D:/PROYECTOS/NODE/DEMOND PRINT", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // E:\Programacion\RecursosAPP
    // RutaCarpetaArchivos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/TMP", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    RutaCarpetaRespaldosArchivosLeidos: "K:\\TEST\\demonPrintBack\\Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    // RutaCarpetaRespaldosArchivosLeidos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    // RutaCarpetaRespaldosArchivosLeidos: "D:/KEVIN/recursosAPP/demontPrint/Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    RutaCarpetaArchivosLeidosPDF: "K:\\TEST\\demonPrintBack\\RespaldosPDF", //Ruta donde se guardaran los pdf completados
    // RutaCarpetaArchivosLeidosPDF: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/RespaldosPDF", //Ruta donde se guardaran los pdf completados
    // RutaCarpetaArchivosLeidosPDF: "D:/KEVIN/recursosAPP/demontPrint/RespaldosPDF", //Ruta donde se guardaran los pdf completados
    // configFTP: {
    //     host: "192.168.1.192",
    //     port: "21",
    //     user: "ftpuser",
    //     password: "ftpuser",
    // },
    //A2, A3, A4, A5, A6, letter, legal, tabloid, statement.    
    // Bandeja 1
    // Alimentador multiuso
    Documentos: [{
            extension: "REC",
            carpeta: "FACTURAS-RECIBOS",
            modelo: "REC-Z.html",
            nombreImpresora:'',
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "FAC",
            carpeta: "FACTURAS-RECIBOS",
            modelo: "FAC-Z.html",
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "CE",
            carpeta: "CE",
            modelo: "CE-Z.html",
            orientacion: 'H',
            bandeja: 'Alimentador multiuso',
            paperSize: '',
            numCopias: 2,
            monochrome: false
        },
        {
            extension: "HO",
            carpeta: "HO",
            modelo: "HO-Z.html",
            orientacion: 'H',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "HB",
            carpeta: "HOJA-BLANCA",
            modelo: "HB-Z-2.html",
            nombreImpresora:'',
            orientacion: '',
            bandeja: 'Alimentador multiuso',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "CA",
            carpeta: "CERTIFICADOS-ADHESIVOS",
            modelo: "CA-Z2.html",
            nombreImpresora:'',
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "PO",
            carpeta: "PO",
            modelo: "PO-Z.html",
            nombreImpresora:'',
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "NE",
            carpeta: "NE",
            modelo: "NE-Z.html",
            nombreImpresora:'ZZZ',
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "MI",
            carpeta: "MICA",
            modelo: "mi.html",
            nombreImpresora:'',
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "M1",
            carpeta: "MIC1",
            modelo: "m1.html",
            nombreImpresora:'',
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "M2",
            carpeta: "MIC2",
            modelo: "m2.html",
            nombreImpresora:'',
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "LS",
            carpeta: "LS",
            modelo: "LS-Z2.html",
            nombreImpresora:'',
            orientacion: 'H',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },
        {
            extension: "PB",
            carpeta: "PB",
            modelo: "pb.html",
            nombreImpresora:'',
            orientacion: '',
            bandeja: '',
            paperSize: '',
            numCopias: 1,
            monochrome: false
        },

    ],
};