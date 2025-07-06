import { Router } from 'express';
import express from 'express';
import cors from 'cors';
import Cobertura from '../models/Cobertura.js';


const router = Router();
router.use(express.json());
router.use(cors());

// servidor de sorvete
router.get("/cobertura", async (req, res) => {
    const cobertura = await Cobertura.findAll();
    res.status(200).json(cobertura);
});

router.post("/cobertura", async(req, res) => {
    const { nome_cobertura, preco_cobertura } = req.body;
    const cobertura = await Cobertura.create({nome_cobertura, preco_cobertura});
    res.status(201).json(cobertura);
});

router.put("/cobertura/:id", async(req, res) => {
    const id = req.params.id;
     const { nome_cobertura, preco_cobertura } = req.body;
    const cobertura = await Cobertura.findByPk(id);
    const modificado = await cobertura.update({nome_cobertura, preco_cobertura});
    res.status(201).json(modificado);
});

router.patch("/cobertura/:id", async(req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const cobertura = await Cobertura.findByPk(id);
    res.json(cobertura);
    
   const modificado =  await cobertura.update(dados);
    res.status(201).json(modificado);
});


router.delete("/cobertura/:id", async(req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const cobertura = await Cobertura.findByPk(id);
    //res.json(cliente);
    //const cliente = await Cliente.update({nome, endereco});
   await cobertura.destroy();
    res.status(200).json({Message:'Cobertura Deletado com Succeso'});
});


export default router;