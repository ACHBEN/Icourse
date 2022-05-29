import logo from './logo.svg';
import './App.css';
import Container from './components/container/Container';
import Login from './pages/Login';
import Signup from './pages/Signup'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
