import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function MainHeader() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const logout = () => {
    localStorage.removeItem('user');
    signOut(() => navigate('/', { replace: true }));
  };

  return (
    <div>
      <h2>Main Header</h2>
      <input type="submit" value="Выйти" onClick={logout} />
    </div>
  );
}

export default MainHeader;
