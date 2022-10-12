import Head from "next/head";
import Image from "next/image";
import Instagram from "../components/Instagram";
import getInstaImages from "../queries/getInstaImages";
import Link from "next/link";
import Arrow from "../components/svgs/Arrow";

export const About = ({ feed }) => {
  console.log(feed);
  return (
    <div className="pb-12">
      <Head>
        <title>Om oss</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <h1>OM OSS</h1>
        <div className="md:hidden">
          <Image
            src="/about-book.png"
            width="343"
            layout="responsive"
            height="226"
            alt="books"
          ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-7 gap-4 md:mt-4 lg:grid-cols-5 lg:gap-0">
          <div className="md:row-span-2 md:col-start-1 md:col-span-2 md:row-start-1 lg:col-span-3 lg:col-start-3 lg:border-b-8 mt-4 lg:mt-0 lg:border-l-8 border-whiteish z-10 w-full bg-temp-päron text-black-coffee p-4 lg:p-8">
            <p className="font-bold lg:hidden mb-4 md:text-xl">
              Oberoende bokhandel med med härligt kaffehäng!
            </p>
            <p className="font-bold hidden lg:block mb-4">
              Majornas böcker & kaffe är en oberoende bokhandel som öppnade
              sommaren 2019.
            </p>
            <p>
              Majornas böcker & kaffe är en oberoende bokhandel som öppnade
              sommaren 2019. Här finner du aktuell skönlitteratur, barnböcker,
              serieböcker och intressanta fackböcker. Förutom böcker säljs också
              kort, pussel och spel samt en del pappersvaror och roliga
              presenter. På barnavdelningen hittar man förutom böcker småprylar
              som är perfekta som kalaspresenter.
            </p>
            <p className="hidden lg:block mt-4">
              Tanken är att erbjuda en trivsam bokhandel där man kan botanisera
              bland böcker, eller slå sig ner med en espresso och dagstidningen.
            </p>
          </div>

          <div className="relative md:col-start-1 md:row-span-6 md:row-start-3 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:row-span-5 hidden md:block md:pr-4 md:mb-4 lg:mb-0">
            <Image
              src="/about-book-2.png"
              layout="fill"
              objectFit="cover"
              alt="books"
            ></Image>
          </div>
          <div className="md:row-span-4 md:col-start-2 md:row-start-3 lg:col-span-1 lg:col-start-5 lg:mb-2 lg:ml-2 bg-temp-ey font-serif text-[56px] md:text-[32px] text-hembakad leading-none p-4">
            ALLTID GOTT KAFFE
            <div className="w-full text-center">
              <Image
                src="/muffin-spoon.svg"
                width="231"
                height="218"
                alt="muffin and spoon"
              ></Image>
            </div>
          </div>
          <div className="md:row-span-1 md:row-start-7 md:col-start-2 lg:col-start-1 lg:col-span-4 lg:row-start-6 lg:mb-2 lg:mt-2 bg-tumbleweed p-4 flex justify-center">
            <div className="mr-4">
              <Link href="/kontakt">
                <a className="text-lg underline font-courier-prime text-black-coffee">
                  Hitta hit
                </a>
              </Link>
            </div>
            <Arrow color="#322A2E" />
          </div>
        </div>
        <div className="md:my-4 lg:my-8 md:flex justify-between items-center text-black-coffee">
          <h3 className="text-xl md:text-3xl lg:text-4xl my-4 md:my-0">
            Instagram
          </h3>
          <div className="md:flex justify-end items-center gap-3 hidden text-black-coffee">
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
        <Instagram feed={feed}></Instagram>
        <div className="flex md:hidden justify-end items-center gap-3 mt-4">
          <Link href="/">
            <a className="text-black-coffee text-lg underline font-courier-prime">
              Följ Oss
            </a>
          </Link>
          <Arrow color="#000" />
        </div>
      </div>
    </div>
  );
};

export default About;

export const getStaticProps = async () => {
  const feed = await getInstaImages();
  console.log(feed);

  return {
    props: {
      feed,
    },
  };
};
