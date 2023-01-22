import { BorderAllRounded } from "@mui/icons-material";
import { padding, width } from "@mui/system";
import Head from "next/head";
import Header from "../components/Navigation"
import Showroom from "../components/Showroom"
import Slideshow from "../components/Slideshow"


export default function Home() {
  return (
    <div style={{
      backgroundColor:'#0F172A'
    }}>
      <Head>
        <title>Clothing E-comm-site</title>
      </Head>
      <Header/>
      <Showroom/>
      <main style={{
        contain:'content',
        display:'flex',
        marginTop:'100px',
        justifyContent:'center',
        backgroundColor:'#1E1E1E',
        width:'40%',
        minWidth:'fit-content',
        padding:'20px',
        borderRadius:'5px',
        marginLeft:'20px',
        marginRight:'20px'
        
        
      }}>
      <Slideshow style={{
        margin:''
      }}/>
      </main>
      
    </div>
  );
}
