import styled from 'styled-components';

export const LoginContainer = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #9a9c9c;
  width: 100%;
`;

export const FormWrapper = styled.div`
  width: 465px;
  text-align: center;
  margin: 180px auto 0;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  box-shadow: 2px 8px 15px rgb(201 201 201 10%);
  border-radius: 10px;
  position: relative;
`;

export const FormTitle = styled.h3`
  padding-top: 50px;
  font-weight: 500;
  font-size: 23px;
  line-height: 120%;
  color: #434c63;
`;

export const FormError = styled.p`
  color: red;
  padding-top: 10px;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const LoginForm = styled.form`
  text-align: left;
  padding: 50px 50px 55px;
`;

export const LoginFormInput = styled.p`
  padding-left: 25px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 51px;
  margin-top: 15px;
  margin-bottom: 30px;
  padding-left: 25px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  box-shadow: 2px 8px 15px rgb(201 201 201 10%);
  border-radius: 7px;
`;

export const LoginFormSubmit = styled.button`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  background: #434c63;
  box-shadow: 2px 8px 15px rgb(201 201 201 10%);
  border: transparent;
  border-radius: 7px;
  width: 100%;
  height: 52px;
  color: #ffffff;
`;

export const FormBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const FormBottomP = styled.p`
  font-weight: 500;
  cursor: pointer;
  border-bottom: 1px solid #c1c1c1;
  transition: 0.5s all;

  &:hover {
    color: #434c63;
    border-bottom: 1px solid #434c63;
  }
`;
