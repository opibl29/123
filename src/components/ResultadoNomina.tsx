import React from 'react';
import { Calculator, FileText, Printer, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { CalculoNomina, EmpleadoData } from '../types/nomina';
import { formatearMoneda } from '../utils/calculoNomina';

interface Props {
  empleado: EmpleadoData;
  calculo: CalculoNomina;
  onImprimir: () => void;
}

export default function ResultadoNomina({ empleado, calculo, onImprimir }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-dominican-blue rounded-lg">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Resultado de Nómina</h2>
              <p className="text-gray-600">{empleado.nombre} - {empleado.cedula}</p>
            </div>
          </div>
          <button
            onClick={onImprimir}
            className="btn-secondary flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Imprimir
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ingresos */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">Ingresos</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Salario Base:</span>
              <span className="font-semibold text-green-600">
                {formatearMoneda(calculo.salarioBase)}
              </span>
            </div>
            {calculo.horasExtras > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Horas Extras:</span>
                <span className="font-semibold text-green-600">
                  {formatearMoneda(calculo.horasExtras)}
                </span>
              </div>
            )}
            {calculo.bonificaciones > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Bonificaciones:</span>
                <span className="font-semibold text-green-600">
                  {formatearMoneda(calculo.bonificaciones)}
                </span>
              </div>
            )}
            {calculo.comisiones > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Comisiones:</span>
                <span className="font-semibold text-green-600">
                  {formatearMoneda(calculo.comisiones)}
                </span>
              </div>
            )}
            {calculo.otrosIngresos > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Otros Ingresos:</span>
                <span className="font-semibold text-green-600">
                  {formatearMoneda(calculo.otrosIngresos)}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-3">
              <span className="font-semibold text-gray-800">Total Ingresos:</span>
              <span className="font-bold text-green-700 text-lg">
                {formatearMoneda(calculo.totalIngresos)}
              </span>
            </div>
          </div>
        </div>

        {/* Deducciones */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-5 h-5 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">Deducciones</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">AFP (2.87%):</span>
              <span className="font-semibold text-red-600">
                {formatearMoneda(calculo.afp)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">ARS (3.04%):</span>
              <span className="font-semibold text-red-600">
                {formatearMoneda(calculo.ars)}
              </span>
            </div>
            {calculo.isr > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">ISR:</span>
                <span className="font-semibold text-red-600">
                  {formatearMoneda(calculo.isr)}
                </span>
              </div>
            )}
            {calculo.prestamos > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Préstamos:</span>
                <span className="font-semibold text-red-600">
                  {formatearMoneda(calculo.prestamos)}
                </span>
              </div>
            )}
            {calculo.adelantos > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Adelantos:</span>
                <span className="font-semibold text-red-600">
                  {formatearMoneda(calculo.adelantos)}
                </span>
              </div>
            )}
            {calculo.otrasDeducciones > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Otras Deducciones:</span>
                <span className="font-semibold text-red-600">
                  {formatearMoneda(calculo.otrasDeducciones)}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center py-3 bg-red-50 rounded-lg px-3">
              <span className="font-semibold text-gray-800">Total Deducciones:</span>
              <span className="font-bold text-red-700 text-lg">
                {formatearMoneda(calculo.totalDeducciones)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Salario Neto */}
      <div className="card bg-gradient-to-r from-dominican-blue to-blue-700 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-lg">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Salario Neto</h3>
              <p className="text-blue-100">Monto a recibir</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">
              {formatearMoneda(calculo.salarioNeto)}
            </div>
          </div>
        </div>
      </div>

      {/* Información Legal */}
      <div className="card bg-gray-50">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-gray-600" />
          <h4 className="font-semibold text-gray-800">Información Legal</h4>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• Cálculos basados en la legislación dominicana vigente 2024</p>
          <p>• Tasa AFP: 2.87% (tope: RD$ 8,010.60 mensual)</p>
          <p>• Tasa ARS: 3.04% (tope: RD$ 8,010.60 mensual)</p>
          <p>• ISR calculado según tabla progresiva vigente</p>
          <p>• Salario mínimo nacional: RD$ 21,000</p>
        </div>
      </div>
    </div>
  );
}