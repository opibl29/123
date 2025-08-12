import React, { useState } from 'react';
import { Flag, Calculator } from 'lucide-react';
import FormularioEmpleado from './components/FormularioEmpleado';
import ResultadoNomina from './components/ResultadoNomina';
import { EmpleadoData, CalculoNomina } from './types/nomina';
import { calcularNomina } from './utils/calculoNomina';

function App() {
  const [empleado, setEmpleado] = useState<EmpleadoData | null>(null);
  const [calculo, setCalculo] = useState<CalculoNomina | null>(null);

  const handleCalcular = (datosEmpleado: EmpleadoData) => {
    const resultado = calcularNomina(datosEmpleado);
    setEmpleado(datosEmpleado);
    setCalculo(resultado);
  };

  const handleImprimir = () => {
    window.print();
  };

  const handleNuevoCalculo = () => {
    setEmpleado(null);
    setCalculo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-dominican-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 bg-dominican-blue"></div>
                <div className="w-8 h-6 bg-dominican-red"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Calculadora de Nómina
                </h1>
                <p className="text-gray-600">República Dominicana - 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="w-8 h-8 text-dominican-blue" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!calculo ? (
          <FormularioEmpleado onCalcular={handleCalcular} />
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Resultado del Cálculo</h2>
              <button
                onClick={handleNuevoCalculo}
                className="btn-primary"
              >
                Nuevo Cálculo
              </button>
            </div>
            <ResultadoNomina
              empleado={empleado!}
              calculo={calculo}
              onImprimir={handleImprimir}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Flag className="w-6 h-6 text-dominican-red" />
              <span className="text-xl font-semibold">República Dominicana</span>
            </div>
            <p className="text-gray-400">
              Calculadora de nómina actualizada según la legislación dominicana vigente 2024
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Desarrollado para facilitar el cálculo de salarios y deducciones legales
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;