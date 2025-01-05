import React from 'react';

interface InputFieldProps {
  id: string; // ID único para el input
  label: string; // Etiqueta del campo
  type: string; // Tipo de input (e.g., 'text', 'email', 'password')
  placeholder?: string; // Texto placeholder opcional
  value: string; // Valor actual del input
  onChange: (value: string) => void; // Función para manejar cambios
  error?: string; // Mensaje de error opcional
}

export function InputField({
  id,
  label,
  type,
  placeholder = '',
  value,
  onChange,
  error,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`bg-[#0C111A] border-[#B99A02] text-white placeholder-gray-400 transition-colors ${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
