import MailIcon from "../components/svgs/Mail";
import PhoneIcon from "../components/svgs/Phone";
import Arrow from "./svgs/Arrow";
import Link from "next/link";

const Contact = ({ className, styling, display }) => {
  return (
    <div className={`text-black-coffee bg-temp-ey p-4 ${className}`}>
      <h2 className="text-xl md:text-2xl mb-3 font-semibold">Kontakt</h2>
      <div className={`${styling}`}>
        <div>
          <p>Allmänna vägen 22</p>
          <p className="mb-2">414 60 Göteborg</p>
        </div>

        <div>
          <p className="flex items-center gap-2">
            <MailIcon />
            info@majornasbocker.se
          </p>
          <p className="flex items-center gap-2">
            <PhoneIcon />
            076-341 40 00
          </p>
        </div>
      </div>

      <div className={`hidden md:flex gap-3 justify-end pt-16 ${display}`}>
        <Link href="https://www.google.se/maps/place/Allm%C3%A4nna+v%C3%A4gen+22,+414+60+G%C3%B6teborg/@57.6969908,11.9282245,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff3484c99eba3:0x7fa4782120b55e0!8m2!3d57.696988!4d11.9304078?hl=sv">
          <a className="text-lg underline font-courier-prime" target="_blank">
            Hitta hit
          </a>
        </Link>
        <Arrow color="#000" />
      </div>
    </div>
  );
};

export default Contact;
