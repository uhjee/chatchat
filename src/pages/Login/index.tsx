import { FC, FormEventHandler, useCallback } from 'react';
import { Container, Footer, FormBox, Header, Input } from './style';
import Button from '../../components/Atoms/common/Button';

interface IProps {}

const Login: FC<IProps> = () => {
  const onSubmitForm: FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
    e.preventDefault();
    console.log('lala');
  }, []);

  return (
    <Container>
      <FormBox onSubmit={onSubmitForm}>
        <Header className="mb-8">로그인 부탁드립니다.</Header>
        {/*<div>*/}
        <Input className="mb-3" type="email" />
        <Input className="mb-8" type="password" />
        {/*</div>*/}
        <Button className="mb-10" type="submit">
          로그인
        </Button>
        <Footer>
          아직 회원이 아니신가요?
          <span>회원가입해주세요.</span>
        </Footer>
      </FormBox>
    </Container>
  );
};
export default Login;
