import React, { useState } from 'react';

interface TurnoFormProps {
  onSubmit: (data: TurnoData) => void;
}

export interface TurnoData {
  nombre: string;
  peso: string;
  raza: string;
  dia: string;
}

const TurnoForm: React.FC<TurnoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TurnoData>({ nombre: '', peso: '', raza: '', dia: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ nombre: '', peso: '', raza: '', dia: '' }); // Limpiar formulario
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-600">Nombre del perrito</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del perrito"
          value={formData.nombre}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-gray-600">Peso aproximado</label>
        <input
          type="text"
          name="peso"
          placeholder="Peso aproximado"
          value={formData.peso}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-gray-600">Raza</label>
        <input
          type="text"
          name="raza"
          placeholder="Raza"
          value={formData.raza}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-gray-600">Día deseado</label>
        <input
          type="date"
          name="dia"
          value={formData.dia}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Reservar Turno
      </button>
    </form>
  );
};

export default TurnoForm;
