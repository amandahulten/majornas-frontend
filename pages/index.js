import Head from "next/head";
import EventBlock from "../components/aktuellt/EventBlock";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Majornas böcker & kaffe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl">firstpage</h1>
      <EventBlock />
    </div>
  );
};

export default Home;
