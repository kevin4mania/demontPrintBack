exports.success = (req, res, msg, body, status) => {
    let statusCode = status || 200;
    msg = msg || "";
    let respuesta = {
        ok: true,
        codError: "0001",
        msg,
        body,
    };
    // logger.info(agregarLOG(req, res, respuesta));
    res.status(statusCode).json(respuesta);
};

exports.error = (req, res, msg, codError, body, status) => {
    let statusCode = status || 200;
    msg = msg || "Internal server error";
    let respuesta = {
        ok: false,
        codError,
        msg,
        body,
    };
    // logger.error(agregarLOG(req, res, respuesta));
    res.status(statusCode).json(respuesta);
};