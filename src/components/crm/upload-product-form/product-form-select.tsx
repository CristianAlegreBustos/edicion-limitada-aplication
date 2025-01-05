import SelectField from '../shared/select-field';
import { Option, FormData } from '../shared/types';
import { Input, InputField } from '@/components/ui/input';
import { HStack } from '@/components/ui/hstack';
import {
  Textarea,
  TextareaInput,
} from '@/components/ui/textarea';

interface ProductFormSelectsProps {
  form: FormData;
  options: { brands: Option[]; models: Option[]; categories: Option[]; sizes: Option[] };
  onChange: (field: keyof FormData, value: string) => void;
}

export default function ProductFormSelects({ form, options, onChange }: ProductFormSelectsProps) {
  return (
    <div className="space-y-6">
      {/* Selección de categoría */}
      <SelectField
        value={form.category_id}
        options={options.categories || []}
        onChange={(value) => onChange('category_id', value)}
        placeholder="Selecciona una categoría"
      />

      {/* Selección de marca */}
      <SelectField
        value={form.brand_id}
        options={options.brands || []}
        onChange={(value) => onChange('brand_id', value)}
        placeholder="Selecciona una marca"
      />

      {/* Selección de modelo */}
      <SelectField
        value={form.model_id}
        options={options.models || []}
        onChange={(value) => onChange('model_id', value)}
        placeholder="Selecciona un modelo"
      />

      {/* Selección de talla */}
      <SelectField
        value={form.size_id}
        options={options.sizes || []}
        onChange={(value) => onChange('size_id', value)}
        placeholder="Selecciona una talla"
      />

      {/* Precio y moneda */}
      <HStack className="flex justify-between" space="lg">
        {/* Precio */}
        <Input
          variant="outline"
          size="md"
          className="w-1/2 bg-[#0C111A] border-[#B99A02] text-white placeholder-gray-400"
        >
          <InputField
            placeholder="Precio"
            value={form.product_price}
            onChange={(e) => onChange('product_price', e.target.value)}
            style={{ color: 'white' }}
          />
        </Input>

        {/* Moneda */}
        <SelectField
          value={form.product_currency}
          options={[
            { id: 'USD', name: 'USD' },
            { id: 'EUR', name: 'EUR' },
            { id: 'ARS', name: 'ARS' },
          ]}
          onChange={(value) => onChange('product_currency', value)}
          placeholder="Selecciona una moneda"
        />
      </HStack>

      {/* Descripción */}
      <Textarea
        size="lg"
        className="bg-[#0C111A] text-white"

      >
        <TextareaInput
          value={form.product_description}
          onChange={(e) => onChange('product_description', e.target.value)}
          placeholder="Describe el producto..."
          className="text-white bg-transparent border-2 border-[#B99A02] hover:border-white transition-colors p-3 rounded-md min-h-[100px]"
          style={{ color: 'white' }}
        />
      </Textarea>
    </div>
  );
}
