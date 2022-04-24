import React from 'react';
import { Outlet } from 'react-router-dom';
import { productList_Obj } from '../utils/constans';
import ProductListComp from '../components/ProductListComp';
import { Navbar_Obj } from '../utils/constans';
import Navbar from '../components/home';
const ProductList = () => {
  const products = productList_Obj
  const navbar = Navbar_Obj;
  return (
    <div>
      {navbar.map((nav)=>{
          return  <Navbar key={nav.id} nav={nav}/>
        })}
        <br/>
        <br/>
        <br/>
      <h1 style={{margin : '1rem'}}>Product List</h1>
      <div>
      {products.map((product) => {
        return <ProductListComp key={product.id} product={product} />;
      })}
    </div>
      <Outlet />
      
    </div>
  );
};

export default ProductList;
