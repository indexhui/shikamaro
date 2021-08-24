import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Shiromaker from './views/Shiromaker';

import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';

import ScrollToTop from './components/ScrollToTop';
import { ParallaxProvider } from 'react-scroll-parallax';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
  styles: {
    global: {
      'html, body': {
        fontSize: 'sm',
        backgroundColor: 'white',
        color: 'gray.600',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <ParallaxProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shiromaker" component={Shiromaker} />
          </Switch>
        </ParallaxProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
