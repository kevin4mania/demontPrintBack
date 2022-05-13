module.exports = {
    CarpetaModelos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    RutaCarpetaArchivos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Archivos", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // RutaCarpetaArchivos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/TMP", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    RutaCarpetaRespaldosArchivosLeidos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    RutaCarpetaArchivosLeidosPDF: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/RespaldosPDF", //Ruta donde se guardaran los pdf completados
    configFTP: {
        host: "192.168.1.192",
        port: "21",
        user: "ftpuser",
        password: "ftpuser",
    },
    Documentos: [{
            extension: "REC",
            carpeta: "FACTURAS-RECIBOS",
            modelo: "rec.html",
        },
        {
            extension: "FAC",
            carpeta: "FACTURAS-RECIBOS",
            modelo: "fac.html",
        },
        {
            extension: "CE",
            carpeta: "CE",
            modelo: "ce.html",
        },
        {
            extension: "HO",
            carpeta: "HO",
            modelo: "ho.html",
        },
        {
            extension: "HB",
            carpeta: "HOJA-BLANCA",
            modelo: "hb.html",
        },
        {
            extension: "CA",
            carpeta: "CERTIFICADOS-ADHESIVOS",
            modelo: "ca.html",
        },
        {
            extension: "PO",
            carpeta: "PO",
            modelo: "po.html",
        },
        {
            extension: "NE",
            carpeta: "NE",
            modelo: "ne.html",
        },
        {
            extension: "MI",
            carpeta: "MICA",
            modelo: "mi.html",
        },
        {
            extension: "M1",
            carpeta: "MIC1",
            modelo: "m1.html",
        },
        {
            extension: "M2",
            carpeta: "MIC2",
            modelo: "m2.html",
        },
        {
            extension: "LS",
            carpeta: "LS",
            modelo: "ls.html",
        },
        {
            extension: "PB",
            carpeta: "PB",
            modelo: "pb.html",
        },

    ],
};