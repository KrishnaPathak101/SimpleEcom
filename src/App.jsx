import { useState } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import Home from './Pages/Home';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      
      <Categories/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
      <Route path='/products/:productid' element={<ProductPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
