import ProductCard from '../ProductCard'
import './App.css'

function App() {
  
  return (
      <div className='app'>
        <h1>Nigerian E commerce Site Products</h1>
        <div className='site-grid'>
          <ProductCard
          name="Coca-cola"
          price="₦700"
          image="https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=465"
          instock={true}
          />
          <ProductCard
          name="Monster"
          price="₦1500"
          image="https://images.unsplash.com/photo-1622543925917-763c34d1a86e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
          instock={true}
          />
          <ProductCard
          name="Jack-Daniels"
          price="₦25,000"
          image="https://images.unsplash.com/photo-1521201795527-a80e2debb4c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
          instock={false}
          />
        </div>
      </div>
      
  );
}

export default App
