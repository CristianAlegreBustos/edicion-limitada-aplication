import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'; // Asegúrate de que esta ruta coincide con la configuración de tu proyecto
import { ChevronDownIcon } from '@/components/ui/icon';

interface SelectFieldProps {
  label?: string; // Etiqueta opcional para el campo
  placeholder: string; // Texto de ayuda para cuando no hay ningún valor seleccionado
  value: string; // Valor seleccionado actualmente
  options: { id: string; name: string }[]; // Opciones disponibles en el dropdown
  onChange: (value: string) => void; // Callback para manejar cambios en la selección
}

export default function SelectField({
  label,
  placeholder,
  value,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="w-full" style={{ color: 'white' }}>
      {label && <label className="text-white text-sm">{label}</label>}
      <Select selectedValue={value} onValueChange={onChange}>
        <SelectTrigger variant="outline" size="md" className="bg-[#0C111A] border-[#B99A02] text-white">
          <SelectInput placeholder={placeholder} />
          <SelectIcon as={ChevronDownIcon} className="mr-3" />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent className="bg-[#0C111A] border-[#B99A02] text-white placeholder-gray-400 hover:border-[#9F1020] transition-colors">
            {options.map(option => (
              <SelectItem
                key={option.id}
                label={option.name}
                value={option.id}
                className="text-white hover:bg-[#9F1020] focus:bg-[#85020E]"
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}
