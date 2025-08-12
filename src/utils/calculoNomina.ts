import { EmpleadoData, CalculoNomina, TramosISR } from '../types/nomina';

// Constantes para 2024 - República Dominicana
const TASA_AFP = 0.0287; // 2.87%
const TASA_ARS = 0.0304; // 3.04%
const TOPE_AFP_MENSUAL = 8010.60; // 7 salarios mínimos
const TOPE_ARS_MENSUAL = 8010.60; // 7 salarios mínimos
const SALARIO_MINIMO = 21000; // RD$ 21,000

// Tabla de ISR 2024 (mensual)
const TRAMOS_ISR: TramosISR[] = [
  { desde: 0, hasta: 416220, tasa: 0, exceso: 0 },
  { desde: 416220.01, hasta: 624329, tasa: 0.15, exceso: 416220 },
  { desde: 624329.01, hasta: 867123, tasa: 0.20, exceso: 624329 },
  { desde: 867123.01, hasta: Infinity, tasa: 0.25, exceso: 867123 }
];

export function calcularNomina(empleado: EmpleadoData): CalculoNomina {
  // Cálculo de ingresos
  const salarioBase = empleado.salarioBase;
  const horasExtras = empleado.horasExtras * empleado.valorHoraExtra;
  const bonificaciones = empleado.bonificaciones;
  const comisiones = empleado.comisiones;
  const otrosIngresos = empleado.otrosIngresos;
  
  const totalIngresos = salarioBase + horasExtras + bonificaciones + comisiones + otrosIngresos;
  
  // Cálculo de deducciones legales
  const baseAfp = Math.min(totalIngresos, TOPE_AFP_MENSUAL);
  const afp = baseAfp * TASA_AFP;
  
  const baseArs = Math.min(totalIngresos, TOPE_ARS_MENSUAL);
  const ars = baseArs * TASA_ARS;
  
  // Cálculo del ISR
  const baseImponible = totalIngresos - afp - ars;
  const isr = calcularISR(baseImponible);
  
  // Otras deducciones
  const prestamos = empleado.prestamos;
  const adelantos = empleado.adelantos;
  const otrasDeducciones = empleado.otrasDeducciones;
  
  const totalDeducciones = afp + ars + isr + prestamos + adelantos + otrasDeducciones;
  const salarioNeto = totalIngresos - totalDeducciones;
  
  return {
    salarioBase,
    horasExtras,
    bonificaciones,
    comisiones,
    otrosIngresos,
    totalIngresos,
    afp,
    ars,
    isr,
    prestamos,
    adelantos,
    otrasDeducciones,
    totalDeducciones,
    salarioNeto
  };
}

function calcularISR(baseImponible: number): number {
  if (baseImponible <= 0) return 0;
  
  for (const tramo of TRAMOS_ISR) {
    if (baseImponible >= tramo.desde && baseImponible <= tramo.hasta) {
      if (tramo.tasa === 0) return 0;
      return (baseImponible - tramo.exceso) * tramo.tasa;
    }
  }
  
  return 0;
}

export function formatearMoneda(valor: number): string {
  return new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 2
  }).format(valor);
}