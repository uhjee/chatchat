import styled from 'styled-components';
import { PALETTE, PalltteOption } from '@styles/GlobalStyles';

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
  padding: 18px 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  font-size: 1.6rem;
`;

export const Label = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Label: styled.label`
    font-size: 1.2rem;
    color: var(--sub-0);
  `,
  Message: styled.span<PalltteOption>`
    font-size: 1rem;
    color: var(${({ color }) => (color ? color : PALETTE.WHITE)});
  `,
};

export const LabelBar = Object.assign(Label.Wrapper, { Label: Label.Label, Message: Label.Message });

export const Input = styled.input`
  outline: 2px solid var(--sub-1);
  border-radius: 4px;
  line-height: 2.4rem;
  padding: 0 12px;

  &:focus {
    outline: 4px solid var(--primary);
  }
`;

export const Footer = {
  Message: styled.div`
    color: var(${PALETTE.SUB_0});
    font-size: 1.3rem;
    text-align: center;
  `,
  BoldMessage: styled.span<PalltteOption>`
    color: var(${({ color }) => (color ? color : PALETTE.PRIMARY)});
    cursor: pointer;
  `,
};
