import { BorderAllRounded } from "@mui/icons-material";
import { padding, width } from "@mui/system";
import Head from "next/head";
import Header from "../components/Navigation"
import ProductFeed from "../components/ProductFeed";
import Slideshow from "../components/Slideshow"
import Footer from "../components/Footer"
import getServerSideProps from "../utils/data";
import { useRouter } from "next/router"
import { Link, animateScroll as scroll } from "react-scroll";



export default function Home({products}) {
  const router = useRouter()

  return (
    <div className="relative" style={{
      backgroundColor:'white',
      minHeight: '100vh'
      

    }}>
      <Head>
        <title>Caro</title>
      </Head>
      <Header/>
      
      <Slideshow />
      <div className="">
      <div>
        <h4>
          
        </h4>
      </div>
      <ProductFeed products={products} key={products.productID} />
      <Footer />
      </div>
      
    </div>
  );
}
export { getServerSideProps };


//"http://fakestoreapi.com/products/category/men's%20clothing"