import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadSwaggerDoc() {
  try {
    const swaggerPath = path.join(__dirname, '../docs/swagger.yaml');
    const swaggerDocument = yaml.load(fs.readFileSync(swaggerPath, 'utf8'));
    console.log('Archivo Swagger cargado exitosamente');
    return swaggerDocument;
  } catch (e) {
    console.error('Error al cargar el archivo Swagger:', e);
    process.exit(1); 
  }
}

export default loadSwaggerDoc;
