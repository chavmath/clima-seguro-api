const express = require("express");
const fs = require("fs");
const yaml = require("js-yaml");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

// Cargar el archivo Swagger (swagger.yaml) de manera segura
let swaggerDocument;

try {
  swaggerDocument = yaml.load(path.join(__dirname, "docs/swagger.yaml"));
  console.log("Archivo Swagger cargado exitosamente");
} catch (e) {
  console.error("Error al cargar el archivo Swagger:", e);
  process.exit(1); // Detener el servidor si no se puede cargar el archivo Swagger
}

const app = express();
const port = 3000;

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Rutas de la API utilizando los controladores
app.post("/zonas", require("./controllers/zonaController").createZona);
app.get("/zonas", require("./controllers/zonaController").getZonas);
app.get("/zonas/:id", require("./controllers/zonaController").getZonaById);
app.delete(
  "/zonas/:id",
  require("./controllers/zonaController").deleteZonaById
);

// Servir la documentación de Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
