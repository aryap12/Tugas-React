import React from 'react';
import { useNavigate} from 'react-router-dom';
const ProductListComp = ({ product }) => {
  console.log(product.id);
  const navigate = useNavigate();

  // /product/:id
  const productDetailHandler = () => {
    let id = product.id.toString();
    navigate(id)
  };

  return (
    <React.Fragment>
    <div style={{ padding: '1rem' }}>
      <h4>{product.title}</h4>
      <button onClick={productDetailHandler}>Detail</button>
    </div>
    </React.Fragment>
  );
};

export default ProductListComp;
