const fs = require("fs");
const { parametrizaciones } = require("./controllers/demonPrintController");

parametrizaciones()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });