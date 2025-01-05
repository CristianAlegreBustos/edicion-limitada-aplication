import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface ProductFormSubmitButtonProps {
  isLoading: boolean;
}

export default function ProductFormSubmitButton({
  isLoading,
}: ProductFormSubmitButtonProps) {
  return (
    <Button
      disabled={isLoading}
      className="w-full bg-[#9F1020] text-white hover:bg-[#85020E] disabled:bg-gray-600 disabled:text-gray-300"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Guardando...
        </>
      ) : (
        'Guardar Producto'
      )}
    </Button>
  );
}
