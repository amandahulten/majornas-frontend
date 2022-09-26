import Image from "next/image";

import Openings from "../components/Openings";
import Contact from "../components/Contact";

import MailIcon from "../components/svgs/Mail";
import PhoneIcon from "../components/svgs/Phone";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">KONTAKT</h1>

      <div>
        <Image
          src="/books.png"
          className="object-cover"
          width={500}
          height={500}
        />
      </div>

      <div>
   

        <Contact />

        <div className="w-[251px] h-[241px] bg-black"></div>
      </div>
    </div>
  );
};

export default Contact;
