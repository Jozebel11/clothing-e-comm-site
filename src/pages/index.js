import { BorderAllRounded } from "@mui/icons-material";
import { padding, width } from "@mui/system";
import Head from "next/head";
import Header from "../components/Navigation"
import ProductFeed from "../components/ProductFeed";
import Showroom from "../components/Showroom"
import Slideshow from "../components/Slideshow"
import Footer from "../components/Footer"
import getServerSideProps from "../utils/data";



export default function Home({products}) {

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
      
      <ProductFeed products={products} key={products.id} />
      <Footer />
      
    </div>
  );
}
export { getServerSideProps };


//"http://fakestoreapi.com/products/category/men's%20clothing"