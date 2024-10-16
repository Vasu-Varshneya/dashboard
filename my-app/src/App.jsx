import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLanding from './components/Landing';
import Signup from './components/Signup';
import Login from './components/login'
import Dashboard from './components/dashboard';
import Mydashboard from './components/mydashboard';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/Protected';
function App() {
  return (
    <AuthProvider>
      <Router> {/* Wrap your entire app inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<DashboardLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mydashboard" element={<Mydashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

