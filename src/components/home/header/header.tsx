import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { Link, LinkText } from '@/components/ui/link';

export const Header: React.FC = () => {

  const navBarItem =[{title:'Inicio',link:'/'},{title:'Coleccion',link:'/collections'},{title:'Guia de talles',link:'/size-guides'},{title:'Sobre Nosotros', link:'/about'}]
  return (
    <Box className="bg-black p-4 flex flex-row justify-between items-center border-b border-gold">
      <Menu className="w-6 h-6 text-gold md:hidden" />
      <Heading size="xl" className="text-2xl font-bold text-gold">EDICIÓN LIMITADA</Heading>
      <Box className="hidden md:flex flex-row space-x-8">
        {navBarItem.map((item) => (
          <Link className=" hover:text-gold transition-colors" key={item.title} href={item.link}>
            <LinkText className='no-underline color-white'>{item.title}</LinkText>
          </Link>
        ))}
      </Box>
      <Box className="flex flex-row space-x-4">
        <Search className="w-6 h-6 text-gold" />
        <ShoppingBag className="w-6 h-6 text-gold" />
      </Box>
    </Box>
  );
};
