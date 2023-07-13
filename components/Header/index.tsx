import Image from "next/image";
import React from "react";
import LogoColab from "./logo-colab.png";
import LogoBrand from "./logo-brand.png";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderLogoBrand,
  HeaderLogoColab,
  HeaderWrapper,
  ItemNavbar,
  ListNavbar,
  Navbar,
} from "./Styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoColab>
          <Link href="/">
            <Image src={LogoColab} alt={""} height={40} />
          </Link>
        </HeaderLogoColab>
        <Navbar>
          <ListNavbar>
            <ItemNavbar>
              <Link href="/explore-car">Explore Car</Link>
            </ItemNavbar>
            <ItemNavbar>
              <Link href="/service-and-tools">Service & Tools</Link>
            </ItemNavbar>
            <ItemNavbar>
              <Link href="/contact-us">Clontact Us</Link>
            </ItemNavbar>
          </ListNavbar>
        </Navbar>
        <HeaderLogoBrand>
          <Link href="/" className="flex justify-end">
            <Image src={LogoBrand} alt={""} height={40} />
          </Link>
        </HeaderLogoBrand>
      </HeaderContainer>
    </HeaderWrapper>
    // <header className="shadow-md">
    //   <div className="container mx-auto flex justify-between items-center py-4">
    //     <div className="logo-colab w-[255px]">
    //       <Link href="/">
    //         <Image src={LogoColab} alt={""} height={40} />
    //       </Link>
    //     </div>
    //     <nav>
    //       <ul className="flex flex-row gap-10 font-medium ">
    //         <li>
    //           <Link href="/explore-car">Explore Car</Link>
    //         </li>
    //         <li>
    //           <Link href="/service-and-tools">Service & Tools</Link>
    //         </li>
    //         <li>
    //           <Link href="/contact-us">Clontact Us</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div className="logo-brand w-[255px]">
    //       <Link href="/" className="flex justify-end">
    //         <Image src={LogoBrand} alt={""} height={40} />
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
