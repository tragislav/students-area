import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import userPhoto from '../../assets/images/user-photo.svg';
import {
  MainHeader,
  HeaderInner,
  HeaderInnerTitle,
  HeaderInnerTitleText,
  HeaderInnerContent,
  HeaderInnerContentUser,
  ContentUserImage,
  LogoutBtn,
  ContentUserFIO,
} from './styled';

function Header() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const logout = () => {
    localStorage.removeItem('user');
    signOut(() => navigate('/', { replace: true }));
  };

  return (
    <MainHeader>
      <HeaderInner>
        <HeaderInnerTitle>
          <Link to="/main">
            <HeaderInnerTitleText>
              Личный кабинет студента УО &#171;ВГТУ&#187;
            </HeaderInnerTitleText>
          </Link>
        </HeaderInnerTitle>
        {user && (
          <HeaderInnerContent>
            <HeaderInnerContentUser>
              <ContentUserImage src={userPhoto} alt={user.fio} />
              <ContentUserFIO>{user.fio}</ContentUserFIO>
            </HeaderInnerContentUser>
            <LogoutBtn type="submit" value="Выйти" onClick={logout} />
          </HeaderInnerContent>
        )}
      </HeaderInner>
    </MainHeader>
  );
}

export default Header;
