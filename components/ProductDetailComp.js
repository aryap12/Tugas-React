import React, { useCallback, useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { productList_Obj } from '../utils/constans';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

const ProductDetailComp = () => {
  const params = useParams();
  const Navigate = useNavigate();
  const [productDetailData, setProductDetailData] = useState([
    {
      title: '',
      merek: null,
      harga : null,
    },
  ]);
  const fetchData = useCallback(() => {
    const data = productList_Obj.filter(
      (product) => product.id === Number(params.productId)
      );
      
      setProductDetailData(data);
    },[params.productId]);

   useEffect(()=>{
     fetchData();
   },);
   const Back =()=>{
    Navigate('/product')
  }
  return (
    <React.Fragment>
      <div>
        <p>Name : {productDetailData[0].title}</p>
        <p>Brand: {productDetailData[0].Merek}</p>
        <p>Price: {productDetailData[0].Harga}</p>
        <button onClick={Back}>Back</button>
        <ErrorBoundary>
          <Counter/>
        </ErrorBoundary>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailComp;
