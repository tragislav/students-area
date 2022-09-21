/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MenuContent = styled.div`
  width: 100%;
  max-width: 450px;
  height: 77vh;
  background: #fafafa;
  padding-top: 105px;
`;

export const MenuNavigation = styled.div`
  margin: 5px 50px;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 30px;
  color: #8c8c8c;
`;
// TODO: FOR MenuItem
// background: #434c63;
// box-shadow: 0px 17px 15px -11px rgba(67, 76, 99, 0.2);
// border-radius: 7px;

export const MenuItemText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  padding-left: 20px;
`;

export const MenuElse = styled.div`
  margin: 20px 50px;
  border-top: 2px solid #f0f0f0;
  padding-top: 20px;
`;

export const ExitButton = styled.button`
  border: none;
  background: inherit;
  padding: 0;
`;
