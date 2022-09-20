import Image from "next/image";
import MailIcon from "../components/svgs/Mail";
import PhoneIcon from "../components/svgs/Phone";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">KONTAKT</h1>

      <div className="bg-temp-päron p-4 mb-4 md:h-48">
        <h2 className="text-xl mb-3">Öppettider</h2>
        <div className="flex gap-8 md:hidden">
          <div>
            <p>Tisdag - Fredag</p>
            <p>Lördag</p>
            <p>Söndag - Måndag</p>
          </div>
          <div className="font-bold">
            <p>11:00 - 18:00</p>
            <p>11:00 - 15:00</p>
            <p>Stängt</p>
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          <div>
            <p>Måndag</p>
            <p>Tis - Fre</p>
            <p>Lördag</p>
            <p>Söndag</p>
          </div>
          <div className="font-bold">
            <p>Stängt</p>
            <p>11:00 - 18:00</p>
            <p>11:00 - 15:00</p>
            <p>Stängt</p>
          </div>
        </div>
      </div>

      <div>
        <Image
          src="/books.png"
          className="object-cover"
          width={500}
          height={500}
        />
      </div>

      <div>
        <div className="bg-temp-ey p-4 mt-3">
          <h2 className="text-xl mb-3">Kontaktuppgifter</h2>
          <p>Allmänna vägen 22</p>
          <p className="mb-2">414 60 Göteborg</p>
          <p className="flex items-center gap-2">
            <MailIcon />
            info@majornasbocker.se
          </p>
          <p className="flex items-center gap-2">
            <PhoneIcon />
            076-341 40 00
          </p>
        </div>

        <div className="w-[251px] h-[241px] bg-black"></div>
      </div>
    </div>
  );
};

export default Contact;
