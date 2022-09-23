import Head from "next/head";
import Contact from "../components/Contact";
import Openings from "../components/Openings";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../components/svgs/Arrow";
import store from "../public/store.png";
import boktips from "../public/boktips.png";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Majornas böcker & kaffe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-4 sm:px-20 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold font-['Courier-prime']">
          OBEROENDE BOKHANDEL <br /> MED KAFFEHÄNG
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 lg:grid-rows-3 gap-4">
          <div className="relative md:col-span-4 md:row-span-2 lg:col-span-2">
            <Image src={store} alt="Hejsan" layout="fill" objectFit="cover" />
          </div>

          <Openings className="md:col-span-3 lg:col-span-1 md:row-start-3 md:col-start-4 lg:col-start-1" />
          <Contact className="md:col-span-3 lg:col-span-1 md:row-start-3 md:col-start-1 lg:col-start-2" />

          <div className="bg-tumbleweed p-4 md:row-start-1 md:col-span-2 md:col-start-5 lg:col-start-3 lg:col-span-1">
            <p className="text-5xl mb-10 font-['DM-serif'] text-[#4E4247] max-h-60 md:hidden lg:block">
              POCKET + <br /> KAFFE = <br /> 100 kr
            </p>
            <p className="hidden md:block lg:hidden text-5xl mb-5 font-['DM-serif'] text-[#4E4247] max-h-60">
              POCKET <br /> + KAFFE <br /> = 100 kr
            </p>
          </div>

          <div className="bg-temp-ey p-4 md:row-start-2 lg:row-start-1 md:col-span-2 md:col-start-5 lg:col-start-4 lg:col-span-1">
            <p className="text-xl font-semibold mb-4">
              Ta ett kik på vad som försiggår i butiken. Vi planerar event
              kontinuerligt!
            </p>
            <div className="flex justify-end gap-3 items-center">
              <Link href="/aktuellt">
                <a className="text-lg underline font-['Courier-prime']">
                  Aktuellt
                </a>
              </Link>
              <Arrow color="#000" />
            </div>
          </div>

          <div className="bg-black-coffee md:col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-2 md:flex flex-row-reverse">
            <div className="relative md:w-[50%]">
              <Image src={boktips} layout="fill" objectFit="cover" />
            </div>

            <div className="md:w-[50%] p-4 lg:flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl text-whiteish font-semibold pt-4 md:pt-0">
                  Boktips
                </h3>
                <p className="my-4 text-whiteish">
                  Tre sinsemellan olika kvinnor anlitas av Försvarsmakten för
                  sina skarpa hjärnors skull. Kontrahenterna är en rafflande
                  berättelse...
                </p>
              </div>

              <div className="flex justify-end gap-3 mb-4">
                <Link href="/boktips">
                  <a className="text-lg underline text-whiteish font-['Courier-prime']">
                    Läs mer
                  </a>
                </Link>
                <Arrow color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
