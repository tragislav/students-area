/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../hooks/useAuth';
import { IAuth } from '../../@types/auth';
import schema from './validation';
import { getToken } from '../../api/auth';

import LoginHeader from '../../components/LoginHeader';

import {
  FormBottom,
  FormBottomP,
  FormError,
  FormInput,
  FormTitle,
  FormWrapper,
  LoginContainer,
  LoginForm,
  LoginFormInput,
  LoginFormSubmit,
} from './styled';

type Inputs = {
  username: string;
  password: string;
};

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signIn } = useAuth();
  const [disable, setDisable] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!user) {
      if (localStorage.getItem('user')) {
        const parseUser: IAuth = JSON.parse(localStorage.getItem('user') || '');
        signIn(parseUser, () =>
          navigate(
            // location.state ? location.state?.from :
            '/main',
            {
              replace: true,
            },
          ),
        );
      }
    } else {
      navigate(
        // location.state ? location.state?.from :
        '/main',
        {
          replace: true,
        },
      );
    }
  });

  const getFormData = (object: Record<string, string>) => {
    const formData = new FormData();
    Object.keys(object).forEach((key) => {
      formData.append(key, object[key]);
    });
    return formData;
  };

  const onSubmit: SubmitHandler<Inputs> = (inputs) => {
    setDisable(true);
    getToken(getFormData(inputs))
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        reset();
        signIn(data, () =>
          navigate(`/main`, {
            replace: true,
          }),
        );
      })
      .catch((e) => {
        console.error(e);
        setError(true);
        setDisable(false);
        setTimeout(() => setError(false), 5000);
      });
  };

  const username = register('username');
  const password = register('password');

  return (
    <>
      {/* <LoginHeader /> */}
      <LoginContainer>
        <FormWrapper>
          <FormTitle>Вход в личный кабинет</FormTitle>
          {error ? (
            <FormError>Ошибка авторизации, попробуйте ещё раз</FormError>
          ) : null}
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <LoginFormInput>Имя пользователя:</LoginFormInput>
            <FormInput
              ref={username.ref}
              name={username.name}
              onBlur={username.onBlur}
              onChange={username.onChange}
              type="email"
              id="email"
              placeholder="Введите имя пользователя"
              required
            />
            <LoginFormInput>Пароль:</LoginFormInput>
            <FormInput
              ref={password.ref}
              name={password.name}
              onBlur={password.onBlur}
              onChange={password.onChange}
              type="password"
              placeholder="Введите пароль"
              required
            />
            <LoginFormSubmit type="submit" disabled={disable}>
              Войти
            </LoginFormSubmit>
          </LoginForm>
        </FormWrapper>
      </LoginContainer>
    </>
  );
}

export default Login;
