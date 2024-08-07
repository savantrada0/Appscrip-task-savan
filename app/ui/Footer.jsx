"use client";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [activeFeild, setActiveFeild] = useState(0);

  const handleClick = (index) => {
    if (activeFeild === index) {
      setActiveFeild(0);
    } else {
      setActiveFeild(index);
    }
  };
  return (
    <footer>
      <div className="upper-footer">
        <div className="left-footer">
          <h1 className="footer-bold" style={{ marginBottom: "20px" }}>
            BE THE FIRST TO KNOW
          </h1>
          <span>Sign up for updates from mettā muse.</span>
          <div className="input-wrapper">
            <input type="text" placeholder="Enter your e-mail..." />
            <button style={{ cursor: "pointer" }}>SUBSCRIBE</button>
          </div>
        </div>
        <div className="right-footer">
          <h1 className="footer-bold">CONTACT US</h1>
          <div className="user-contact">
            <div className="user-cont">+44 221 133 5360</div>
            <div className="user-cont">customercare@mettamuse.com</div>
          </div>
          <div className="currency-wrapper">
            <h1 className="footer-bold currency">CURRENCY</h1>
            <div className="usa-wrapper">
              <Image
                src="/assets/svgs/us.svg"
                alt="usaflag"
                width={24}
                height={24}
              />
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={6}
                height={6}
              />
              <span>USD</span>
            </div>
          </div>
          <p className="footer-desc" style={{ fontSize: "14px" }}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className="down-footer">
        <div className="left-down">
          <div className="services" onClick={() => handleClick(1)}>
            <h1 className="footer-bold">mettā muse</h1>
            <Image
              className="arrow-white"
              width={16}
              height={16}
              src="/assets/svgs/arrow-right.svg"
              alt="arrow-down-white"
            />
          </div>
          <ul className="footer-big">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>EU Compliances Docs</li>
          </ul>
          {activeFeild === 1 && (
            <ul className="footer-small">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>EU Compliances Docs</li>
            </ul>
          )}
        </div>
        <div className="middle-down">
          <div className="q_links" onClick={() => handleClick(2)}>
            <h1 className="footer-bold">QUICK LINKS</h1>
            <Image
              className="arrow-white"
              width={16}
              height={16}
              src="/assets/svgs/arrow-right.svg"
              alt="arrow-down-white"
            />
          </div>
          <ul className="footer-big">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          {activeFeild === 2 && (
            <ul className="footer-small">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          )}
        </div>
        <div className="right-down">
          <div className="follow_us">
            <div className="services" onClick={() => handleClick(3)}>
              <h1 className="footer-bold">FOLLOW US</h1>
              <Image
                className="arrow-white"
                width={16}
                height={16}
                src="/assets/svgs/arrow-right.svg"
                alt="arrow-down-white"
              />
            </div>
            <div className="social footer-big">
              <Image
                src="/assets/svgs/insta.svg"
                alt="instagram"
                width={32}
                height={32}
              />
              <Image
                src="/assets/svgs/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
              />
            </div>
            {activeFeild === 3 && (
              <div className="social footer-small">
                <Image
                  src="/assets/svgs/Insta.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                />
                <Image
                  src="/assets/svgs/linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                />
              </div>
            )}
          </div>
          <h1 className="footer-bold" style={{ marginTop: "32px" }}>
            mettā muse ACCEPTS
          </h1>
          <div className="cards-wrapper">
            <Image
              src="/assets/images/gpay.png"
              alt="gpay"
              width={56}
              height={35}
            />
            <Image
              src="/assets/images/mastercard.png"
              alt="mastercard"
              width={56}
              height={35}
            />
            <Image
              src="/assets/images/paypal.png"
              alt="paypal"
              width={56}
              height={35}
            />
            <Image
              src="/assets/images/amex.png"
              alt="amex"
              width={56}
              height={35}
            />
            <Image
              src="/assets/images/applepay.png"
              alt="applepay"
              width={56}
              height={35}
            />
            <Image
              src="/assets/images/pay.png"
              alt="pay"
              width={56}
              height={35}
            />
          </div>
        </div>
      </div>
      <p className="copy-right">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
