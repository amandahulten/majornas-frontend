import Image from "next/image";
import Link from "next/link";
import headshot from "../assets/headshot.jpg";
import RightArrowIcon from "../assets/icons/RightArrowIcon";

const PreviewCard = ({ name, text }) => {
  return (
    <div className=" max-w-full group flex flex-col relative text-black-coffee">
      <div className="aspect-square relative">
        <Image src={headshot} layout="fill" objectFit="cover" />
      </div>

      <div className=" p-2 bg-temp-ey group-hover:bg-tumbleweed absolute w-full bottom-0">
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="h-0 text-sm group-hover:h-24 transition-all overflow-hidden">
          <p>{text}</p>
          <Link href="/gay">
            <a className="mt-auto flex gap-2 w-full justify-end items-center">
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
