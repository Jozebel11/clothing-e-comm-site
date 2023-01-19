import Head from "next/head";
import Header from "../components/Navigation"
import Showroom from "../components/Showroom"

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Clothing E-comm-site</title>
      </Head>
      <Header/>
      <Showroom/>
    </div>
  );
}
