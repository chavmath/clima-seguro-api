const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const zonaRoutes = require('./routes/zonaRoutes');

let swaggerDocument;

// Cargar el archivo Swagger correctamente
try {
  const swaggerPath = path.join(__dirname, 'docs/swagger.yaml');
  swaggerDocument = yaml.load(fs.readFileSync(swaggerPath, 'utf8'));
  console.log('Archivo Swagger cargado exitosamente');
} catch (e) {
  console.error('Error al cargar el archivo Swagger:', e);
  process.exit(1); // Detener el servidor si no se puede cargar Swagger
}

const app = express();
const port = 3000;

app.use(express.json());

// Rutas de API
app.use('/', zonaRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentación Swagger en http://localhost:${port}/api-docs`);
});
