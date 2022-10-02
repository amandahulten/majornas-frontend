import Head from "next/head";
import Image from "next/image";
import Instagram from "../components/Instagram";
import getInstaImages from "../queries/getInstaImages";
import Link from "next/link";
import Arrow from "../components/svgs/Arrow";

export const About = ({ feed }) => {
  console.log(feed);
  return (
    <div>
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
        <div className="w-full bg-temp-päron text-black-coffee p-4 mt-4">
          <p className="font-bold mb-4">
            Oberoende bokhandel med med härligt kaffehäng!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-4">
          <div className="relative md:col-start-1 md:row-span-5 hidden md:block mt-4 md:pr-4">
            <Image
              src="/about-book-2.png"
              layout="fill"
              objectFit="cover"
              alt="books"
            ></Image>
          </div>
          <div className="md:row-span-4 md:col-start-2 md:row-start-1 bg-temp-ey mt-4 font-serif text-[56px] md:text-[32px] text-hembakad leading-none p-4">
            ALLTID HEMBAKAD FIKA TILL KAFFET
            <div className="w-full text-center">
              <Image
                src="/muffin-spoon.svg"
                width="231"
                height="218"
                alt="muffin and spoon"
              ></Image>
            </div>
          </div>
          <div className="md:row-span-1 md:row-start-5 md:col-start-2 bg-tumbleweed p-4 flex justify-center">
            <div className="mr-4">
              <Link href="/kontakt">
                <a className="text-lg underline font-courier-prime">
                  Hitta hit
                </a>
              </Link>
            </div>
            <Arrow color="#000" />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 h-[300px] overflow-hidden">
          <div className="bg-black-coffee text-whiteish mt-4 p-4">
            <p className="mb-4 text-[26px]">
              Eva Wadman{" "}
              <span className="hidden md:inline">
                är Majornas Bokhandel & Kaffe
              </span>
            </p>
            <p>
              Eva Wadman har alltid älskat litteraturens fascinerande värld. Den
              förälskelsen växte sig så stark att 2019 öppnade hon sin egna
              bokhandel i hjärtat av Majorna.
            </p>
          </div>
          <div className="md:mt-4">
            <Image
              src="/about-eva.png"
              layout="responsive"
              width="343"
              height="402"
              alt="author"
            ></Image>
          </div>
        </div>
        <div className="mt-4 mb-4">Instagram</div>
        <Instagram feed={feed}></Instagram>

        <div className="pb-12">
          <p className="text-right">Följ Oss</p>
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
