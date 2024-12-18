import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormControl } from '@/components/ui/form-control';

export const Newsletter: React.FC = () => {
  return (
    <Box className="bg-gray-900 py-16 px-4">
      <Box className="max-w-2xl mx-auto text-center">
        <Heading size="lg" className="text-2xl font-bold mb-4 color-white">Join Our Exclusive List</Heading>
        <Text className="mb-8 color-white">Be the first to know about new collections and special offers</Text>
        <FormControl className="flex flex-col md:flex-row gap-4">
          <Input className="flex-grow px-4 py-2 rounded-full bg-black border border-gold focus:outline-none focus:ring-2 focus:ring-gold" >
            <InputField
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full bg-black border border-gold focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </Input>
          <Button className="bg-white text-black px-8 py-2 rounded-full hover:bg-opacity-80 hover:color-white transition-colors ">
            Subscribe
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};