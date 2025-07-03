import sequelize from './database.js';
import express from 'express';
import sorveRouters from './routes/sorvetes_routes.js';
import Cliente from './models/Cliente.js';
import Cobertura from './models/Cobertura.js';
import DetalhePedido from './models/DetalhePedido.js';
import Pedido from './models/Pedido.js';
import Sorveti from './models/Sorveti.js';
import Tamanho from './models/Tamanho.js';
import TamanhoSorveti from './models/Tamanhosorveti.js';
import cors from 'cors';


const app = express();

app.use(sorveRouters);
app.use(cors());






sequelize.sync().then(() => {
    console.log("Sincronição com banco de dados realizada");
    app.listen(3001, () => {
        console.log("Servidor rodando em localhost:3001")
    });
});