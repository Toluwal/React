import { useState } from "react";
import './counter.css';
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="increment">[+]</button>
      <button onClick={() => setCount(count - 1)} className="decrement">[-1]</button>
      <button onClick={() => setCount(0)} className="reset">[Reset]</button>
    </div>
  );
}

export default Counter;