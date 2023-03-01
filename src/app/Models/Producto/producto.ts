export class Unidad {
  id: number;
  nombre_unidad: String;
}

export class Categoria {
  id: number;
  nombre_categoria: String;
}

export class Producto {
  id: number;
  nombre: String;
  descripcion: String;
  cantidad: number;

  unidad: Unidad;
  categoria: Categoria;
  estado: boolean;
}
