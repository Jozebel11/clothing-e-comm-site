import { BorderAllRounded } from "@mui/icons-material";
import { padding, width } from "@mui/system";
import Head from "next/head";
import Header from "../components/Navigation"
import ProductFeed from "../components/ProductFeed";
import Showroom from "../components/Showroom"
import Slideshow from "../components/Slideshow"
import Footer from "../components/Footer"



export default function Home({ products }) {

  return (
    <div style={{
      backgroundColor:'#0F172A',
      

    }}>
      <Head>
        <title>Clothing E-comm-site</title>
      </Head>
      <Header/>
      <div style={{ backgroundColor:'#0F172A', minHeight:'100px'}}></div>
      <Showroom/>
      
      <ProductFeed products={products}/>
      <Footer />
      
    </div>
  );
}

export async function getServerSideProps(context){
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
    }
  }
  

}
//"http://fakestoreapi.com/products/category/men's%20clothing"