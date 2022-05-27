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
    const data = fs.readFileSync(`${path}/${nameFile}`, { encoding: "latin1", flag: "r" });
    // console.log("***************DATA*******************");
    // console.log(data);
    // console.log("**************************************");
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
let llenarPDF_lS = (dataArch, templateHtml) => {
    let vec = dataArch.split("\n");
    let cont = 1;
    for (let data of vec) {
        let vec2 = data.split("=");
        if (vec2.length == 2) {
            if (vec2[0].trim() != "TABDATOS") {
                // console.log("\nNOO TABDATOS");
                // console.log(`REEMPLAZAR--> Clave:{{${vec2[0].trim()}}} | valor:${vec2[1].trim()}`);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}}}`, vec2[1].trim());
                // console.log(`Typo:${typeof(templateHtml)}, \n tempalte-->:${templateHtml}`);
                if (vec2[0].trim() == "TOTAL REGISTROS") {
                    let codhtml = ''
                    let numeroRegistros = vec2[0].trim() == 'TOTAL REGISTROS' ? vec2[1].trim() : 0;
                    // console.log(`Numero de registros:${typeof(numeroRegistros)}-->${numeroRegistros} **${typeof(parseInt(numeroRegistros))} -->${parseInt(numeroRegistros)}`);
                    for (let k = 1; k <= parseInt(numeroRegistros); k++) {
                        // codhtml += `{{TABDATOS${k}}}<br>`;
                        codhtml += `<tr>
                        <td>
                        <p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-1}}</span></p></td>
                        <td><p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-2}}</span></p></td>
                        <td><p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-3}}</span></p></td>
                        <td><p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-4}}</span></p></td>
                        <td><p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-5}}</span></p></td>
                        <td><p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-6}}</span></p></td>
                        <td><p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-7}}</span></p></td>
                        <td><p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-8}}</span></p></td>
                        <td><p style="margin-top:0pt; margin-bottom:0pt; line-height:150%; font-size:6pt;"><span style="font-family:Arial;">{{TABDATOS${k}-9}}</span></p></td>
                        </tr>`;
                    }
                    // codhtml += '</table>';
                    templateHtml = templateHtml.replace('{{DATA}}', codhtml);
                }
                // console.log("\n\nTEMPALTE ACTUALIZADO:-------------\n", templateHtml);
            } else if (vec2[0].trim() == "TABDATOS") {
                let n = cont++;
                let arrData = vec2[1].trim().split(',');
                // console.log(`REEMPLAZAR--> Clave:{{${vec2[0].trim()}${n}}} | valor:${vec2[1].trim()}`);
                // templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}}}`, vec2[1].trim());
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-1}}`, arrData[0]);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-2}}`, arrData[1]);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-3}}`, arrData[2]);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-4}}`, arrData[3]);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-5}}`, arrData[4]);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-6}}`, arrData[5]);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-7}}`, arrData[6]);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-8}}`, arrData[7]);
                templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}-9}}`, arrData[8]);
                // templateHtml = templateHtml.replace(`{{${vec2[0].trim()}${n}}}`, vec2[1].trim());
            }
        }
    }
    return templateHtml;
}

let crearPDF = async(templateHtml, nameFile, oriention, extencion) => {
    nameFile = nameFile.split(".")[0];
    // let pathArchivoPDF = `${config.RutaCarpetaArchivosLeidosPDF}/${nameFile}.pdf`;
    console.log("DIR_:", __dirname);
    let pathArchivoPDF = `${__dirname}/../TMP/${nameFile}_${extencion}.pdf`;
    pathArchivoPDF = pathArchivoPDF.replace(String.fromCharCode(92), String.fromCharCode(47));
    let opcOrientation = oriention.toUpperCase() == 'H' ? 'landscape' : 'portrait';
    pdf.create(templateHtml, { format: "A4", orientation: opcOrientation }).toFile(pathArchivoPDF, function(err, pdf) {
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
        let archivoLleno = '';
        if (nameTemplate.extension == 'LS') {
            archivoLleno = await llenarPDF_lS(dataArchivo, templateHtml);
        } else {
            archivoLleno = await llenarDataPDF(dataArchivo, templateHtml);
        }
        // console.log(archivoLleno);
        let rutaNuevoPDF = await crearPDF(archivoLleno, nameFile, nameTemplate.orientacion, nameTemplate.extension);
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
        console.log("Arch:", archivo, "\nDestino:", dest);
        let moverArch = fes.moveSync(archivo, dest);
        console.log("Mover Archivo:", moverArch);
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