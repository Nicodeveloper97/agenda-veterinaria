import React from 'react';
import { TurnoData } from './TurnoForm';

interface TurnoResumenProps {
  data: TurnoData;
}

const TurnoResumen: React.FC<TurnoResumenProps> = ({ data }) => {
  return (
    <div className="p-4 mb-4 bg-white border-l-4 border-green-400 shadow-sm rounded-lg">
      <h3 className="text-lg font-semibold text-green-600 mb-2">Turno Confirmado</h3>
      <p className="text-gray-700"><strong>Nombre:</strong> {data.nombre}</p>
      <p className="text-gray-700"><strong>Peso:</strong> {data.peso} kg</p>
      <p className="text-gray-700"><strong>Raza:</strong> {data.raza}</p>
      <p className="text-gray-700"><strong>Día:</strong> {data.dia}</p>
    </div>
  );
};

export default TurnoResumen;
