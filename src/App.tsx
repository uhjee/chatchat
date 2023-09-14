import React from 'react';
import './App.css';
import Login from './pages/Login';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Login></Login>
    </div>
  );
}

export default App;
