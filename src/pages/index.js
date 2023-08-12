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
      <div className="border-b-2 mx-8 pb-12">
        <h4 className="uppercase md:text-[70px] text-center font-thin">
          Summer is here
        </h4>
        <p className="uppercase md:text-[30px] text-center font-thin">discover our new collection below</p>
      </div>
      <ProductFeed products={products} key={products.productID} />
      <Footer />
      </div>
      
    </div>
  );
}
export { getServerSideProps };


//"http://fakestoreapi.com/products/category/men's%20clothing"