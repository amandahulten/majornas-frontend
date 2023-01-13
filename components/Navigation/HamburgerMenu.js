import React from "react";
import Image from "next/image";
import Link from "next/link";
import Close from "../svgs/Close";

const HamburgerMenu = ({ openHamburgerMenu, hamburgerMenuOpen }) => {
  return (
    <div
      className={
        hamburgerMenuOpen
          ? "flex-col flex z-50 items-center fixed w-full text-whiteish justify-center  lg:hidden"
          : "hidden"
      }
    >
      <div className="fixed w-full h-36 flex-row justify-between items-center bg-black-coffee">
        <div className="h-36 flex items-center">
          <div className="relative h-32 w-64 md:h-36 md:w-72 ">
            <Link href="/">
              <Image src="/logo-light.svg" alt="logo" fill />
            </Link>
          </div>
        </div>
        <div className="bg-[url('../public/nav-background.svg')] pr-8">
          <div
            onClick={openHamburgerMenu}
            className="absolute flex right-6 top-16"
          >
            <Close className="cursor-pointer" />
          </div>
          <div className="pt-24 pb-36 h-screen text-base">
            <ul
              onClick={openHamburgerMenu}
              className="flex flex-col items-end "
            >
              <li className="p-4">
                <Link href="/">Hem</Link>
              </li>
              <li className="p-4">
                <Link href="/aktuellt">Aktuellt</Link>
              </li>
              <li className="p-4">
                <Link href="/om">Om oss</Link>
              </li>
              <li className="p-4">
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
            <div className="flex flex-row flex-wrap justify-end pt-8 ">
              <div className="flex flex-col items-center pr-8 ">
                <Image
                  src="/logo-insta.svg"
                  alt="instagram-logo"
                  height="35"
                  width="35"
                />
                <p className="text-sm text-whiteish">Instagram</p>
              </div>
              <div className="flex flex-col items-center ">
                <Image
                  src="/logo-fb.svg"
                  alt="instagram-logo"
                  height="35"
                  width="35"
                />
                <p className="text-sm text-whiteish">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
