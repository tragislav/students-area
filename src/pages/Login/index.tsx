/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './validation';
import { getToken } from '../../api/auth';
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
  const [disable, setDisable] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
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
        console.log('user');
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        setDisable(false);
        setTimeout(() => setError(false), 5000);
      });
  };

  const username = register('username');
  const password = register('password');

  return (
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
        <FormBottom>
          <FormBottomP>Регистрация</FormBottomP>
          <FormBottomP>Забыли пароль?</FormBottomP>
        </FormBottom>
      </FormWrapper>
    </LoginContainer>
  );
}

export default Login;
