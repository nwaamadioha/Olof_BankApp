import './App.css';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from './pages';
import LoginPage from "./pages/login";
import DashboardPage from './pages/dashboard';


function App() {
  
  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/home" element={<Home />} exact/>
        <Route path="/login" element={<LoginPage />} exact/>
        <Route path="/dashboard" element={<DashboardPage />} exact/>     
      </Routes>  
    </Router> 
  );
}

export default App;
