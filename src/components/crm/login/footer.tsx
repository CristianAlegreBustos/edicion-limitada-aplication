
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';
import { HStack } from '@/components/ui/hstack';

export function Footer() {
  return (
    <HStack space="sm" className='justify-center'>
      <Text className="text-sm text-typography-500 ">
        ¿Necesita ayuda?
      </Text>
      <Link
          href="#"
          className="text-sm text-[#B99A02] hover:text-[#9F1020] transition-colors"
        >
          Contacte a soporte
        </Link>
    </HStack>
  );
}
