import { Router } from 'express';
import express from 'express';
import cors from 'cors';
import Pedido from '../models/Pedido.js';

const router = Router();
router.use(express.json());
router.use(cors());


// servidor de pedidos
router.get("/pedido", async (req, res) => {
    const pedido = await Pedido.findAll();
    res.status(200).json(pedido);
});

router.post("/pedido", async(req, res) => {
    const { id_cliente, data_pedido, total_pedido } = req.body;
    const pedido = await Pedido.create({id_cliente, data_pedido, total_pedido});
    res.status(201).json(pedido);
});

router.put("/pedido/:id", async(req, res) => {
    const id = req.params.id;
     const { id_cliente, data_pedido, total_pedido } = req.body;
    const pedido = await Pedido.findByPk(id);
    const modificado = await pedido.update({ id_cliente, data_pedido, total_pedido});
    res.status(201).json(modificado);
});

router.patch("/pedido/:id", async(req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const pedido = await Pedido.findByPk(id);
    //res.json(pedido);
    
   const modificado =  await pedido.update(dados);
    res.status(201).json(modificado);
});

router.delete("/pedido/:id", async(req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const pedido = await Pedido.findByPk(id);
    res.json(pedido);
    //const cliente = await Cliente.update({nome, endereco});
   await pedido.destroy();
    res.status(200).json({Message:'Usuario Deletado com Succeso'});
});
export default router;