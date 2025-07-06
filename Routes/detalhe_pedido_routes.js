import { Router } from 'express';
import express from 'express';
import cors from 'cors';
import DetalhePedido from '../models/DetalhePedido.js';

const router = Router();
router.use(express.json());
router.use(cors());


// servidor de pedidos
router.get("/detalhe", async (req, res) => {
    const detalhe = await DetalhePedido.findAll();
    res.status(200).json(detalhe);
});

router.post("/detalhe", async(req, res) => {
    const { id_pedido, id_sorvete, id_cobertura } = req.body;
    const detalhe = await DetalhePedido.create({id_pedido, id_sorvete, id_cobertura});
    res.status(201).json(detalhe);
});

router.put("/detalhe/:id", async(req, res) => {
    const id = req.params.id;
     const { id_pedido, id_sorvete, id_cobertura } = req.body;
    const detalhe = await DetalhePedido.findByPk(id);
    const modificado = await detalhe.update({ id_pedido, id_sorvete, id_cobertura});
    res.status(201).json(modificado);
});

router.patch("/detalhe/:id", async(req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const detalhe = await DetalhePedido.findByPk(id);
    //res.json(pedido);
    
   const modificado =  await detalhe.update(dados);
    res.status(201).json(modificado);
});

router.delete("/detalhe/:id", async(req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const detalhe = await DetalhePedido.findByPk(id);
    res.json(detalhe);
    //const cliente = await Cliente.update({nome, endereco});
   await detalhe.destroy();
   // res.status(200).json({Message:' Deletado com Succeso'});
});
export default router;