import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/HOCs/AuthProvider';
import RequireAuth from './components/HOCs/RequireAuth';
import Layout from './components/Layout';
import Login from './pages/Login';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route
              path="main"
              element={
                <RequireAuth>
                  <MainPage />
                </RequireAuth>
              }
            />
            <Route
              path="add"
              element={
                <RequireAuth>
                  <div>add</div>
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
