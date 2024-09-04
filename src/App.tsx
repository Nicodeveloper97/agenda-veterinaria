import React, { useState } from 'react';
import TurnoForm, { TurnoData } from './components/TurnoForm';
import TurnoResumen from './components/TurnoResumen';

const App: React.FC = () => {
  const [turnos, setTurnos] = useState<TurnoData[]>([]);

  const handleTurnoSubmit = (data: TurnoData) => {
    setTurnos((prevTurnos) => [...prevTurnos, data]); // Agregar el nuevo turno a la lista
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Agenda de Turnos Veterinaria</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Registrar Turno</h2>
            <TurnoForm onSubmit={handleTurnoSubmit} />
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Turnos Reservados</h2>
            {turnos.length === 0 ? (
              <p className="text-gray-500">No hay turnos reservados aún.</p>
            ) : (
              turnos.map((turno, index) => (
                <TurnoResumen key={index} data={turno} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
