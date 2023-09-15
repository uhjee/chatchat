import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
  
  body {
    font-family: 'Pretendard-Regular', 'Apple SD Gothic Neo', 'sans-serif';
    line-height: 1.4;
    font-weight: 400;
  }

  h1, h2, h3, h4 {
    font-weight: 600;
  }
`;
