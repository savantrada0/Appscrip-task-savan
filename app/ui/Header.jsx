"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="header-wrapper" id="sticky-menu">
      <div className="upperdiv">
        <div className="brand">
          <Image
            className="burger"
            src="/assets/svgs/hamburger.svg"
            alt="menu"
            width={36}
            height={36}
          />
          <Image
            src="/assets/svgs/Logo.svg"
            alt="logo"
            width={36}
            height={36}
          />
        </div>
        <h1 className="logo">LOGO</h1>
        <ul>
          <li>
            <Image
              src="/assets/svgs/search-normal.svg"
              width={24}
              height={24}
              alt="search"
            />
          </li>
          <li>
            <Image
              width={24}
              height={24}
              src="/assets/svgs/heart.svg"
              alt="heart"
            />
          </li>
          <li>
            <Image
              width={24}
              height={24}
              src="/assets/svgs/shopping-bag.svg"
              alt="bag"
            />
          </li>
          <div className="last-two-icons">
            <li>
              <Image
                width={24}
                height={24}
                src="/assets/svgs/profile.svg"
                alt="profile"
              />
            </li>
            <li>
              <span>ENG</span>
              <Image
                width={16}
                height={16}
                src="/assets/svgs/arrow-down.svg"
                alt="arrow-down"
              />
            </li>
          </div>
        </ul>
      </div>
      <div className="downdiv">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
