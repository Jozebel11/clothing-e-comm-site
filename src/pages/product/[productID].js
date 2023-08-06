import { useRouter } from 'next/router'
import React from 'react'
import ProductPageProduct from '../../components/ProductPageProduct';
import getServerSideProps  from "../../utils/data";
import NavigationDark from '../../components/NavigationDark'


function ProductScreen({products}) {
    const {query} = useRouter();
    const { productID } = query;
    const product = products.find(x => x.productID == productID)
    console.log(products.find(x => x.productID == productID),'product', productID)
    if(!product){
        return <div>Product Not Found</div>
    }
  return (
    <div style={{minHeight:'100vh'}}>
      <div style={{
        backgroundColor:'white',
        minHeight: '100px',
        
  
      }}></div>
    <NavigationDark />
    
    <ProductPageProduct
          key={product.productID}
          productID={product.productID}
          name={product.name}
          price={product.price}
          description={product.description}
          category={product.category}
        />
       
    </div>
  )
}
export { getServerSideProps };
export default ProductScreen
