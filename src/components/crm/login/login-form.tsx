'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { FormControl } from '@/components/ui/form-control';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon';

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }

      router.push('/');
    } catch (error) {
      setErrors({
        email: 'Credenciales inválidas',
        password: 'Credenciales inválidas',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormControl className="p-4 border rounded-lg border-outline-300">
      <VStack space="xl">
        {/* Campo de Email */}
        <VStack space="md">
          <Text className="text-typography-500 text-white">Email</Text>
          <Input className="min-w-[250px]">
            <InputField
              placeholder="ejemplo@empresa.com"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              className={`${
                errors.email ? 'border-red-500' : ''
              } text-typography-500 text-white`}
            />
          </Input>
          {errors.email && <Text className="text-red-500 text-sm">{errors.email}</Text>}
        </VStack>

        {/* Campo de Contraseña */}
        <VStack space="md">
          <Text className="text-typography-500">Contraseña</Text>
          <Input className="min-w-[250px]">
            <InputField
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              className={`${
                errors.password ? 'border-red-500' : ''
              } text-typography-500 text-white`}
            />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
          {errors.password && <Text className="text-red-500 text-sm">{errors.password}</Text>}
        </VStack>

        {/* Botón de Iniciar Sesión */}
        <Button
          className="w-full bg-[#9F1020] text-white hover:bg-[#85020E] disabled:bg-gray-600 disabled:text-gray-300"
          onPress={handleSubmit}
          disabled={isLoading}
        >
          <ButtonText>
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}
