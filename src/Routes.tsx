import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';
import AuthLoadingScreen from './pages/authLoadingScreen/AuthLoadingScreen';
import Home from './pages/home/HomePage';
import ProtectedRoute from './ProtectedRoutes';
import Logout from './pages/logout/Logout';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import { USER_ROLES } from './utils/enum';
import Layout from './layout/Layout';

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<AuthLoadingScreen />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            path="admin-dashboard"
            element={
              <ProtectedRoute requiredRoles={USER_ROLES.ADMIN}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </AppRoutes>
    </BrowserRouter>
  );
};

export default Routes;
