module.exports = {
    CarpetaModelos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    RutaCarpetaArchivos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Archivos", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    RutaCarpetaRespaldosArchivosLeidos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    RutaCarpetaArchivosLeidosPDF: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/RespaldosPDF", //Ruta donde se guardaran los pdf completados
    Documentos: [{
            extension: "FA1",
            carpeta: "REC",
            modelo: "fa1.html",
        },
        {
            extension: "PO",
            carpeta: "PO",
            modelo: "po.html",
        },
        {
            extension: "LS",
            carpeta: "LS",
            modelo: "ls.html",
        },
        {
            extension: "HB",
            carpeta: "HB",
            modelo: "hb.html",
        },
        {
            extension: "CA",
            carpeta: "CA",
            modelo: "ca.html",
        },
        {
            extension: "MI",
            carpeta: "MI",
            modelo: "mi.html",
        },
        {
            extension: "HO",
            carpeta: "HO",
            modelo: "mi.html",
        },
    ],
};