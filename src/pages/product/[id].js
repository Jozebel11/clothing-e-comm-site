import { useRouter } from 'next/router'
import React from 'react'
import ProductPageProduct from '../../components/ProductPageProduct';
import getServerSideProps  from "../../utils/data";
import Navigation from '../../components/Navigation'


function ProductScreen({products}) {
    const {query} = useRouter();
    const { id } = query;
    const product = products.find(x => x.id == id)
    console.log(products.find(x => x.id == id),'product', id)
    if(!product){
        return <div>Product Not Found</div>
    }
  return (
    <div style={{minHeight:'100vh'}}>
      <div style={{
        backgroundColor:'#0F172A',
        minHeight: '100px',
        
  
      }}></div>
    <Navigation/>
    
    <ProductPageProduct
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
       
    </div>
  )
}
export { getServerSideProps };
export default ProductScreen
