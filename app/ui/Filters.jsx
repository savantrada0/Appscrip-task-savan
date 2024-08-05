import Image from "next/image";
import { useState } from "react";

const Filters = ({ showFilter }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (id) => {
    if (activeIndex === id) {
      setActiveIndex(0);
    } else {
      setActiveIndex(id);
    }
  };
  return (
    <div className="filter" style={{ display: showFilter ? "block" : "none" }}>
      <div className="filter-wrapper">
        <input type="checkbox" id="customizble" name="customizble" />
        <label for="customizble">CUSTOMIZBLE</label>
      </div>
      <div className="filter-wrapper">
        <div className="filter-header" onClick={() => handleClick(1)}>
          <div className="filter-column">
            <span>IDEAL FOR</span>
            <span>All</span>
          </div>
          <Image width={16} height={16} src={"/assets/svgs/arrow-down.svg"} />
        </div>
        {activeIndex === 1 && (
          <div className="filter-list">
            <span>Select all</span>
            <div className="checklist-wrapper">
              <input type="checkbox" id="men" name="men" />
              <label for="men">Men</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="women" name="women" />
              <label for="women">Women</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="baby" name="baby" />
              <label for="baby">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        <div className="filter-header" onClick={() => handleClick(2)}>
          <div className="filter-column">
            <span>OCCASION</span>
            <span>All</span>
          </div>
          <Image width={16} height={16} src={"/assets/svgs/arrow-down.svg"} />
        </div>
        {activeIndex === 2 && (
          <div className="filter-list">
            <span>Select all</span>
            <div className="checklist-wrapper">
              <input type="checkbox" id="men1" name="men1" />
              <label for="men1">Men</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="women1" name="women1" />
              <label for="women1">Women</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="baby1" name="baby1" />
              <label for="baby1">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        <div className="filter-header" onClick={() => handleClick(3)}>
          <div className="filter-column">
            <span>WORK</span>
            <span>All</span>
          </div>
          <Image width={16} height={16} src={"/assets/svgs/arrow-down.svg"} />
        </div>
        {activeIndex === 3 && (
          <div className="filter-list">
            <span>Select all</span>
            <div className="checklist-wrapper">
              <input type="checkbox" id="men3" name="men3" />
              <label for="men3">Men</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="women3" name="women3" />
              <label for="women3">Women</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="baby3" name="baby3" />
              <label for="baby3">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        <div className="filter-header" onClick={() => handleClick(4)}>
          <div className="filter-column">
            <span>FABRIC</span>
            <span>All</span>
          </div>
          <Image width={16} height={16} src={"/assets/svgs/arrow-down.svg"} />
        </div>
        {activeIndex === 4 && (
          <div className="filter-list">
            <span>Select all</span>
            <div className="checklist-wrapper">
              <input type="checkbox" id="men4" name="men4" />
              <label for="men4">Men</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="women4" name="women4" />
              <label for="women4">Women</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="baby4" name="baby4" />
              <label for="baby4">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        <div className="filter-header" onClick={() => handleClick(5)}>
          <div className="filter-column">
            <span>SEGMENT</span>
            <span>All</span>
          </div>
          <Image width={16} height={16} src={"/assets/svgs/arrow-down.svg"} />
        </div>
        {activeIndex === 5 && (
          <div className="filter-list">
            <span>Select all</span>
            <div className="checklist-wrapper">
              <input type="checkbox" id="men5" name="men5" />
              <label for="men5">Men</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="women5" name="women5" />
              <label for="women5">Women</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="baby5" name="baby5" />
              <label for="baby5">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        <div className="filter-header" onClick={() => handleClick(6)}>
          <div className="filter-column">
            <span>SUITABLE FOR</span>
            <span>All</span>
          </div>
          <Image width={16} height={16} src={"/assets/svgs/arrow-down.svg"} />
        </div>
        {activeIndex === 6 && (
          <div className="filter-list">
            <span>Select all</span>
            <div className="checklist-wrapper">
              <input type="checkbox" id="men6" name="men6" />
              <label for="men6">Men</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="women6" name="women6" />
              <label for="women6">Women</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="baby6" name="baby6" />
              <label for="baby6">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        <div className="filter-header" onClick={() => handleClick(7)}>
          <div className="filter-column">
            <span>RAW MATERIALS</span>
            <span>All</span>
          </div>
          <Image width={16} height={16} src={"/assets/svgs/arrow-down.svg"} />
        </div>
        {activeIndex === 7 && (
          <div className="filter-list">
            <span>Select all</span>
            <div className="checklist-wrapper">
              <input type="checkbox" id="men7" name="men7" />
              <label for="men7">Men</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="women7" name="women7" />
              <label for="women7">Women</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="baby7" name="baby7" />
              <label for="baby7">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>
      <div className="filter-wrapper">
        <div className="filter-header" onClick={() => handleClick(8)}>
          <div className="filter-column">
            <span>PATTERN</span>
            <span>All</span>
          </div>
          <Image width={16} height={16} src={"/assets/svgs/arrow-down.svg"} />
        </div>
        {activeIndex === 8 && (
          <div className="filter-list">
            <span>Select all</span>
            <div className="checklist-wrapper">
              <input type="checkbox" id="men8" name="men8" />
              <label for="men8">Men</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="women8" name="women8" />
              <label for="women8">Women</label>
            </div>
            <div className="checklist-wrapper">
              <input type="checkbox" id="baby8" name="baby8" />
              <label for="baby8">Baby & Kids</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
