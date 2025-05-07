class Zona {
  constructor(id, nombre, cultivo_principal, hectareas, coordenadas) {
    this.id = id;
    this.nombre = nombre;
    this.cultivo_principal = cultivo_principal;
    this.hectareas = hectareas;
    this.coordenadas = coordenadas;
  }

  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      cultivo_principal: this.cultivo_principal,
      hectareas: this.hectareas,
      coordenadas: this.coordenadas,
    };
  }
}

export default Zona;
