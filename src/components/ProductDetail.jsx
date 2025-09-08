import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    const{id}=useParams();
    const [product, setProduct] = useState(null);

    useEffect(()=>{
     fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

    },[id])
    if (!product) return <p>Caricamento...</p>


  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
