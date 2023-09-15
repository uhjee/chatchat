import React from 'react';
import './App.css';
import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFonts from './styles/GlobalFonts';

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <Login />
    </>
  );
}

export default App;
