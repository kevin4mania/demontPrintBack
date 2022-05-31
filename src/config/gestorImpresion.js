module.exports = {
    // IP IMPRESORA: http://172.20.68.206/
    CarpetaModelos: "C:\\Users\\Administrador.WIN-BC8RG4QUL1B\\Documents\\GESTOR DE IMPRESION\\modelos\\ModelosActualizados_29-5-22", //Ruta donde estan los modelos HTML que se usaran para dar formato
    // CarpetaModelos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    // CarpetaModelos: "D:/KEVIN/recursosAPP/demontPrint/Modelos/Modelos", //Ruta donde estan los modelos HTML que se usaran para dar formato
    RutaCarpetaArchivos: "C:\\Users\\Administrador.WIN-BC8RG4QUL1B\\Documents\\GESTOR DE IMPRESION\\archivosFTP", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // RutaCarpetaArchivos: "/opt/lampp/htdocs", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // RutaCarpetaArchivos: "D:/PROYECTOS/NODE/DEMOND PRINT", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    // E:\Programacion\RecursosAPP
    // RutaCarpetaArchivos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/TMP", //Ruta donde estan las carpetas con los archivos que llegan del as400 mediante ftp
    RutaCarpetaRespaldosArchivosLeidos: "C:\\Users\\Administrador.WIN-BC8RG4QUL1B\\Documents\\GESTOR DE IMPRESION\\Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    // RutaCarpetaRespaldosArchivosLeidos: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    // RutaCarpetaRespaldosArchivosLeidos: "D:/KEVIN/recursosAPP/demontPrint/Respaldos", //Ruta donde se crearan las carpetas con los archivos as400 ya procesados
    RutaCarpetaArchivosLeidosPDF: "C:\\Users\\Administrador.WIN-BC8RG4QUL1B\\Documents\\GESTOR DE IMPRESION\\RespaldosPDF", //Ruta donde se guardaran los pdf completados
    // RutaCarpetaArchivosLeidosPDF: "/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/RespaldosPDF", //Ruta donde se guardaran los pdf completados
    // RutaCarpetaArchivosLeidosPDF: "D:/KEVIN/recursosAPP/demontPrint/RespaldosPDF", //Ruta donde se guardaran los pdf completados
    configuracionGestor: {
        //**?configguracion para la lectura de los archivos que se generan del as400 */
        //**!esta con 'latin1' ya que los archivos que esta generando el as400 esta en formato ANSI si el formato cambia poner "utf8" */
        formatoLectura: 'latin1'
    },
    //**?paperSize:A2, A3, A4, A5, A6, letter, legal, tabloid, statement.    
    //**?bandeja: Bandeja 1, Alimentador multiuso
    Documentos: [{
        extension: "REC",
        carpeta: "FACTURAS-RECIBOS",
        modelo: "REC-Z22.html",
        nombreImpresora: '',
        orientacion: '',
        bandeja: 'Alimentador multiuso',
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
        paperSize: 'A2',
        numCopias: '',
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
        nombreImpresora: '',
        orientacion: '',
        bandeja: 'Alimentador multiuso',
        paperSize: '',
        numCopias: 1,
        monochrome: false
    },
    {
        extension: "CA",
        carpeta: "CERTIFICADOS-ADHESIVOS",
        modelo: "CA-Z22.html",
        nombreImpresora: '',
        orientacion: '',
        bandeja: '',
        paperSize: '',
        numCopias: 1,
        monochrome: false
    },
    {
        extension: "PO",
        carpeta: "PO",
        modelo: "PO-Z2.html",
        nombreImpresora: '',
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
        nombreImpresora: '',
        orientacion: '',
        bandeja: '',
        paperSize: 'letter',
        numCopias: 1,
        monochrome: false
    },
    {
        extension: "LS",
        carpeta: "LS",
        modelo: "LS-Z2.html",
        nombreImpresora: '',
        orientacion: 'H',
        bandeja: '',
        paperSize: '',
        numCopias: 1,
        monochrome: false
    },
    {
        extension: "PB",
        carpeta: "PB",
        modelo: "PB-Z.html",
        nombreImpresora: '',
        orientacion: '',
        bandeja: '',
        paperSize: '',
        numCopias: 1,
        monochrome: false
    },
        //**!Formatos 'MI','M1','M2' no se utilizarn quedan para revisar la implementacion */
        // {
        //     extension: "MI",
        //     carpeta: "MICA",
        //     modelo: "mi.html",
        //     nombreImpresora: '',
        //     orientacion: '',
        //     bandeja: '',
        //     paperSize: '',
        //     numCopias: 1,
        //     monochrome: false
        // },
        // {
        //     extension: "M1",
        //     carpeta: "MIC1",
        //     modelo: "m1.html",
        //     nombreImpresora: '',
        //     orientacion: '',
        //     bandeja: '',
        //     paperSize: '',
        //     numCopias: 1,
        //     monochrome: false
        // },
        // {
        //     extension: "M2",
        //     carpeta: "MIC2",
        //     modelo: "m2.html",
        //     nombreImpresora: '',
        //     orientacion: '',
        //     bandeja: '',
        //     paperSize: '',
        //     numCopias: 1,
        //     monochrome: false
        // },

    ],
};