import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.4rem;
`;

export const FormBox = styled.form`
  box-sizing: border-box;
  width: 600px;
  height: 400px;
  padding: 18px 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  font-size: 1.6rem;
`;

export const Input = styled.input`
  outline: 2px solid #888;
  border-radius: 4px;
  line-height: 2.2rem;
  padding: 0 8px;

  &:focus {
    outline: 2px solid var(--primary-color);
  }
`;

export const Footer = styled.div`
  font-size: 1.2rem;
`;
