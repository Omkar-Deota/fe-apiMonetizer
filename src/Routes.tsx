import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';
import Home from './pages/home/HomePage';

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<Home />} />
      </AppRoutes>
    </BrowserRouter>
  );
};

export default Routes;
