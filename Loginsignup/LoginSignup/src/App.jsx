import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import './App.css'
import{Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="Login" element={<Login/>}/>
      
      </Routes>
  );
}

export default App;
