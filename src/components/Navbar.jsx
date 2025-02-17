import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Search from "../assets/search.svg";
import Image from "next/image"
import Link from "next/link";

let Navbar = () => {
  let [showSearch, setShowSearch] = useState(false);
  let [showAboutDropdown, setShowAboutDropdown] = useState(false);
  let [showServicesDropdown, setShowServicesDropdown] = useState(false);
  let [showCalculatorsDropdown, setShowCalculatorsDropdown] = useState(false);
  let handleShowSearch = () => {
    if (showSearch) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  };
  return (
    <div className={styles.secondNavbar}>
      <Link href="#" className={styles.logo}>
           <Image height={50} width={100} src={"/public/assets/brlightlight-icon.webp"} alt="Brightlight Blue Logo" />
      </Link>
      <p className={styles.contactNumber}>142536978</p>
      <div className={styles.mainNavbar}>
        <input
          type="search"
          placeholder="Search..."
          className={`${styles.searchInput} ${
            showSearch ? styles.showSearchInput : null
          }`}
        />
        <Search width={20} height={20} onClick={handleShowSearch} />
        <div className={styles.relativeDiv}>
          <Link
            href="/"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            ABOUT
          </Link>
          <div
            className={`${styles.aboutDropdown} ${
              showAboutDropdown ? styles.showAboutDropdown : null
            }`}
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <Link href="/">Link 1</Link>
            <Link href="/">Link 2</Link>
            <Link href="/">Link 3</Link>
            <Link href="/">Link 4</Link>
            <Link href="/">Link 5</Link>
          </div>
        </div>
        <div className={styles.relativeDiv}>
          <Link
            href="/"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            SERVICES
          </Link>
          <div
            className={`${styles.servicesDropdown} ${
              showServicesDropdown ? styles.showServicesDropdown : null
            }`}
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          ></div>
        </div>

        <Link href="/">BLOGS</Link>
        <Link href="/">NEWS</Link>
        <div className={styles.relativeDiv}>
          <Link
            href="/"
            onMouseEnter={() => setShowCalculatorsDropdown(true)}
            onMouseLeave={() => setShowCalculatorsDropdown(false)}
          >
            CALCULATORS
          </Link>
          <div
            className={`${styles.calculatorsDropdown} ${
              showCalculatorsDropdown ? styles.showCalculatorsDropdown : null
            }`}
            onMouseEnter={() => setShowCalculatorsDropdown(true)}
            onMouseLeave={() => setShowCalculatorsDropdown(false)}
          >
            <Link href="/">BC PNP Calculator</Link>
            <Link href="/">CLB Calculator</Link>
            <Link href="/">FSW Calculator</Link>
          </div>
        </div>

        <Link href="/">CONTACT</Link>
        <div>
          <button className={styles.bookButton}>BOOK APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;