import Image from "next/image";
import Link from "next/link";
import RightArrowIcon from "../assets/icons/RightArrowIcon";

const PreviewCard = ({ event }) => {
  const { author, body, imageUrl, slug } = event;
  return (
    <div className=" max-w-full group flex flex-col relative text-black-coffee">
      <div className="aspect-square relative">
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </div>

      <div className="p-2 bg-temp-ey group-hover:bg-tumbleweed md:absolute w-full bottom-0">
        <h3 className="text-2xl font-bold">{author}</h3>
        <div className="h-fit text-sm md:h-0 md:group-hover:h-24 transition-all overflow-hidden min-h-fit">
          <div className="mt-2">
            <p className="line-clamp-6 md:line-clamp-1">{body}</p>
          </div>
          <Link href={"/event/" + slug}>
            <a className="my-2 md:mt-auto flex gap-2 w-full justify-end items-center h-full">
              <p className="text-xl font-courier-prime font-bold underline">
                Läs mer
              </p>
              <RightArrowIcon className="w-8" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
