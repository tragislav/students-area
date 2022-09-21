import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as AttendanceIcon } from '../../assets/images/menu-attendance-icon.svg';
import { ReactComponent as ScheduleIcon } from '../../assets/images/menu-schedule-icon.svg';
import { ReactComponent as StatisticIcon } from '../../assets/images/menu-statistic-icon.svg';
import { ReactComponent as ProfileIcon } from '../../assets/images/menu-profile-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/menu-logout-icon.svg';
import {
  MenuContent,
  MenuNavigation,
  MenuItem,
  MenuItemText,
  MenuElse,
  ExitButton,
} from './styled';
import { useAuth } from '../../hooks/useAuth';

function Menu() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const logout = () => {
    localStorage.removeItem('user');
    signOut(() => navigate('/', { replace: true }));
  };

  return (
    <MenuContent>
      <MenuNavigation>
        <Link to="/main">
          <MenuItem>
            <ProfileIcon />
            <MenuItemText>Мой профиль</MenuItemText>
          </MenuItem>
        </Link>
        <Link to="/schedule">
          <MenuItem>
            <ScheduleIcon />
            <MenuItemText>Расписание</MenuItemText>
          </MenuItem>
        </Link>
        <Link to="/statistic">
          <MenuItem>
            <StatisticIcon />
            <MenuItemText>Статистика</MenuItemText>
          </MenuItem>
        </Link>
        <Link to="/attendance">
          <MenuItem>
            <AttendanceIcon />
            <MenuItemText>Посещения занятий</MenuItemText>
          </MenuItem>
        </Link>
      </MenuNavigation>
      <MenuElse>
        <ExitButton onClick={logout}>
          <MenuItem>
            <LogoutIcon />
            <MenuItemText>Выйти из профиля</MenuItemText>
          </MenuItem>
        </ExitButton>
      </MenuElse>
    </MenuContent>
  );
}

export default Menu;
