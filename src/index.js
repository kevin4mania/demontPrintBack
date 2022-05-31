const {  main } = require("./controllers/demonPrintController");
const fs = require("fs");
const config = require("./config/gestorImpresion");

let creaDirectoriosRespaldos = async (respaldos) => {
    if (!fs.existsSync(respaldos)) {
        let crearCarpeta = fs.mkdirSync(respaldos, { recursive: true });
        // console.log("Crea DIR", crearCarpeta);
    }
};


let parametrizaciones = async () => {
    console.log("Listo");
    let arrCarpetas = [];
    config.Documentos.find((d) => {
        arrCarpetas.push(d.carpeta);
    });
    for (let i = 0; i < arrCarpetas.length; i++) {
        let archivos = fs.readdirSync(`${config.RutaCarpetaArchivos}/${arrCarpetas[i]}`);
        await creaDirectoriosRespaldos(`${config.RutaCarpetaRespaldosArchivosLeidos}/${arrCarpetas[i]}`);
        await main(archivos, "1");
    }
    //return "Listo";
};

parametrizaciones();
    //.then((res) => {
      //  console.log(res);
    //})
    //.catch((err) => {
      //  console.log(err);
    //});