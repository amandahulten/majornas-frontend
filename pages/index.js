import Head from "next/head";
import Contact from "../components/Contact";
import Openings from "../components/Openings";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../components/svgs/Arrow";
import Coffee from "../components/svgs/Coffee";
import getInstaImages from "../queries/getInstaImages";
import Instagram from "../components/Instagram";
import client from "../utils/client";
import { dateDiff } from "../utils/dateDiff";

const Home = ({ feed, data }) => {
  return (
    <div>
      <Head>
        <title>Majornas böcker & kaffe</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="pb-4">
        <h1>
          OBEROENDE BOKHANDEL <br /> MED KAFFEHÄNG
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 lg:grid-rows-3 gap-4 ">
          <div className="relative h-72 md:h-auto md:col-span-4 md:row-span-2 lg:col-span-2">
            <Image
              src="/store.png"
              alt="Bild inne i butiken från ytterdörrens perspektiv"
              fill
              className="object-cover"
            />
          </div>

          <Openings className="md:col-span-3 lg:col-span-1 md:row-start-3 md:col-start-4 lg:col-start-1" />
          <Contact
            data={data.contact}
            className="md:col-span-3 lg:col-span-1 md:row-start-3 md:col-start-1 lg:col-start-2"
          />

          <div className="bg-tumbleweed md:row-start-1 md:col-span-2 md:col-start-5 lg:col-start-3 lg:col-span-1">
            <div className="relative overflow-hidden isolate w-full h-full p-4 pb-0">
              <div className="flex justify-between md:flex-col h-full w-full">
                <p className="text-5xl min-w-fit mb-6 z-10 font-['DM-serif'] text-hembakad max-h-60 whitespace-pre-wrap mix-blend-plus-lighter">
                  {data.offer ? data.offer.body : "Inget erbjudande just nu"}
                </p>
                <p className="font-['DM-serif'] text-hembakad text-4xl mix-blend-plus-lighter">
                  {data.offer.ends &&
                    `${
                      dateDiff(data.offer.ends).includes("sedan")
                        ? "Slutade"
                        : "Slutar"
                    } ${dateDiff(data.offer.ends)}`}
                </p>
              </div>
              <div className="flex justify-center m:w-full absolute bottom-0 -z-10 right-0 md:left-1/2 md:-translate-x-1/2 max-h-full">
                <Coffee width={230} className="fill-hembakad" />
              </div>
            </div>
          </div>

          <div className="bg-temp-ey text-black-coffee lg:flex flex-col justify-between p-4 md:row-start-2 lg:row-start-1 md:col-span-2 md:col-start-5 lg:col-start-4 lg:col-span-1">
            <p className="text-xl font-semibold mb-4">
              Ta ett kik på vad som försiggår i butiken. Vi planerar event
              kontinuerligt!
            </p>
            <div className="flex justify-end gap-3 items-center">
              <Link
                href="/aktuellt"
                className="text-lg underline font-courier-prime"
              >
                Aktuellt
              </Link>
              <Arrow color="#322A2E" />
            </div>
          </div>

          <div className="relative h-72 lg:h-auto md:col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-2">
            <Image
              src="/skylt.png"
              alt="Skylten utanför butiken"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-black-coffee my-4 lg:my-12">
          <div className="md:my-4 lg:my-8 md:flex justify-between items-center">
            <h3 className="text-xl md:text-3xl lg:text-4xl my-4 md:my-0">
              Instagram
            </h3>
            <div className="md:flex justify-end items-center gap-3 hidden ">
              <Link
                href="https://www.instagram.com/majornasbocker/"
                className="text-lg lg:text-2xl underline font-courier-prime"
                target="_blank"
              >
                Följ Oss
              </Link>
              <Arrow color="#322A2E" />
            </div>
          </div>
          <Instagram feed={feed} />
          <div className="flex md:hidden justify-end items-center gap-3 mt-4">
            <Link href="/" className="text-lg underline font-courier-prime">
              Följ Oss
            </Link>
            <Arrow color="#322A2E" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const feed = await getInstaImages();
  const res = await client.fetch(`
  {
    "offer":*[_type == "offer"]{
    _id,
    body,
    ends,
  }[0],
  "contact":*[_type == "siteSettings"]{
    _id,
    address,
    email,
    phone,
  }[0]
}
`);

  return {
    props: {
      feed,
      data: res,
    },
  };
};

export default Home;
