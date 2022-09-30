import Image from "next/image";

import Openings from "../components/Openings";
import Contact from "../components/Contact";
import Link from "next/link";

const Kontakt = () => {
  return (
    <div className="pt-4 pb-12">
      <h1>KONTAKT</h1>

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

        <div className="w-full h-80 bg-black md:row-start-4 md:row-span-4 relative">
          <Link href="https://www.google.se/maps/place/Allm%C3%A4nna+v%C3%A4gen+22,+414+60+G%C3%B6teborg/@57.697442,11.9268178,16z/data=!4m5!3m4!1s0x464ff3484c99eba3:0x7fa4782120b55e0!8m2!3d57.696988!4d11.9304078?hl=sv">
            <a target="_blank">
              <Image src="/google-maps.png" layout="fill" objectFit="cover" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
