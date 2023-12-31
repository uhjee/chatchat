import { FC, FormEventHandler, useCallback, useState } from 'react';
import { Container, Footer, FormBox, Header, Input, LabelBar } from '@pages/Login/style';
import useInput from '@hooks/useInput';
import Button from '@atoms/common/Button';
import { Link } from 'react-router-dom';
import { isEmpty, isNil } from 'lodash';
import { PALETTE } from '@styles/GlobalStyles';

interface IProps {}

const Signup: FC<IProps> = () => {
  const [email, onChangeEmailHandler] = useInput('');
  const [password, onChangePasswordHandler] = useInput('');
  const [passwordTwo, onChangePasswordTwoHandler, setPasswordTwo] = useInput('');
  const [isEmptyPassword, setEmptyPassword] = useState<boolean>(true);
  const [validPasswords, setValidPasswords] = useState<'EMPTY' | 'FAIL' | 'SUCCESS'>('EMPTY');

  const checkPasswords = useCallback(() => {
    if (!isEmpty(password) && !isEmpty(passwordTwo) && password === passwordTwo) {
      setValidPasswords('SUCCESS');
    } else {
      setValidPasswords('FAIL');
    }
  }, [password, passwordTwo]);

  const onBlurPassword = useCallback(() => {
    if (isNil(password) || isEmpty(password)) {
      setPasswordTwo('');
      setEmptyPassword(true);
    } else {
      setEmptyPassword(false);
      checkPasswords();
    }
  }, [password, setEmptyPassword, setPasswordTwo, checkPasswords]);

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
        <Header className="mb-8">회원가입</Header>
        <LabelBar className="mb-1">
          <LabelBar.Label htmlFor="email">Email</LabelBar.Label>
        </LabelBar>
        <Input id="email" value={email} onChange={onChangeEmailHandler} className="mb-5" type="email" />
        <div className="flex flex-col mb-8">
          <LabelBar className="mb-1">
            <LabelBar.Label htmlFor="password">Password</LabelBar.Label>
          </LabelBar>
          <Input
            id="password"
            value={password}
            onChange={onChangePasswordHandler}
            onBlur={onBlurPassword}
            type="password"
          />
          {!isEmptyPassword && (
            <>
              <LabelBar className="mt-2 mb-1">
                <LabelBar.Label htmlFor="password">Password를 한 번 더 입력해주세요.</LabelBar.Label>
                {validPasswords === 'SUCCESS' && <LabelBar.Message>✅</LabelBar.Message>}
              </LabelBar>
              <Input
                id="password-two"
                value={passwordTwo}
                onChange={onChangePasswordTwoHandler}
                onBlur={checkPasswords}
                type="password"
              />
            </>
          )}
        </div>

        <Button className="mb-10" type="submit" full>
          Sign Up
        </Button>
        <Footer.Message>
          이미 회원이신가요?
          <Footer.BoldMessage className="ml-4" color={PALETTE.SECONDARY}>
            <Link to="/login">로그인해주세요.</Link>
          </Footer.BoldMessage>
        </Footer.Message>
      </FormBox>
    </Container>
  );
};

export default Signup;
