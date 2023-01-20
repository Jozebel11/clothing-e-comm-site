import { padding, width } from "@mui/system";
import Head from "next/head";
import Header from "../components/Navigation"
import Showroom from "../components/Showroom"
import Slideshow from "../components/Slideshow"


export default function Home() {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Clothing E-comm-site</title>
      </Head>
      <Header/>
      <Showroom/>
      <main className="bg-slate-900" style={{
        contain:'content',
        display:'flex',
        padding:'60px',
        maxHeight:'100px'
      }}>
      <Slideshow className="bg-slate-900"/>
      </main>
      
    </div>
  );
}
