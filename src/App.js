import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './styles/global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyled />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
