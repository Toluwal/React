import ProductCard from '../ProductCard'
import './App.css'

function App() {
  
  return (
      <div className='app'>
        <h1>Nigerian E commerce Site Products</h1>
        <div className='site-grid'>
          <ProductCard
          name="Coca-cola"
          price="700"
          image=""
          instock={true}
          />
          <ProductCard
          name="Five-Alive Juice"
          price="1500"
          image=""
          instock={true}
          />
          <ProductCard
          name="Jack-Daniels"
          price="25000"
          image=""
          instock={false}
          />
        </div>
      </div>
      
  );
}

export default App
