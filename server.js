import express from 'express';
import swaggerUi from 'swagger-ui-express';
import zonaRoutes from './routes/zonaRoutes.js';
import tempRoutes from './routes/tempRoutes.js';
import loadSwaggerDoc from './config/swaggerConfig.js';


const app = express();
const port = 3000;

const swaggerDocument = loadSwaggerDoc();

app.use(express.json());

app.use('/', zonaRoutes);
app.use('/', tempRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentación Swagger en http://localhost:${port}/api-docs`);
});
