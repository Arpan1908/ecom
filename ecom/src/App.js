
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Shop from "./pages/Shop"
import Register from "./pages/Register"
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
       
        </Routes>
        
      </div>
      
    </Router>
    
  );
}

export default App;
