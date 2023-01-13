import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import stringToHtml from "../utils/stringToHtml";
import Arrow from "./svgs/Arrow";
import Back from "./svgs/Back";

const Posts = ({ data }) => {
  function setDate(rawdate) {
    const date = new Date(rawdate);

    return date.toLocaleDateString("sv-SE", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  }
  return (
    <div className="relative flex flex-col content-center pt-4">
      <Head>
        <title>{data.author}</title>
      </Head>
      <div className="relative w-full h-96 lg:h-screen">
        <Image
          src={data.imageUrl}
          fill
          className="object-contain"
          alt={data.author}
        ></Image>
      </div>
      <div className="pt-4">
        <h1>{data.author}</h1>
        <h4 className="text-2xl	pt-4">{setDate(data.publishedAt)}</h4>
        <div className="text-lg w-full lg:w-2/3	pt-4 pb-8">
          {stringToHtml(data.body)}
        </div>

        <div className="flex underline font-courier-prime gap-8 md:gap-4 pb-8 ">
          <div className="flex flex-col md:flex-row  items-center text-center gap-2 cursor-pointer">
            <Image
              src="/logo-insta-dark.svg"
              alt="instagram-logo"
              height="30"
              width="30"
            />
            <p className="cursor-pointer">Dela</p>
          </div>
          <div className="flex flex-col md:flex-row items-center text-center  gap-2 cursor-pointer">
            <Image
              src="/logo-fb-dark.svg"
              alt="facebook-logo"
              height="30"
              width="30"
            />
            <p className="cursor-pointer">Dela</p>
          </div>
          <div className="flex flex-col md:flex-row items-center text-center  gap-2 cursor-pointer">
            <Image src="/copy.svg" alt="copy-logo" height="30" width="30" />
            <p className="cursor-pointer">Kopiera</p>
          </div>
        </div>
        <div className="flex font-bold  gap-4 w-full lg:w-2/3 pb-12">
          {data.prev && (
            <div className="flex justify-center items-center gap-3 h-16 w-1/2 lg:w-full bg-temp-ey text-black-coffee">
              <Back color="#322A2E" />
              <Link
                href={"/event/" + data.prev.slug}
                className="text-lg underline font-courier-prime"
              >
                Tidigare
              </Link>
            </div>
          )}
          {data.next && (
            <div className="flex justify-center items-center gap-3 h-16  w-1/2 lg:w-full bg-tumbleweed text-black-coffee">
              <Link
                href={"/event/" + data.next.slug}
                className="text-lg underline font-courier-prime"
              >
                Nästa
              </Link>
              <Arrow color="#322A2E" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
