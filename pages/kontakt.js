import Image from "next/image";

import Openings from "../components/Openings";
import Contact from "../components/Contact";

const Kontakt = () => {
  return (
    <div className="pt-4 pb-12">
      <h1 className="font-bold text-4xl md:text-5xl font-['Courier-prime'] pb-6">
        KONTAKT
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-8 gap-4">
        <Openings className="md:row-start-1 md:row-span-3" />
        <div className="relative h-48 md:hidden">
          <Image src="/books.png" layout="fill" objectFit="cover" />
        </div>

        <div className="relative hidden md:block h-auto md:col-span-2 md:row-span-6">
          <Image src="/books-desktop.png" layout="fill" objectFit="cover" />
        </div>

        <Contact
          className="md:row-start-8 md:col-start-2 md:col-span-2"
          styling="md:flex justify-between"
          display="md:hidden"
        />

        <div className="w-full h-80 bg-black md:row-start-4 md:row-span-4"></div>
      </div>
    </div>
  );
};

export default Kontakt;
