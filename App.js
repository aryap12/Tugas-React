import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePaging from './pages/Home';
import ProductDetailComp from './components/ProductDetailComp';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import About from './pages/about';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePaging/>} />
      <Route path='/product' element={<ProductList/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product/:productId' element={<ProductDetailComp/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
