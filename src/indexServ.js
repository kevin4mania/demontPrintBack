// ip Impresora:http://172.20.68.206/
require("dotenv").config();
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); //dev


const app = express();

// Lectura y parseo del Body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev")); //dev


// parametrizacionesFTP()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

app.use("/api/gestorImpresion", require("./routes/servicePrintRouter"));

app.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log("Servidor corriendo en puerto", process.env.PORT);
});