import { CategoriasController } from "./controllers/CategoriasController";
import { Router } from "express";
const extenso = require('extenso');

const routes = Router();

routes.get("/categorias", new CategoriasController().handle);

routes.get('/valores/:valor', (req, res) => {
    let valor = req.params.valor; 
    valor = valor.replace('.', ','); 
    const valorExtenso = extenso(valor, { number: { decimalSeparator: 'dot' }, mode: 'currency' } );
    const valorExtensoMaiuscula = valorExtenso[0].toUpperCase() + valorExtenso.substring(1);
    res.json({ valorExtensoMaiuscula }); 
});

export default routes;
