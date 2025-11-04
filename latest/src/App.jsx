
import MovieCard from './components/MovieCard';
import './App.css'
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Favorite from './pages/Favorites';

function App() {
  const movieNumber = 1;

if 
  return (
      <>
      <main className='main-content'>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" "favorites" element={<Favorites />}/>
      </Routes>
      </main>
       
      </>
  );
}

export default App
