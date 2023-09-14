import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: blue;
  }

  ${reset}
`;
