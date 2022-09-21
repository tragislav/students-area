/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const MainHeader = styled.header``;

export const HeaderInner = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #434c63;
`;

export const HeaderInnerTitle = styled.div`
  display: flex;
  padding: 31px 0 31px 60px;
`;

export const HeaderInnerTitleText = styled.h1`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 120%;
  padding-left: 27px;
  text-align: center;
  color: #ffffff;
`;

export const HeaderInnerContent = styled.div`
  display: flex;
  padding: 0 60px 0 0;
  justify-content: space-between;
`;

export const HeaderInnerContentUser = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentUserImage = styled.img``;

export const ContentUserFIO = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  padding: 0 12px;
  color: #ffffff;
`;

export const LogoutBtn = styled.input`
  background: #434c63;
  border: 1.5px solid #ffffff;
  border-radius: 7px;
  height: 42px;
  width: 100px;
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  margin-top: 24px;
`;
