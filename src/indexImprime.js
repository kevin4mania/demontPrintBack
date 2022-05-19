const { print } = require("pdf-to-printer");
const fs = require("fs");
const config = require("./config/gestorImpresion");
const fes = require("fs-extra");

let imprimir = async(nameFile) => {
    printer.printFile({
        // filename: `${path}/${nameFile}`,
        filename: nameFile,
        printer: printer.getDefaultPrinterName(),
        success: function(jobID) {
            console.log("sent to printer with ID: " + jobID);
            return "sent to printer with ID: " + jobID;
        },
        error: function(err) {
            console.log(err);
            return err;
        },
    });
};
let moverArchivos = async(nameFile, folder) => {
    let archivo = `${folder}/${nameFile}`;
    let dest = `${config.RutaCarpetaArchivosLeidosPDF}/${nameFile}`;
    console.log("Arch:", archivo, "\nDestino:", dest);
    // console.log("¡Existe?", fs.existsSync(dest));
    if (fs.existsSync(dest)) {
        try {
            fs.unlinkSync(archivo)
            console.log('File removed')
        } catch (err) {
            console.error('Something wrong happened removing the file', err)
        }
    } else {

        let moverArch = fes.moveSync(archivo, dest);
        console.log("Mover Archivo:", moverArch);
    }
    return "movido";
};
let imprimirWIN = async(pathPDF, namePDF) => {
    // let msgImprime = await procesoImprimir(namePDF);
    // let msgImprime = await print(namePDF);
    // portrait
    // , { orientation: "landscape" }
    print(`${pathPDF}/${namePDF}`)
        .then(async(res) => {
            let msgMueve = await moverArchivos(namePDF, pathPDF);
            console.log(msgMueve);
            console.log("msg IM:", res);

            return res;
        })
        .catch((err) => {
            console.log("msg ERR IM", err);
        });
};
// async function procesoImprimir(msg) {
//     // return new Promise(resolve => {
//     setTimeout(() => {
//         return ('resolved proceso Impresion:', msg);
//     }, 3000);
//     // });
// }

let main = async() => {
    console.log("DIR_:", __dirname);
    let pathPDF = `${__dirname}/TMP`;
    let archivos = fs.readdirSync(pathPDF);
    console.log("TMP Archivos", archivos);
    for (let archPdf of archivos) {
        let msgImpre = await imprimirWIN(pathPDF, archPdf);
        console.log(msgImpre);
    }
};

main().then(console.log).catch(console.log);