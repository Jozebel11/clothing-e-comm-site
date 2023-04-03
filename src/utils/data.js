import { getSession } from "next-auth/react";

export async function getServerSideProps(context){
    const session = await getSession(context);
    const data = await Promise.all([
     await fetch("http://fakestoreapi.com/products/category/men's%20clothing"),
     await fetch("http://fakestoreapi.com/products/category/women's%20clothing"),
     await fetch("http://fakestoreapi.com/products/category/jewelery")
    ]).then((res) => Promise.all(res.map(function (res) {
          return res.json();
    }))).then(function (data) {
      // Log the data to the console
      // You would do something with both sets of data here
      const product = data;
      return product;
    }).catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });
    const products = JSON.parse(JSON.stringify(data.reduce((a,b) => a.concat(b))))
  
    return {
      props: {
        products,
        session,
      }
    }
    
  
  }
export default getServerSideProps;