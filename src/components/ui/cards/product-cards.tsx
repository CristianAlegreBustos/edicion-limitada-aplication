import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";


interface ProductCardProps {
  source:string,
  productName:string,
  title:string,
  subTitle?:string,
  price:number,
  buttonText?:string
}

const ProductCard = ({ source,productName,title,subTitle,price,buttonText }: ProductCardProps) => {
  return (
    <VStack
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <Image source={source} alt={productName} className="w-full h-64 object-cover"/>
      <Box className="p-4">
        <Heading className="text-xl font-bold mb-2 text-gold">
          {title}
        </Heading>
        <Text className="text-gray-300 mb-4">
          {subTitle}
        </Text>
        <Text className="text-gray-300 mb-4">
          ${price.toFixed(2)}
        </Text>
        <Button className="w-full bg-gold text-black py-2 rounded-full hover:bg-opacity-80 transition-colors">
          {buttonText}
        </Button>
      </Box>
    </VStack>
  );
};

export default ProductCard;
