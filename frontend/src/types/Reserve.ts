export interface ReserveRequestType {
  fecha:            string;
  hora:             string;
  cantidadPersonas: number;
  observaciones:    string;
  usuarioId:        string;
}

export interface ReserveResponseType {
  fecha:            string;
  hora:             string;
  cantidadPersonas: number;
  observaciones:    string;
  estado:           string;
  usuario:          Usuario;
  mesa:             Mesa;
  id:               string;
}

export interface Mesa {
  id: number;
}

export interface Usuario {
  id:             string;
  usuario:        string;
  nombreCompleto: string;
  rol:            string;
}
