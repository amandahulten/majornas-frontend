import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const [hamburgerMenuOpen, sethamburgerMenuOpen] = useState(false);

  const openHamburgerMenu = () => {
    sethamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <div className="fixed w-full h-24 flex justify-start items-center bg-whiteish">
      <div className="pl-4 flex items-center">
        <Image src="/logo-dark.png" alt="logo" height="75" width="190" />
      </div>
      <div className="absolute flex right-6  ">
        <div className="scale-150">
          <AiOutlineMenu
            onClick={openHamburgerMenu}
            className="scale-150 cursor-pointer md:hidden"
          />
        </div>
        <div className="hidden md:flex items-center ">
          <ul className="hidden md:flex lg:gap-40 lg:pr-8 gap-28 pr-4">
            <li className="hover:font-medium hover:underline ">
              <Link href="/hem">Hem</Link>
            </li>
            <li className="hover:font-medium hover:underline">
              <Link href="/aktuellt">Aktuellt</Link>
            </li>
            <li className="hover:font-medium hover:underline">
              <Link href="/om-oss">Om oss</Link>
            </li>
            <li className="hover:font-medium hover:underline">
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>

      <HamburgerMenu
        openHamburgerMenu={openHamburgerMenu}
        hamburgerMenuOpen={hamburgerMenuOpen}
      />
    </div>
  );
};

export default Nav;
