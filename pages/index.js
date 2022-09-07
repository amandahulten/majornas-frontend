import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <Nav />
        <title>Majornas böcker & kaffe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>firstpage</h1>
    </div>
  );
}
