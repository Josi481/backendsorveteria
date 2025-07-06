import sequelize from './database.js';
import express from 'express';
import sorveRouters from './routes/sorvetes_routes.js';
import pedidoRouters from './Routes/pedido_routes.js';
import detalheRouters from './Routes/detalhe_pedido_routes.js';
import coberturaRouters from './Routes/coberturas_routers.js';
import caldasRouters from './Routes/caldas_routes.js';
import Cliente from './models/Cliente.js';
import Cobertura from './models/Cobertura.js';
import DetalhePedido from './models/DetalhePedido.js';
import Pedido from './models/Pedido.js';
import Sorvete from './models/Sorvete.js';
import Tamanho from './models/Tamanho.js';
import TamanhoSorveti from './models/Tamanhosorveti.js';
import Promocoes from './models/promocoes.js';
import Caldas from './models/Caldas.js';
import cors from 'cors';
import { QueryTypes } from 'sequelize';



const app = express();

app.use(sorveRouters);
app.use(pedidoRouters);
app.use(detalheRouters);
app.use(coberturaRouters);
app.use(caldasRouters);
app.use(cors());

/*const users = await sequelize.query('SELECT * FROM `cobertura`', {
  type: QueryTypes.SELECT,
});
console.log(users);*/







sequelize.sync().then(() => {
    console.log("Sincronição com banco de dados realizada");
    app.listen(3001, () => {
        console.log("Servidor rodando em localhost:3001")
    });
});