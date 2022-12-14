import Head from "next/head";
import Contact from "../components/Contact";
import Openings from "../components/Openings";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../components/svgs/Arrow";
import Coffee from "../components/svgs/Coffee";
import getInstaImages from "../queries/getInstaImages";
import Instagram from "../components/Instagram";

const Home = ({ feed }) => {
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
              layout="fill"
              objectFit="cover"
            />
          </div>

          <Openings className="md:col-span-3 lg:col-span-1 md:row-start-3 md:col-start-4 lg:col-start-1" />
          <Contact className="md:col-span-3 lg:col-span-1 md:row-start-3 md:col-start-1 lg:col-start-2" />

          <div className="bg-tumbleweed p-4 pb-0 md:row-start-1 md:col-span-2 md:col-start-5 lg:col-start-3 lg:col-span-1 flex flex-col justify-between">
            <p className="text-5xl mb-6 font-['DM-serif'] text-[#4E4247] max-h-60 md:hidden lg:block lg:text-4xl xl:hidden">
              POCKET + <br /> KAFFE = <br /> 100 kr
            </p>

            <p className="hidden md:block lg:hidden text-5xl md:text-3xl mb-5 font-['DM-serif'] text-[#4E4247] max-h-60">
              POCKET + <br /> KAFFE = 100 kr
            </p>

            <p className="hidden xl:block text-4xl mb-5 font-['DM-serif'] text-[#4E4247]">
              POCKET + KAFFE <br /> = 100 kr
            </p>

            <div className="flex justify-center">
              <Coffee width="230" />
            </div>
          </div>

          <div className="bg-temp-ey text-black-coffee lg:flex flex-col justify-between p-4 md:row-start-2 lg:row-start-1 md:col-span-2 md:col-start-5 lg:col-start-4 lg:col-span-1">
            <p className="text-xl font-semibold mb-4">
              Ta ett kik på vad som försiggår i butiken. Vi planerar event
              kontinuerligt!
            </p>
            <div className="flex justify-end gap-3 items-center">
              <Link href="/aktuellt">
                <a className="text-lg underline font-courier-prime">Aktuellt</a>
              </Link>
              <Arrow color="#322A2E" />
            </div>
          </div>

          <div className="relative h-72 lg:h-auto md:col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-2">
            <Image
              src="/skylt.png"
              alt="Skylten utanför butiken"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-black-coffee my-4 lg:my-12">
          <div className="md:my-4 lg:my-8 md:flex justify-between items-center">
            <h3 className="text-xl md:text-3xl lg:text-4xl my-4 md:my-0">
              Instagram
            </h3>
            <div className="md:flex justify-end items-center gap-3 hidden ">
              <Link href="https://www.instagram.com/majornasbocker/">
                <a
                  className="text-lg lg:text-2xl underline font-courier-prime"
                  target="_blank"
                >
                  Följ Oss
                </a>
              </Link>
              <Arrow color="#322A2E" />
            </div>
          </div>
          <Instagram feed={feed} />
          <div className="flex md:hidden justify-end items-center gap-3 mt-4">
            <Link href="/">
              <a className="text-lg underline font-courier-prime">Följ Oss</a>
            </Link>
            <Arrow color="#322A2E" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const feed = await getInstaImages();

  return {
    props: {
      feed,
    },
  };
};
