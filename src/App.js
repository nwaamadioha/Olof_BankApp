import './App.css';
import { BrowserRouter as Router , Routes, Route, Navigate, useLocation} from "react-router-dom";
import Home from './pages';
import LoginPage from "./pages/login";
import DashboardPage from './pages/dashboard';
import AdminPage from "./pages/admin";
import {useContext} from "react";
import { AuthContext } from './context/AuthContext';
import NotFound from './pages/notfound';

function App() {
  const ProtectedRoute = ({children}) =>{
    const {user} = useContext(AuthContext)
    const location = useLocation()
    if(!user){
      return <Navigate to="/login" state={{ from: location }} replace/>
    }
    return children;
  }
  const RestrictedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    if(!user.isAdmin){
      return <Navigate to="/login"  state={{ from: location }} replace/>
    }
    return children;
  }
  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/home" element={<Home />} exact/>
        <Route path="/login" element={<LoginPage />} exact/>
        
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} exact/>   
        <Route path="/admin" element={<RestrictedRoute><AdminPage /></RestrictedRoute>}  />
        
        <Route path="*" element={<NotFound/>} exact/>
      </Routes>  
    </Router> 
  );
}

export default App;
