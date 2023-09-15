import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`


  ${reset}

  :root {
    --primary: #f1404b;
    --secondary: #03a6ff;
    --sub-0: #dddfe6;
    --sub-1: #f4f5f9;
    --background-color: #252c41;
    --white: #fff;
  }

  
  body {
    background-color: var(--background-color);
    color: var(--white);
  }
  
  input[type='text'], input[type='email'], input[type='password'], textarea {
    color: var(--background-color);
  }

`;
