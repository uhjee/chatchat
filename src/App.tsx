import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyles from '@styles/GlobalStyles';
import GlobalFonts from '@styles/GlobalFonts';
import loadable from '@loadable/component';

const Login = loadable(() => import('@pages/Login'));
const Signup = loadable(() => import('@pages/Signup'));

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
