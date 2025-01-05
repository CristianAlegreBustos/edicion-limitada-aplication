import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'

export default function ProductFormHeader() {
  return (

      <VStack space='md'>
        <Heading className="text-2xl text-[#B99A02]">Nuevo Producto</Heading>
      <Text className="text-gray-400">
          Complete los detalles del producto para agregarlo al catálogo
      </Text>
        </VStack>

  )
}
