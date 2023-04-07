import { BorderAllRounded } from "@mui/icons-material";
import { padding, width } from "@mui/system";
import Head from "next/head";
import Header from "../components/Navigation"
import ProductFeed from "../components/ProductFeed";
import Showroom from "../components/Showroom"
import Slideshow from "../components/Slideshow"
import Footer from "../components/Footer"
import getServerSideProps from "../utils/data";
import { useRouter } from "next/router"



export default function Home({products}) {
  const router = useRouter()

  return (
    <div style={{
      backgroundColor:'#0F172A',
      minHeight: '100vh'
      

    }}>
      <Head>
        <title>Clothing E-comm-site</title>
      </Head>
      <Header/>
      <div style={{ backgroundColor:'#0F172A', minHeight:'100px'}}></div>
      <Showroom/>
      <div className="p-5">
        <h2 className="text-gray-300">Welcome to CARO</h2>
        <p className="text-gray-300">For more details about this project please click <button className="hover:underline" onClick={() => router.push('/about')}>here</button>.</p>

      </div>
      <ProductFeed products={products} key={products.id} />
      <Footer />
      
    </div>
  );
}
export { getServerSideProps };


//"http://fakestoreapi.com/products/category/men's%20clothing"