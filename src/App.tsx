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
              path="schedule"
              element={
                <RequireAuth>
                  <div>Schedule</div>
                </RequireAuth>
              }
            />
            <Route
              path="statistic"
              element={
                <RequireAuth>
                  <div>Statistic</div>
                </RequireAuth>
              }
            />
            <Route
              path="attendance"
              element={
                <RequireAuth>
                  <div>Attendance</div>
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
