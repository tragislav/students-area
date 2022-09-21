import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginHeader from '../LoginHeader';
import MainHeader from '../MainHeader';
import Menu from '../Menu';
import MainLayoutContent from './styled';

function Layout() {
  const { user } = useAuth();

  return user ? (
    <>
      <MainHeader />
      <MainLayoutContent>
        <Menu />
        <Outlet />
      </MainLayoutContent>
    </>
  ) : (
    <>
      <LoginHeader />
      <Outlet />
    </>
  );
}

export default Layout;
