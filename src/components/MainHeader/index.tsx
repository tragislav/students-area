/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { ReactComponent as LogoIcon } from '../../assets/images/vstu-logo.svg';
import { ReactComponent as UserMiniIcon } from '../../assets/images/user-photo.svg';
import { ReactComponent as EyeIcon } from '../../assets/images/eye-icon.svg';
import { ReactComponent as NotificationIcon } from '../../assets/images/notification-icon.svg';

import {
  Header,
  HeaderContent,
  HeaderInfo,
  HeaderInfoContent,
  HeaderInfoText,
  HeaderInner,
  HeaderLogo,
  HeaderLogoTitle,
  HeaderSearch,
} from './styled';

function MainHeader() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const logout = () => {
    localStorage.removeItem('user');
    signOut(() => navigate('/', { replace: true }));
  };

  return (
    <Header>
      <HeaderInner>
        <HeaderLogo>
          <LogoIcon />
          <HeaderLogoTitle>Личный кабинет студента УО «ВГТУ»</HeaderLogoTitle>
        </HeaderLogo>
        <HeaderContent>
          <HeaderSearch type="text" placeholder="Поиск по сайту" />
          {/* <input type="submit" value="Выйти" onClick={logout} /> */}

          <HeaderInfo>
            <EyeIcon style={{ paddingTop: '19px' }} />
            <NotificationIcon style={{ paddingTop: '16px' }} />
            <HeaderInfoContent>
              <UserMiniIcon />
              <div>
                <HeaderInfoText>Абазовская Н.К.</HeaderInfoText>
                <HeaderInfoText>abazovskaya@mail.ru</HeaderInfoText>
              </div>
            </HeaderInfoContent>
          </HeaderInfo>
        </HeaderContent>
      </HeaderInner>
    </Header>
  );
}

export default MainHeader;
