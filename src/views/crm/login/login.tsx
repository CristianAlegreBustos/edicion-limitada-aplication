'use client';

import { LogoHeader } from '@/components/crm/login/logo-header';
import { LoginForm } from '@/components/crm/login/login-form';
import { Footer } from '@/components/crm/login/footer';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0C111A] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <LogoHeader />
        <Card className="bg-[#0C111A] border-[#B99A02] border-2">
          <VStack space='lg'>
          <Heading className="text-xl text-white">
            Iniciar Sesión</Heading>
            <Text className="text-gray-400">
              Acceda a su cuenta para gestionar productos
            </Text>

          <Card className="bg-transparent ">
            <LoginForm />
          </Card>
          </VStack>
        </Card>
        <Footer />
      </div>
    </div>
  );
}
