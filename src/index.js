// ip Impresora:http://172.20.68.206/
const fs = require("fs");

const { parametrizaciones } = require("../src/controllers/testPrintController");

parametrizaciones()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });