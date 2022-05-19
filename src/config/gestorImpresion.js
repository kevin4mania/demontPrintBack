module.exports = {
    // CarpetaModelos: "E:\\Programacion\\Node\\Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    // CarpetaModelos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    CarpetaModelos: "D:/KEVIN/recursosAPP/demontPrint/Modelos/Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    // RutaCarpetaArchivos: "E:\\Programacion\\RecursosAPP", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // RutaCarpetaArchivos: "/opt/lampp/htdocs", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    RutaCarpetaArchivos: "D:/PROYECTOS/NODE/DEMOND PRINT", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // E:\Programacion\RecursosAPP
    // RutaCarpetaArchivos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/TMP", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // RutaCarpetaRespaldosArchivosLeidos: "E:\\Programacion\\Node\\Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    // RutaCarpetaRespaldosArchivosLeidos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    RutaCarpetaRespaldosArchivosLeidos: "D:/KEVIN/recursosAPP/demontPrint/Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    // RutaCarpetaArchivosLeidosPDF: "E:\\Programacion\\Node\\RespaldosPDF", //Ruta donde se guardaran los pdf completados
    // RutaCarpetaArchivosLeidosPDF: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/RespaldosPDF", //Ruta donde se guardaran los pdf completados
    RutaCarpetaArchivosLeidosPDF: "D:/KEVIN/recursosAPP/demontPrint/RespaldosPDF", //Ruta donde se guardaran los pdf completados
    // configFTP: {
    //     host: "192.168.1.192",
    //     port: "21",
    //     user: "ftpuser",
    //     password: "ftpuser",
    // },
    Documentos: [{
            extension: "REC",
            carpeta: "FACTURAS-RECIBOS",
            modelo: "rec.html",
            orientacion: ''
        },
        {
            extension: "FAC",
            carpeta: "FACTURAS-RECIBOS",
            modelo: "fac.html",
            orientacion: ''
        },
        {
            extension: "CE",
            carpeta: "CE",
            modelo: "ce.html",
            orientacion: ''
        },
        {
            extension: "HO",
            carpeta: "HO",
            modelo: "ho.html",
            orientacion: ''
        },
        {
            extension: "HB",
            carpeta: "HOJA-BLANCA",
            modelo: "HB-Z-2.html",
            orientacion: ''
        },
        {
            extension: "CA",
            carpeta: "CERTIFICADOS-ADHESIVOS",
            modelo: "ca.html",
            orientacion: 'h'
        },
        {
            extension: "PO",
            carpeta: "PO",
            modelo: "po.html",
            orientacion: ''
        },
        {
            extension: "NE",
            carpeta: "NE",
            modelo: "ne.html",
            orientacion: ''
        },
        {
            extension: "MI",
            carpeta: "MICA",
            modelo: "mi.html",
            orientacion: ''
        },
        {
            extension: "M1",
            carpeta: "MIC1",
            modelo: "m1.html",
            orientacion: ''
        },
        {
            extension: "M2",
            carpeta: "MIC2",
            modelo: "m2.html",
            orientacion: ''
        },
        {
            extension: "LS",
            carpeta: "LS",
            modelo: "ls-2.html",
            orientacion: 'H'
        },
        {
            extension: "PB",
            carpeta: "PB",
            modelo: "pb.html",
            orientacion: ''
        },

    ],
};