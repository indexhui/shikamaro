import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  // theme,
} from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sectionlink from './components/Sectionlink';
import Sectionproduct from './components/Sectionproduct';
import News from './components/News';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  styles: {
    global: {
      "html, body": {
        fontSize: "sm",
        backgroundColor: "white",
        color: "gray.600",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
      },
    },
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <Header />
        <Hero />
        <Flex align="center" justifyContent="center">
          <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "1440px" }}>
            <Sectionproduct />
            <News />
            <Sectionlink />
          </Box>
        </Flex>
        <Footer />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default App;
