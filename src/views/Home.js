import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Sectionlink from '../components/Sectionlink';
import Sectionproduct from '../components/Sectionproduct';
import News from '../components/News';

function Home() {
  return (
    <div>
      <Hero />
      <Flex align="center" justifyContent="center">
        <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '1440px' }}>
          <Sectionproduct />
          <News />
          <Sectionlink />
        </Box>
      </Flex>
      <Footer />
    </div>
  );
}

export default Home;
