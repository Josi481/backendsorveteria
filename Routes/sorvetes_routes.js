import { Router } from 'express';
import express from 'express';
import cors from 'cors';
import Sorveti from '../models/Sorveti.js';

const router = Router();
router.use(express.json());
router.use(cors());


// servidor de sorvete
router.get("/sorvete", async (req, res) => {
    const sorvete = await Sorveti.findAll();
    res.status(200).json(sorvete);
});

router.post("/sorvete", async(req, res) => {
    const { sabor, preco_sorveti } = req.body;
    const sorvete = await Sorveti.create({sabor, preco_sorveti});
    res.status(201).json(sorvete);
});

router.put("/sorvete/:id", async(req, res) => {
    const id = req.params.id;
     const { preco_sorveti, sabor } = req.body;
    const sorvete = await Sorveti.findByPk(id);
    const modificado = await sorvete.update({preco_sorveti, sabor});
    res.status(201).json(modificado);
});

export default router;