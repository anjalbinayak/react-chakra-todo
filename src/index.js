import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'

if(!localStorage.getItem('tasks')) localStorage.setItem('tasks',JSON.stringify([]));

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);



