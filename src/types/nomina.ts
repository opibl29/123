export interface EmpleadoData {
  nombre: string;
  cedula: string;
  salarioBase: number;
  horasExtras: number;
  valorHoraExtra: number;
  bonificaciones: number;
  comisiones: number;
  otrosIngresos: number;
  prestamos: number;
  adelantos: number;
  otrasDeducciones: number;
}

export interface CalculoNomina {
  salarioBase: number;
  horasExtras: number;
  bonificaciones: number;
  comisiones: number;
  otrosIngresos: number;
  totalIngresos: number;
  afp: number;
  ars: number;
  isr: number;
  prestamos: number;
  adelantos: number;
  otrasDeducciones: number;
  totalDeducciones: number;
  salarioNeto: number;
}

export interface TramosISR {
  desde: number;
  hasta: number;
  tasa: number;
  exceso: number;
}