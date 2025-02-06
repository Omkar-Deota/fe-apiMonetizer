import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';
import AuthLoadingScreen from './pages/authLoadingScreen/AuthLoadingScreen';
// import { AdminDashboard } from '../pages/dashboard/AdminDashboard';
// import { ApiKeyManagement } from '../pages/apiKeyManagement/ApiKeyManagement';
// import { UserManagement } from '../pages/userManagement/UserManagement';
// import { UserDashboard } from '../pages/dashboard/UserDashboard';
import Home from './pages/home/HomePage';
import ProtectedRoute from './ProtectedRoutes';
import Logout from './pages/logout/Logout';
import Layout from './pages/layout/Layout';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import { USER_ROLES } from './utils/enum';
// import NotFound from '../pages/notFound/NotFound';
// import { USER_ROLES } from './utils/enum';

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
          {/* <Route
            path="user-dashboard"
            element={
              <ProtectedRoute requiredRoles={[USER_ROLES.USER]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="admin-dashboard"
            element={
              <ProtectedRoute requiredRoles={[USER_ROLES.ADMIN]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </AppRoutes>
    </BrowserRouter>
  );
};

export default Routes;
