import React, { useState } from 'react';
import { User, DollarSign, Clock, Gift, TrendingUp, CreditCard } from 'lucide-react';
import { EmpleadoData } from '../types/nomina';

interface Props {
  onCalcular: (empleado: EmpleadoData) => void;
}

export default function FormularioEmpleado({ onCalcular }: Props) {
  const [empleado, setEmpleado] = useState<EmpleadoData>({
    nombre: '',
    cedula: '',
    salarioBase: 0,
    horasExtras: 0,
    valorHoraExtra: 0,
    bonificaciones: 0,
    comisiones: 0,
    otrosIngresos: 0,
    prestamos: 0,
    adelantos: 0,
    otrasDeducciones: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalcular(empleado);
  };

  const handleChange = (field: keyof EmpleadoData, value: string | number) => {
    setEmpleado(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-dominican-blue rounded-lg">
          <User className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Datos del Empleado</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información Personal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              className="input-field"
              value={empleado.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              placeholder="Ej: Juan Pérez"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cédula
            </label>
            <input
              type="text"
              className="input-field"
              value={empleado.cedula}
              onChange={(e) => handleChange('cedula', e.target.value)}
              placeholder="000-0000000-0"
              required
            />
          </div>
        </div>

        {/* Ingresos */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-dominican-blue" />
            <h3 className="text-lg font-semibold text-gray-800">Ingresos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salario Base (RD$)
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.salarioBase || ''}
                onChange={(e) => handleChange('salarioBase', parseFloat(e.target.value) || 0)}
                placeholder="21000"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horas Extras
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.horasExtras || ''}
                onChange={(e) => handleChange('horasExtras', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="0.5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor Hora Extra (RD$)
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.valorHoraExtra || ''}
                onChange={(e) => handleChange('valorHoraExtra', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bonificaciones (RD$)
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.bonificaciones || ''}
                onChange={(e) => handleChange('bonificaciones', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comisiones (RD$)
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.comisiones || ''}
                onChange={(e) => handleChange('comisiones', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Otros Ingresos (RD$)
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.otrosIngresos || ''}
                onChange={(e) => handleChange('otrosIngresos', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Deducciones Adicionales */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-dominican-red" />
            <h3 className="text-lg font-semibold text-gray-800">Deducciones Adicionales</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Préstamos (RD$)
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.prestamos || ''}
                onChange={(e) => handleChange('prestamos', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adelantos (RD$)
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.adelantos || ''}
                onChange={(e) => handleChange('adelantos', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Otras Deducciones (RD$)
              </label>
              <input
                type="number"
                className="input-field"
                value={empleado.otrasDeducciones || ''}
                onChange={(e) => handleChange('otrasDeducciones', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full py-3 text-lg font-semibold"
        >
          Calcular Nómina
        </button>
      </form>
    </div>
  );
}