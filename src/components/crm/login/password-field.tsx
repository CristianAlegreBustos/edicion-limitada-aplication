import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps {
  id: string; // ID único para el input
  label: string; // Etiqueta del campo
  placeholder?: string; // Texto placeholder opcional
  value: string; // Valor actual del input
  onChange: (value: string) => void; // Función para manejar cambios
  error?: string; // Mensaje de error opcional
}

export function PasswordField({
  id,
  label,
  placeholder = '',
  value,
  onChange,
  error,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm text-white" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`bg-[#0C111A] border-[#B99A02] text-white placeholder-gray-400 transition-colors pr-10 ${
            error ? 'border-red-500' : ''
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
