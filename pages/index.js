import Head from "next/head";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Majornas böcker & kaffe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl">firstpage</h1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
