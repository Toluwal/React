import RandomUser from './RandomUser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <RandomUser/>
      </div>
      
  );
}

export default App;
