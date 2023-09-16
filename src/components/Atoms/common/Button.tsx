import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { PALETTE } from '@styles/GlobalStyles';

interface StyledButtonProps {
  color: PALETTE;
  $full: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: var(${({ color }) => color});
  border-radius: 4px;
  line-height: 3.5rem;
  width: ${({ $full }) => ($full ? '100%' : '140px')};
`;

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  full?: boolean;
  color?: PALETTE;
}

const Button: FC<IProps> = ({ children, onClickHandler, full = false, color = PALETTE.PRIMARY, className }) => {
  return (
    <StyledButton className={className} onClick={onClickHandler} color={color} $full={full}>
      {children}
    </StyledButton>
  );
};

export default React.memo(Button);
