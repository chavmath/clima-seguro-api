const Zona = require("../models/zonaModel");

let zonas = [];

const createZona = (req, res) => {
  const { nombre, cultivo_principal, hectareas, coordenadas } = req.body;

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

  const id = zonas.length + 1;

  const nuevaZona = new Zona(
    id,
    nombre,
    cultivo_principal,
    hectareas,
    coordenadas
  );
  zonas.push(nuevaZona);
  res.status(201).json(nuevaZona.toJSON());
};

const getZonas = (req, res) => {
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
  zonas.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  createZona,
  getZonas,
  getZonaById,
  deleteZonaById,
};
