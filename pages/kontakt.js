import Image from "next/image";
import Head from "next/head";
import Openings from "../components/Openings";
import Contact from "../components/Contact";
import Link from "next/link";
import client from "../utils/client";

const Kontakt = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Kontakt</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="pb-12 max-w-screen-xl mx-auto">
        <h1>KONTAKT</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-8 gap-4">
          <Openings className="md:row-start-1 md:row-span-3" />

          <div className="relative h-72 md:h-auto md:col-span-2 md:row-span-6">
            <Image
              src="/contactbooks.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <Contact
            className="md:row-start-8 md:col-start-2 md:col-span-2"
            styling="md:flex justify-between"
            display="md:hidden"
            data={data}
          />

          <div className="w-full h-80 bg-black md:row-start-4 md:row-span-4 relative">
            <Link
              href="https://www.google.se/maps/place/Allm%C3%A4nna+v%C3%A4gen+22,+414+60+G%C3%B6teborg/@57.697442,11.9268178,16z/data=!4m5!3m4!1s0x464ff3484c99eba3:0x7fa4782120b55e0!8m2!3d57.696988!4d11.9304078?hl=sv"
              target="_blank"
            >
              <Image
                src="/google-maps.png"
                alt="Markör placerad på aktuell adress för bokhandeln"
                fill
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await client.fetch(`
  *[_type == "siteSettings"]{
    _id,
    address,
    email,
    phone,
  }[0]
  `);

  return {
    props: {
      data: res,
    },
  };
};

export default Kontakt;
