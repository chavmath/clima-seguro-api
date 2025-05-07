const Zona = require("../models/zonaModel");

// Usamos un arreglo en memoria para almacenar las zonas
let zonas = [];

const createZona = (req, res) => {
  const { nombre, cultivo_principal, hectareas, coordenadas } = req.body;

  // Validar que todos los datos estén presentes
  if (
    !nombre ||
    !cultivo_principal ||
    !hectareas ||
    !coordenadas ||
    !coordenadas.latitud ||
    !coordenadas.longitud
  ) {
    return res.status(400).json({ message: "Faltan datos requeridos" });
  }

  // Asignamos un ID único
  const id = zonas.length + 1;

  // Crear una nueva zona con el modelo Zona
  const nuevaZona = new Zona(
    id,
    nombre,
    cultivo_principal,
    hectareas,
    coordenadas
  );

  // Almacenamos la zona en el arreglo
  zonas.push(nuevaZona);

  // Responder con la zona creada
  res.status(201).json(nuevaZona.toJSON());
};

const getZonas = (req, res) => {
  // Retornar todas las zonas almacenadas
  res.json(zonas.map((zona) => zona.toJSON()));
};

const getZonaById = (req, res) => {
  const zona = zonas.find((zona) => zona.id === parseInt(req.params.id));
  if (!zona) {
    return res.status(404).json({ message: "Zona no encontrada" });
  }
  res.json(zona.toJSON());
};

const deleteZonaById = (req, res) => {
  const index = zonas.findIndex((zona) => zona.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Zona no encontrada" });
  }
  zonas.splice(index, 1); // Eliminar la zona
  res.status(204).send(); // Responder con un código de éxito (sin contenido)
};

module.exports = {
  createZona,
  getZonas,
  getZonaById,
  deleteZonaById,
};
