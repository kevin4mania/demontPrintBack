const fs = require("fs");
const printer = require("@thiagoelg/node-printer");
// const readLine = require("readline");
const pdf = require("html-pdf");
const pathP = require("path");
const config = require("../config/gestorImpresion");
const fes = require("fs-extra");
// const Client = require("ftp");
const { print } = require("pdf-to-printer");

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

let main = async(archivos, opcionLectura) => {
    // let archivos = fs.readdirSync(pathFiles);
    // console.log("Archivos<<", archivos);
    console.log("Archivos");
    for (let nameFile of archivos) {
        let extensionFile = nameFile.split(".")[1];
        let nameTemplate = config.Documentos.find((doc) => doc.extension == extensionFile);
        let template = pathP.join(config.CarpetaModelos, nameTemplate.modelo);
        let templateHtml = fs.readFileSync(template, { encoding: "utf8" });
        let dataArchivo = "";
        console.log("Opcion-_>", opcionLectura);
        if (opcionLectura == "1") {
            dataArchivo = await leerArchivo(`${config.RutaCarpetaArchivos}/${nameTemplate.carpeta}`, nameFile);
            // dataArchivo = await leerArchivo(`${config.RutaCarpetaArchivos}`, nameFile);
        } else if (opcionLectura == "2") {
            dataArchivo = await leerArchivo(
                `${config.RutaCarpetaRespaldosArchivosLeidos}/${nameTemplate.carpeta}`,
                nameFile
            );
        }
        let archivoLleno = await llenarDataPDF(dataArchivo, templateHtml);
        // console.log(archivoLleno);
        let creacionArchivo = await crearPDF(archivoLleno, nameFile);
        //** */
        // await imprimir(creacionArchivo);
        creacionArchivo = creacionArchivo.replace(String.fromCharCode(92), String.fromCharCode(47))
        console.log("PATH:", creacionArchivo);
        print(creacionArchivo).then(console.log).catch(console.log);
        //** */
        if (opcionLectura == "1") {
            console.log("MOVER ARCHIVOS");
            await moverArchivos(nameFile, nameTemplate.carpeta);
            // `${config.RutaCarpetaArchivos}/${nameFile}`,
            //     `${config.RutaCarpetaArchivos}/${nameTemplate.carpeta}/${nameFile}`,
            //     `${config.RutaCarpetaRespaldosArchivosLeidos}/${nameTemplate.carpeta}/${nameFile}`
            // );
        }
        console.log("FINAL_>", creacionArchivo);
    }
    return "Reimpresion Lista";
};

let creaDirectoriosRespaldos = async(respaldos) => {
    if (!fs.existsSync(respaldos)) {
        let crearCarpeta = fs.mkdirSync(respaldos, { recursive: true });
        console.log("Crea DIR", crearCarpeta);
    }
};
let moverArchivos = async(nameFile, folder) => {
    let archivo = `${config.RutaCarpetaArchivos}/${folder}/${nameFile}`;
    let dest = `${config.RutaCarpetaRespaldosArchivosLeidos}/${folder}/${nameFile}`;
    console.log("¡Existe?", fs.existsSync(dest));
    if (fs.existsSync(dest)) {
        let dest2 = `${config.RutaCarpetaRespaldosArchivosLeidos}/${folder}/${nameFile}--1`;
        let numeroC = dest2.split
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
    for (let carpeta of arrCarpetas) {
        let archivos = fs.readdirSync(`${config.RutaCarpetaArchivos}/${carpeta}`);
        // console.log(carpeta);
        // console.log(archivos);
        await creaDirectoriosRespaldos(`${config.RutaCarpetaRespaldosArchivosLeidos}/${carpeta}`);
        await main(archivos, "1");
    }
    return "Listo";
};

// let parametrizacionesFTP = async() => {
//     console.log("METODO ftp");
//     let arrcarpetas = [];
//     let c = new Client();
//     config.Documentos.find((d) => {
//         arrcarpetas.push(d.carpeta)
//     });
//     config.Documentos.find((d) => {
//         c.on("ready", function() {
//             c.list(`/${d.carpeta}`, function(err, list) {
//                 console.log(`Carpeta:${d.carpeta} lista:${list}`);
//                 list.forEach((fileData) => {
//                     // console.log(fileData);
//                     crearFTPArch(c, d.carpeta, fileData.name);
//                     removeFTPArch(c, d.carpeta, fileData.name); //** */
//                 });
//             });
//             c.end();
//         });

//     });

//     for (let d of arrcarpetas) {
//         console.log("Documentos:", d);
//         await creaDirectoriosRespaldos(`${config.RutaCarpetaRespaldosArchivosLeidos}/${d}`);
//     }
//     let archivos = fs.readdirSync(`${config.RutaCarpetaArchivos}`);
//     console.log("Archivos:-_>", archivos);
//     await main(archivos, "1");

//     c.connect(config.configFTP);

//     return "LISTO FTP";
// };

// let crearFTPArch = (c, dir, arch) => {
//     c.get(`/${dir}/${arch}`, async function(err, stream) {
//         if (err) throw err;
//         await stream.once("close", function() {
//             c.end();
//         });
//         //TODO: revisar como funciona el pipe con el create
//         await stream.pipe(fs.createWriteStream(`/home/kevin/Documentos/RECURSOS_AMT_APPs/demonPrint/TEST/TMP/${arch}`));
//     });
// };
// let removeFTPArch = (c, dir, arch) => {
//     c.delete(`/${dir}/${arch}`, function(err, respuesta) {
//         if (err) throw err;
//         console.log("REMOVE FTP", respuesta);
//     });
// }


module.exports = {
    parametrizaciones,
    main,
    // parametrizacionesFTP,
};