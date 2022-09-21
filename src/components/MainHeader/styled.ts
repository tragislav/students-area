/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const Header = styled.header``;

export const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 24%;
  max-width: 260px;
  background: #fafafa;
  padding: 50px 110px 0 80px;
`;

export const HeaderLogoTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #434c63;
  max-width: 182px;
`;

export const HeaderContent = styled.div`
  width: 76%;
  max-width: 1470px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const HeaderSearch = styled.input`
  width: 28.5%;
  max-width: 420px;
  max-height: 53px;
  margin: 0 0 0 50px;
  border: 2px solid #f5f5f5;
  border-radius: 7px;
  padding-left: 30px;

  ::placeholder {
    color: #cacaca;
  }

  :active {
    border: 2px solid #3f3f3f;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 55px;
  width: 22%;
  max-width: 327px;
`;

export const HeaderInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 61%;
  max-width: 194px;
`;

export const HeaderInfoText = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #434c63;
  padding-top: 6px;

  :nth-child(2) {
    font-size: 13px;
    line-height: 15px;
    color: #b8b8b8;
  }
`;
