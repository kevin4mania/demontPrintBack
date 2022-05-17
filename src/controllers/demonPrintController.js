const fs = require("fs");
const printer = require("@thiagoelg/node-printer");
// const readLine = require("readline");
const pdf = require("html-pdf");
const pathP = require("path");
const config = require("../config/gestorImpresion");
const fes = require("fs-extra");
// const Client = require("ftp");


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
    nameFile = nameFile.split(".")[0];
    // let pathArchivoPDF = `${config.RutaCarpetaArchivosLeidosPDF}/${nameFile}.pdf`;
    console.log("DIR_:", __dirname);
    let pathArchivoPDF = `${__dirname}/../TMP/${nameFile}.pdf`;
    pathArchivoPDF = pathArchivoPDF.replace(String.fromCharCode(92), String.fromCharCode(47));
    pdf.create(templateHtml).toFile(pathArchivoPDF, function(err, pdf) {
        if (err) return console.log(err);
        // console.log("\nCreacionPDF:\n", pdf);
        return pdf
    });
    return pathArchivoPDF;
};
let main = async(archivos, opcionLectura) => {
    // let archivos = fs.readdirSync(pathFiles);
    // console.log("Archivos<<", archivos);
    // console.log("Archivos");
    for (let nameFile of archivos) {
        let extensionFile = nameFile.split(".")[1];
        let nameTemplate = config.Documentos.find((doc) => doc.extension == extensionFile);
        let template = pathP.join(config.CarpetaModelos, nameTemplate.modelo);
        let templateHtml = fs.readFileSync(template, { encoding: "utf8" });
        let dataArchivo = "";
        console.log("\nOpcion-_>", opcionLectura);
        if (opcionLectura == "1") {
            dataArchivo = await leerArchivo(
                `${config.RutaCarpetaArchivos}/${nameTemplate.carpeta}`,
                nameFile
            );
            // dataArchivo = await leerArchivo(`${config.RutaCarpetaArchivos}`, nameFile);
        } else if (opcionLectura == "2") {
            dataArchivo = await leerArchivo(
                `${config.RutaCarpetaRespaldosArchivosLeidos}/${nameTemplate.carpeta}`,
                nameFile
            );
        }
        let archivoLleno = await llenarDataPDF(dataArchivo, templateHtml);
        // console.log(archivoLleno);
        let rutaNuevoPDF = await crearPDF(archivoLleno, nameFile);
        console.log("RUTA PPDDFF:", rutaNuevoPDF);
        if (opcionLectura == "1") {
            await moverArchivos(nameFile, nameTemplate.carpeta);
        }
    }
    return archivos;
};


let creaDirectoriosRespaldos = async(respaldos) => {
    if (!fs.existsSync(respaldos)) {
        let crearCarpeta = fs.mkdirSync(respaldos, { recursive: true });
        // console.log("Crea DIR", crearCarpeta);
    }
};
let moverArchivos = async(nameFile, folder) => {
    let archivo = `${config.RutaCarpetaArchivos}/${folder}/${nameFile}`;
    let dest = `${config.RutaCarpetaRespaldosArchivosLeidos}/${folder}/${nameFile}`;
    // console.log("¡Existe?", fs.existsSync(dest));
    if (fs.existsSync(dest)) {
        let dest2 = `${config.RutaCarpetaRespaldosArchivosLeidos}/${folder}/${nameFile}--1`;
        let numeroC = dest2.split;
        let contador = 0;
    } else {
        // console.log("Arch:", archivo, "\nDestino:", dest);
        let moverArch = fes.moveSync(archivo, dest);
        // console.log("Mover Archivo:", moverArch);
    }
};
let parametrizaciones = async() => {
    let arrCarpetas = [];
    config.Documentos.find((d) => {
        arrCarpetas.push(d.carpeta);
    });
    for (let i = 0; i < arrCarpetas.length; i++) {
        let archivos = fs.readdirSync(`${config.RutaCarpetaArchivos}/${arrCarpetas[i]}`);
        await creaDirectoriosRespaldos(`${config.RutaCarpetaRespaldosArchivosLeidos}/${arrCarpetas[i]}`);
        await main(archivos, "1");
    }
    return "Listo";
};



module.exports = {
    parametrizaciones,
    main,
    // parametrizacionesFTP,
};