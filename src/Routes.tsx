import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';
import { USER_ROLES } from './utils/enum';
import AuthLoadingScreen from './pages/authLoadingScreen/AuthLoadingScreen';
import Home from './pages/home/HomePage';
import ProtectedRoute from './ProtectedRoutes';
import Logout from './pages/logout/Logout';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Layout from './layout/Layout';
import UserManagement from './pages/userManagement/UserManagement';
import MonitoringLogs from './pages/monitoringLogs/MonitoringLogs';

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
          <Route
            path="user-management"
            element={
              <ProtectedRoute requiredRoles={USER_ROLES.ADMIN}>
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="monitoring-logs"
            element={
              <ProtectedRoute requiredRoles={USER_ROLES.ADMIN}>
                <MonitoringLogs />
              </ProtectedRoute>
            }
          />
        </Route>
      </AppRoutes>
    </BrowserRouter>
  );
};

export default Routes;
