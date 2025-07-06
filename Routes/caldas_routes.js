import { Router } from 'express';
import express from 'express';
import cors from 'cors';
import Caldas from '../models/Caldas.js';


const router = Router();
router.use(express.json());
router.use(cors());

// servidor de sorvete
router.get("/caldas", async (req, res) => {
    const caldas = await Caldas.findAll();
    res.status(200).json(caldas);
});



export default router;