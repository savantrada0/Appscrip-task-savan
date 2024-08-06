"use client";
import Product from "@/app/ui/Product";
import Image from "next/image";
import products from "@/app/lib/data";
import Filters from "@/app/ui/Filters";
import { useEffect, useRef, useState } from "react";

const Products = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setToggle(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main-content">
      <div className="filter-content">
        <div className="filter-button">
          <h1 className="items product-bold">3425 ITEMS</h1>
          <span
            onClick={(e) => {
              setShowFilter(!showFilter);
            }}
            className="hide_filter"
          >
            <Image
              src="/assets/svgs/arrow-left.svg"
              width={16}
              height={16}
              alt="leftarrow"
              className={`mr-5 ${!showFilter ? "scroll-arrow" : ""}`}
            />
            HIDE FILTERS
          </span>
        </div>
        <div ref={dropdownRef} className="right-dropdown">
          <h1 className="product-bold dropdown" onClick={handleToggle}>
            RECOMMENDED
            <Image
              src="/assets/svgs/arrow-down.svg"
              width={16}
              height={16}
              alt="downarrow"
            />
          </h1>
          {toggle && (
            <div className="option-wrapper">
              <ul>
                <li
                  className={`${
                    selectedOption === "RECOMMENDED" ? "active-toggle" : ""
                  }`}
                  onClick={() => handleOptionClick("RECOMMENDED")}
                >
                  RECOMMENDED
                </li>
                <li
                  className={`${
                    selectedOption === "NEWEST FIRST" ? "active-toggle" : ""
                  }`}
                  onClick={() => handleOptionClick("NEWEST FIRST")}
                >
                  NEWEST FIRST
                </li>
                <li
                  className={`${
                    selectedOption === "POPULAR" ? "active-toggle" : ""
                  }`}
                  onClick={() => handleOptionClick("POPULAR")}
                >
                  POPULAR
                </li>
                <li
                  className={`${
                    selectedOption === "PRICE : HIGH TO LOW"
                      ? "active-toggle"
                      : ""
                  }`}
                  onClick={() => handleOptionClick("PRICE : HIGH TO LOW")}
                >
                  PRICE : HIGH TO LOW
                </li>
                <li
                  className={`${
                    selectedOption === "PRICE : LOW TO HIGH"
                      ? "active-toggle"
                      : ""
                  }`}
                  onClick={() => handleOptionClick("PRICE : LOW TO HIGH")}
                >
                  PRICE : LOW TO HIGH
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div
        className={`${showFilter ? "filter-products" : "filter-products-flex"}`}
      >
        <Filters showFilter={showFilter} />
        <div className="products">
          {products.map((item) => {
            return (
              <Product
                image={item.image}
                description={item.description}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
