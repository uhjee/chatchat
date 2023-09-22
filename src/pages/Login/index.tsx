import { FC, FormEventHandler, useCallback } from 'react';
import { Container, Footer, FormBox, Header, Input, LabelBar } from '@pages/Login/style';
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
        <LabelBar className="mb-1">
          <LabelBar.Label htmlFor="email">Email</LabelBar.Label>
          <LabelBar.Message className="ml-2">df??</LabelBar.Message>
        </LabelBar>
        <Input id="email" value={email} onChange={onChangeEmailHandler} className="mb-5" type="email" />
        <LabelBar className="mb-1">
          <LabelBar.Label htmlFor="password">Password</LabelBar.Label>
        </LabelBar>
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
