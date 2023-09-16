import { FC, FormEventHandler, useCallback } from 'react';
import { Container, Footer, FormBox, Header, Input, Label } from '@pages/Login/style';
import Button from '@atoms/common/Button';
import useInput from '@hooks/useInput';
import { Link } from 'react-router-dom';

interface IProps {}

const Login: FC<IProps> = () => {
  const [email, onChangeEmailHandler] = useInput('');
  const [password, onChangePasswordHandler] = useInput('');

  const onSubmitForm: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      console.log({ email, password });
    },
    [email, password],
  );

  return (
    <Container>
      <FormBox onSubmit={onSubmitForm}>
        <Header className="mb-8">로그인 부탁드립니다.</Header>
        <Label htmlFor="email" className="mb-1">
          Email
        </Label>
        <Input id="email" value={email} onChange={onChangeEmailHandler} className="mb-5" type="email" />
        <Label htmlFor="password" className="mb-1">
          Password
        </Label>
        <Input id="password" value={password} onChange={onChangePasswordHandler} className="mb-8" type="password" />
        <Button className="mb-10" type="submit" full>
          Sign In
        </Button>
        <Footer.Message>
          아직 회원이 아니신가요?
          <Footer.BoldMessage className="ml-4">
            <Link to="/signup">회원가입해주세요.</Link>
          </Footer.BoldMessage>
        </Footer.Message>
      </FormBox>
    </Container>
  );
};
export default Login;
