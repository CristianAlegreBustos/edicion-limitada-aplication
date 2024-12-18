import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export const Footer: React.FC = () => {
  return (
    <Box  className="bg-black text-white py-8 px-4 border-t border-gold">
      <Box className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <Box>
          <Heading size="md" className="text-gold font-bold mb-4">About Us</Heading>
          <Text className="text-sm color-white">EDICIÓN LIMITADA offers exclusive, limited-edition luxury items for the discerning collector.</Text>
        </Box>
        <Box>
          <Heading size="md" className="text-gold font-bold mb-4">Quick Links</Heading>
          <ul className="space-y-2 text-sm">
            {['Terms of Service', 'Privacy Policy', 'Shipping Information', 'Returns & Exchanges'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-gold transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <Heading size="md" className="text-gold font-bold mb-4">Contact Us</Heading>
          <Text className="text-sm mb-2 color-white">Email: info@edicionlimitada.com</Text>
          <Text className="text-sm mb-2 color-white">Phone: +54 9 3425052895</Text>
        </Box>
      </Box>
      <Text className="mt-8 text-center text-sm">&copy; 2023 EDICIÓN LIMITADA. All rights reserved.</Text>
    </Box>
  );
};
