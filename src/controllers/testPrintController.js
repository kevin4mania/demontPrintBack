const fs = require("fs");
const printer = require("@thiagoelg/node-printer");
// const readLine = require("readline");
const pdf = require("html-pdf");
const pathP = require("path");
const config = require("../config/gestorImpresion");
const fes = require('fs-extra')

let leerArchivo = async(path, nameFile) => {
    console.log("Nombre a leer->", nameFile);
    // {encoding:'utf8', flag:'r'}
    const data = fs.readFileSync(`${path}/${nameFile}`, { encoding: "utf-8", flag: "r" });
    return data;
};
let llenarDataPDF = (dataArch, templateHtml) => {
    let vec = dataArch.split("\n");
    for (let data of vec) {
        let vec2 = data.split("=");
        if (vec2.length == 2) {
            // console.log(`Clave:${vec2[0].trim()}: valor:${vec2[1].trim()}`);
            templateHtml = templateHtml.replace(`{{${vec2[0].trim()}}}`, vec2[1].trim());
        }
    }
    return templateHtml;
};
let crearPDF = async(templateHtml, nameFile) => {
    nameFile = nameFile.split(".");
    let pathArchivoPDF = `${config.RutaCarpetaArchivosLeidosPDF}/${nameFile[0]}.pdf`;
    pdf.create(templateHtml).toFile(pathArchivoPDF, function(err, pdf) {
        if (err) return console.log(err);
        return pdf;
    });
    return pathArchivoPDF;
};
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

let main = async(archivos, carpeta) => {
    // let archivos = fs.readdirSync(pathFiles);
    // console.log("Archivos<<", archivos);
    for (let nameFile of archivos) {
        let extensionFile = nameFile.split(".")[1];
        let nameTemplate = config.Documentos.find((doc) => doc.extension == extensionFile);
        let template = pathP.join(config.CarpetaModelos, nameTemplate.modelo);
        let templateHtml = fs.readFileSync(template, { encoding: "utf8" });

        let dataArchivo = await leerArchivo(`${config.RutaCarpetaArchivos}/${carpeta}`, nameFile);
        let archivoLleno = await llenarDataPDF(dataArchivo, templateHtml);
        // console.log(archivoLleno);
        let creacionArchivo = await crearPDF(archivoLleno, nameFile);
        // await imprimir(creacionArchivo);
        moverArchivos(`${config.RutaCarpetaArchivos}/${carpeta}/${nameFile}`, `${config.RutaCarpetaRespaldosArchivosLeidos}/${carpeta}/${nameFile}`)
        console.log("FINAL_>", creacionArchivo);
    }
};
let parametrizaciones = async() => {
    let arrCarpetas = [];
    config.Documentos.find((d) => {
        arrCarpetas.push(d.carpeta);
    });
    for (let carpeta of arrCarpetas) {
        let archivos = fs.readdirSync(`${config.RutaCarpetaArchivos}/${carpeta}`);
        // console.log(carpeta);
        // console.log(archivos);
        await creaDirectoriosRespaldos(`${config.RutaCarpetaRespaldosArchivosLeidos}/${carpeta}`);
        await main(archivos, carpeta);
    }
    return "Listo";
};
let creaDirectoriosRespaldos = async(respaldos) => {
    if (!fs.existsSync(respaldos)) {
        let crearCarpeta = fs.mkdirSync(respaldos, { recursive: true });
        console.log("Crea DIR", crearCarpeta);
    }
};
let moverArchivos = (archivo, dest) => {
    let moverArch = fes.moveSync(archivo, dest);
    console.log("Mover Archivo:", moverArch);
}

module.exports = {
    parametrizaciones,
};