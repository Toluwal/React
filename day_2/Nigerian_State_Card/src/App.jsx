import StateCard from './StateCard';
import './App.css'

function App() {
 
  return (
    <div className='app'>
      <h1>Nigerian State Card</h1>
      <div className='state-grid'>
        <StateCard
        state="Ogun State"
        capital = "Abeokuta"
        region = "West"
        population = "5,945,275"
        />
        <StateCard
        state="Imo"
        capital = "Owerri"
        region = "East"
        population = "5,167,722"
        />
        <StateCard
        state="Bayelsa"
        capital = "Yenagoa"
        region = "South"
        population = "2,394,725"
        />
        <StateCard
        state="Kaduna"
        capital = "Kaduna"
        region = "North"
        population = "8,324,285"
        />
      </div>

    </div>
  );
}

export default App
