import { Router } from 'express';
import express from 'express';
import cors from 'cors';
import Sorvete from '../models/Sorvete.js';

const router = Router();
router.use(express.json());
router.use(cors());


// servidor de sorvete
router.get("/sorvete", async (req, res) => {
    const sorvete = await Sorvete.findAll();
    res.status(200).json(sorvete);
});

router.post("/sorvete", async(req, res) => {
    const { sabor, preco_sorvete } = req.body;
    const sorvete = await Sorvete.create({sabor, preco_sorvete});
    res.status(201).json(sorvete);
});

router.put("/sorvete/:id", async(req, res) => {
    const id = req.params.id;
     const { sabor, preco_sorvete, imagem } = req.body;
    const sorvete = await Sorvete.findByPk(id);
    const modificado = await sorvete.update({sabor, preco_sorvete, imagem});
    res.status(201).json(modificado);
});

router.patch("/sorvete/:id", async(req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const sorvete = await Sorvete.findByPk(id);
    res.json(sorvete);
    
   const modificado =  await sorvete.update(dados);
    res.status(201).json(modificado);
});


router.delete("/sorvete/:id", async(req, res) => {
    const id = req.params.id;
    const dados = req.body;
    const sorvete = await Sorvete.findByPk(id);
    //res.json(cliente);
    //const cliente = await Cliente.update({nome, endereco});
   await sorvete.destroy();
    res.status(200).json({Message:'Sorvete Deletado com Succeso'});
});


export default router;