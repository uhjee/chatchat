import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  color: BUTTON_COLOR;
  $full: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: var(${({ color }) => color});
  border: 1px solid #fff;
  border-radius: 4px;
  line-height: 3.5rem;
  width: ${({ $full }) => ($full ? '100%' : '140px')};
`;

enum BUTTON_COLOR {
  PRIMARY = '--primary',
  SECONDARY = '--secondary',
  WHITE = '--white',
}
interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  full?: boolean;
  color?: BUTTON_COLOR;
}

const Button: FC<IProps> = ({ children, onClickHandler, full = false, color = BUTTON_COLOR.PRIMARY, className }) => {
  return (
    <StyledButton className={className} onClick={onClickHandler} color={color} $full={full}>
      {children}
    </StyledButton>
  );
};

export default Button;
