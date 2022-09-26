import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="h-[20px] bg-black-coffee"></div>
      <div className="bg-[url('../public/bg-footer-desktop.svg')]">
        <div className="py-2 px-8 md:flex md:justify-between md:pt-[50px] lg:ml-[100px]">
          <div>
            <p className="text-[32px] text-whiteish text-center font-h1">
              majorna
            </p>
            <p className="text-[32px] text-whiteish text-center font-h1">
              bokhandel & kaffe
            </p>
            <div className="flex justify-center w-full mt-[40px]">
              <div className="flex justify-between w-[160px]">
                <div className="text-center">
                  <Image
                    src="/logo-insta.svg"
                    alt="instagram-logo"
                    height="40"
                    width="40"
                  />
                  <p className="text-[14px] text-whiteish">Instagram</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/logo-fb.svg"
                    alt="instagram-logo"
                    height="40"
                    width="40"
                  />
                  <p className="text-[14px] text-whiteish">Facebook</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row-reverse w-[50%] md:justify-between md:mb-[50px] lg:mr-[100px]">
            <div className="text-whiteish mt-[50px] mr-[20px] lg:hidden">
              <div>
                <p className="mr-[25px]">Tis - Fre</p>
                <p className="font-bold">11:00 - 18:00</p>
              </div>
              <div>
                <p className="mt-[18px] mr-[25px]">Lör</p>
                <p className="font-bold">11:00 - 15:00</p>
              </div>
              <div>
                <p className="mt-[18px] mr-[25px]">Sön - Mån</p>
                <p className="font-bold">Stängt</p>
              </div>
            </div>
            <div className="text-whiteish mt-[50px] mr-[20px] hidden lg:flex lg:block">
              <div className="text-right mr-[20px]">
                <p className="mb-[18px]">Tis - Fre</p>
                <p className="mb-[18px]">Lör</p>
                <p className="mb-[18px]">Sön</p>
                <p className="mb-[50px]">Mån</p>
              </div>
              <div>
                <p className="font-bold mb-[18px]">11:00 - 18:00</p>
                <p className="font-bold mb-[18px]">11:00 - 15:00</p>
                <p className="font-bold mb-[18px]">Stängt</p>
                <p className="font-bold mb-[18px]">Stängt</p>
              </div>
            </div>
            <div className="text-whiteish mt-[50px] lg:ml-[50px]">
              <p className="mb-[18px]">Hem</p>
              <p className="mb-[18px]">Aktuellt</p>
              <p className="mb-[18px]">Om oss</p>
              <p className="mb-[50px]">Kontakt</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
