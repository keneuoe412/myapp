import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupAndLogin from './components/SignupAndLogin';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import UserManagement from './components/UserManagement';
import ProtectedRoute from './components/ProtectedRoute';
import './Style.css';
import { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]); // State for product management

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignupAndLogin isLogin={false} />} />
        <Route path="/signup" element={<SignupAndLogin isLogin={false} />} />
        <Route path="/login" element={<SignupAndLogin isLogin={true} />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard products={products} />} />
          <Route path="/products" element={<ProductManagement setProducts={setProducts} />} />
          <Route path="/users" element={<UserManagement />} />
        </Route>

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </Router>
  );
};

export default App;
