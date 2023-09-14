import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string;
}

const Button: FC<IProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
