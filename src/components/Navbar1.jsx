import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar1.module.css";
import IconGear from "../assets/gearIcon.svg";
import RightArrow from "../assets/rightArrow.svg";
import PhoneIcon from "../assets/phoneIcon.svg";
import BrightlightBlueLogo from "../assets/brlightlight-icon.webp";
import LocationIcon from "../assets/location-white.png";
import EmailIcon from "../assets/mail-white.png";
import EmailBlue from "../assets/mailBlue.png";
import LocationBlue from "../assets/locationBlue.png";
import Search from "../assets/search.svg";
import TikTokIcon from "../assets/tiktok.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";
import FacebookIcon from "../assets/facebook.svg";
import YouTubeIcon from "../assets/youtube.svg";
import Facebookblue from "../assets/facebookBlue.png";
import Youtubeblue from "../assets/youtubeBlue.png";
import Instagramblue from "../assets/instagramBlue.png";
import Linkedinblue from "../assets/linkedinBlue.png";
import Tiktokblue from "../assets/tiktokBlue.png";
import hamBurgerIconWhite from "../assets/hamBurgerIconWhite.svg";
import hamBurgerIconBlue from "../assets/hamBurgerIconBlue.svg";
import whiteLogo from "../assets/brightlight-logo-white.png";
import Link from "next/link";
import Image from "next/image";

const Navbar1 = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (inputValue.trim()) {
      // Redirect using window.location
      window.location.href = `/search?q=${encodeURIComponent(
        inputValue.trim()
      )}`;
    }
  };
  const [isFederalSkilledOpen, setIsFederalSkilledOpen] = useState(false);
  const [isFederalSkilledProgramOpen, setIsFederalSkilledProgramOpen] =
    useState(false);

  const toggleFederalSkilled = (e) => {
    e.preventDefault();
    setIsFederalSkilledOpen(!isFederalSkilledOpen);
  };

  const toggleFederalSkilledProgram = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpen(!isFederalSkilledProgramOpen);
  };
  const { showBlue } = props;
  let [hideContactNavbar, setHideContactNavbar] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCalculatorsDropdown, setShowCalculatorsDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  let [showNestedDropdown, setShowNestedDropdown] = useState(false);
  let [showNestedDropdown2, setShowNestedDropdown2] = useState(false);
  let [showNestedDropdown3, setShowNestedDropdown3] = useState(false);
  let [showNestedDropdown4, setShowNestedDropdown4] = useState(false);
  let [showNestedDropdown5, setShowNestedDropdown5] = useState(false);
  let [showNestedDropdown6, setShowNestedDropdown6] = useState(false);
  let [showNestedDropdown7, setShowNestedDropdown7] = useState(false);
  let [doubleNested1, setDoubleNested1] = useState(false);
  let [doubleNested2, setDoubleNested2] = useState(false);
  let [doubleNested3, setDoubleNested3] = useState(false);
  let [doubleNested4, setDoubleNested4] = useState(false);
  let [doubleNested7, setDoubleNested7] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      if (window.innerWidth > 1080) {
        if (window.scrollY > 150) {
          setHideContactNavbar(true);
        } else {
          setHideContactNavbar(false);
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const [isTemporaryResidencyOpen, setTemporaryResidencyOpen] = useState(false);
  const [isVisitorVisaOpen, setVisitorVisaOpen] = useState(false);
  const [isStudentVisaOpen, setStudentVisaOpen] = useState(false);
  const [isOutsideCanadaOpen, setOutsideCanadaOpen] = useState(false);
  const [isInsideCanadaOpen, setInsideCanadaOpen] = useState(false);
  const [isFamilyReunificationOpen, setFamilyReunificationOpen] =
    useState(false);
  const [isSpousalPermitOpen, setSpousalPermitOpen] = useState(false);

  const toggleTemporaryResidency = () =>
    setTemporaryResidencyOpen(!isTemporaryResidencyOpen);
  const toggleVisitorVisa = () => setVisitorVisaOpen(!isVisitorVisaOpen);
  const toggleStudentVisa = () => setStudentVisaOpen(!isStudentVisaOpen);
  const toggleOutsideCanada = () => setOutsideCanadaOpen(!isOutsideCanadaOpen);
  const toggleInsideCanada = () => setInsideCanadaOpen(!isInsideCanadaOpen);
  const toggleFamilyReunification = () =>
    setFamilyReunificationOpen(!isFamilyReunificationOpen);
  const toggleSpousalPermit = () => setSpousalPermitOpen(!isSpousalPermitOpen);
  const [isCalculatorsOpen, setCalculatorsOpen] = useState(false);

  const toggleCalculators = (e) => {
    e.preventDefault();
    setCalculatorsOpen(!isCalculatorsOpen);
  };

  // Adding your required states for "Super Visa" and "Dual Intent Visa" subheadings
  const [doubleNestedVisitorVisa, setDoubleNestedVisitorVisa] = useState(false);
  const [doubleNestedSpousalPermit, setDoubleNestedSpousalPermit] =
    useState(false);

  const [doubleNestedOutsideCanada, setDoubleNestedOutsideCanada] =
    useState(false);
  const [doubleNestedInsideCanada, setDoubleNestedInsideCanada] =
    useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.firstNavbar}>
          <div className={styles.calculatorIcon}>
            <IconGear className={styles.iconGearIcon} width={25} height={25} />
            <p onClick={() => (window.location.href = "/immigration-tools")}>
              Immigration Tools
            </p>
            <RightArrow
              className={styles.RightArrowIcon}
              width={10}
              height={10}
            />
          </div>
          <div className={styles.ancor}>
            <div className={styles.relativeDiv}>
              <Link
                href="/about-us"
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                ABOUT
              </Link>
            </div>
            <Link href="/contact-us">CONTACT</Link>
            <div className={styles.mobileIcon}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-3 md:w-5"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <p>+1 (604) 503 3734</p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.bottomSectionNavbar} ${
            hideContactNavbar ? styles.makeNavbarFixed : null
          }`}
        >
          <div className={styles.secondNavbar}>
            <Link href="/" className={`${styles.logo} ${styles.logoDesktop}`}>
              <Image
                height={50}
                width={100} // Arbitrary number, Next.js auto-adjusts it
                src={BrightlightBlueLogo}
                alt="Brightlight Blue Logo"
              />
            </Link>

            {showBlue ? (
              <Link href="/" className={`${styles.logo} ${styles.logoMobile}`}>
                <Image
                  height={50}
                  width={100} // Arbitrary number, Next.js auto-adjusts it
                  src={BrightlightBlueLogo}
                  alt="Brightlight Blue Logo"
                />
              </Link>
            ) : (
              <Link href="/" className={`${styles.logo} ${styles.logoMobile}`}>
                <Image
                  height={50}
                  width={100} // Arbitrary number, Next.js auto-adjusts it
                  src={whiteLogo}
                  alt="Brightlight Blue Logo"
                />
              </Link>
            )}

            <div className={styles.mainNavbar}>
              <Link href="/" className={styles.sidebarLink}>
                HOME
              </Link>
              <div className={styles.relativeDiv}>
                <Link
                  href="#"
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
                >
                  {/* // */}
                  {/* // */}
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="/permanent-residency"
                      onMouseEnter={() => setShowNestedDropdown3(true)}
                      onMouseLeave={() => setShowNestedDropdown3(false)}
                    >
                      Permanent Residency
                    </Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown3 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => {
                        setShowNestedDropdown3(true);
                      }}
                      onMouseLeave={() => {
                        setShowNestedDropdown3(false);
                      }}
                    >
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/express-entry"
                          onMouseEnter={() => setDoubleNested3(true)}
                          onMouseLeave={() => setDoubleNested3(false)}
                        >
                          Express Entry
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested3 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested3(true)}
                          onMouseLeave={() => setDoubleNested3(false)}
                        >
                          <Link href="/federal-skilled-worker-program">
                            FSWP
                          </Link>
                          <Link href="/federal-skilled-trades-program">
                            FSTP
                          </Link>
                          <Link href="/canadian-experience-class">CEC</Link>
                          <Link href="/category-based">Category Based</Link>
                          <Link href="/transport-occupation">
                            Transport Occupations
                          </Link>
                        </div>
                      </div>

                      {/* // */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/pilot-programs"
                          onMouseEnter={() => setDoubleNested4(true)}
                          onMouseLeave={() => setDoubleNested4(false)}
                        >
                          Pilot Program
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested4 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested4(true)}
                          onMouseLeave={() => setDoubleNested4(false)}
                        >
                          <Link href="/agri-food-pilot-program">
                            Agri Food Pilot
                          </Link>
                        </div>
                      </div>

                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/pnp"
                          onMouseEnter={() => setDoubleNested7(true)}
                          onMouseLeave={() => setDoubleNested7(false)}
                        >
                          PNP
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested7 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested7(true)}
                          onMouseLeave={() => setDoubleNested7(false)}
                        >
                          <Link href="/bridging-open-work-permit-lp">
                            BCPNP
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Link href="/rnip">RNIP</Link>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="/temporary-resident-permit-draft"
                      onMouseEnter={() => setShowNestedDropdown2(true)}
                      onMouseLeave={() => setShowNestedDropdown2(false)}
                    >
                      Temporary Residency
                    </Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown2 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => setShowNestedDropdown2(true)}
                      onMouseLeave={() => setShowNestedDropdown2(false)}
                    >
                      {/* Super Visa */}
                      <Link href="/super-visa">Super Visa</Link>

                      {/* Visitor Visa with subheadings */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/visitor-visa"
                          onMouseEnter={() => setDoubleNestedVisitorVisa(true)}
                          onMouseLeave={() => setDoubleNestedVisitorVisa(false)}
                        >
                          Visitor Visa
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNestedVisitorVisa ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNestedVisitorVisa(true)}
                          onMouseLeave={() => setDoubleNestedVisitorVisa(false)}
                        >
                          <Link href="/business-visitor-visa">
                            Business Visitor Visa
                          </Link>
                          <Link href="/dual-intent-visa">Dual Intent Visa</Link>
                          <Link href="/super-visa">Super Visa</Link>
                          <Link href="/reconsideration">
                            Reconsideration for Refusal
                          </Link>
                        </div>
                      </div>

                      <Link href="/temporary-resident-permit-draft">
                        Temporary Resident Permits
                      </Link>

                      {/* Spousal Permit with subheadings */}

                      {/* Restoration */}
                      <Link href="/restoration-status-draft">Restoration</Link>
                      <Link href="/extensions-draft">Extend Stay</Link>
                      <Link href="/flagpoling">Flagpoling</Link>

                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/spousal-open-work-permit"
                          onMouseEnter={() =>
                            setDoubleNestedSpousalPermit(true)
                          }
                          onMouseLeave={() =>
                            setDoubleNestedSpousalPermit(false)
                          }
                        >
                          Spousal Permit
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNestedSpousalPermit ? styles.showNested : null
                          }`}
                          onMouseEnter={() =>
                            setDoubleNestedSpousalPermit(true)
                          }
                          onMouseLeave={() =>
                            setDoubleNestedSpousalPermit(false)
                          }
                        >
                          <Link href="/spousal-open-work-permit">
                            For Spouse of Worker
                          </Link>
                          <Link href="/international-graduate-program">
                            For Spouse of Student
                          </Link>
                          <Link href="/open-work-permit">
                            PR Open Work Permit, Inland
                          </Link>
                          {/* <Link href="/cby">Cby</Link> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="/student-visa"
                      onMouseEnter={() => setShowNestedDropdown6(true)}
                      onMouseLeave={() => setShowNestedDropdown6(false)}
                    >
                      Student Visa
                    </Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown6 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => setShowNestedDropdown6(true)}
                      onMouseLeave={() => setShowNestedDropdown6(false)}
                    >
                      {/* Outside Canada with subheadings */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/outside-cananda"
                          onMouseEnter={() =>
                            setDoubleNestedOutsideCanada(true)
                          }
                          onMouseLeave={() =>
                            setDoubleNestedOutsideCanada(false)
                          }
                        >
                          Outside Canada
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNestedOutsideCanada ? styles.showNested : null
                          }`}
                          onMouseEnter={() =>
                            setDoubleNestedOutsideCanada(true)
                          }
                          onMouseLeave={() =>
                            setDoubleNestedOutsideCanada(false)
                          }
                        >
                          <Link href="/sds">SDS</Link>
                          <Link href="/non-sds">NON SDS</Link>
                        </div>
                      </div>

                      {/* Inside Canada with subheadings */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/inside-canada"
                          onMouseEnter={() => setDoubleNestedInsideCanada(true)}
                          onMouseLeave={() =>
                            setDoubleNestedInsideCanada(false)
                          }
                        >
                          Inside Canada
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNestedInsideCanada ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNestedInsideCanada(true)}
                          onMouseLeave={() =>
                            setDoubleNestedInsideCanada(false)
                          }
                        >
                          <Link href="/change-college-program">
                            Change of College Program
                          </Link>
                          <Link href="/visitor-to-student">
                            Visitor to Student
                          </Link>
                        </div>
                      </div>

                      {/* Other menu items */}
                      <Link href="/study-permit-minors">
                        Study Permit Minors
                      </Link>
                    </div>
                  </div>
                  {/*  */}
                  {/* // */}

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="/family-reunification-sponsorship"
                      onMouseEnter={() => setShowNestedDropdown4(true)}
                      onMouseLeave={() => setShowNestedDropdown4(false)}
                    >
                      Family Reunification
                    </Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown4 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => setShowNestedDropdown4(true)}
                      onMouseLeave={() => setShowNestedDropdown4(false)}
                    >
                      <Link href="/spousal-open-work-permit">
                        Spousal Permit
                      </Link>
                      <Link href="/dependent-children">Dependent Children</Link>
                      <Link href="/humanitarian-compassionate">H & C</Link>
                      <Link href="/orphan">Orphan</Link>
                      <Link href="/adoption">Adoption</Link>
                      {/* <Link href="/spouse">Spouse</Link> */}
                    </div>
                  </div>

                  {/* // */}

                  {/*  */}

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="/parents-grandparents"
                      onMouseEnter={() => setShowNestedDropdown5(true)}
                      onMouseLeave={() => setShowNestedDropdown5(false)}
                    >
                      Parents and Grandparents
                    </Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown5 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => {
                        setShowNestedDropdown5(true);
                      }}
                      onMouseLeave={() => {
                        setShowNestedDropdown5(false);
                      }}
                    >
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="#"
                          onMouseEnter={() => setDoubleNested1(true)}
                          onMouseLeave={() => setDoubleNested1(false)}
                        >
                          Work Permit
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested1 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested1(true)}
                          onMouseLeave={() => setDoubleNested1(false)}
                        >
                          <Link href="/open-work-permit">Open Work Permit</Link>
                          <Link href="/bridging-open-work-permit-lp">BOWP</Link>
                          <Link href="/pgwp">PGWP</Link>
                        </div>
                      </div>
                      {/* // */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="#"
                          onMouseEnter={() => setDoubleNested2(true)}
                          onMouseLeave={() => setDoubleNested2(false)}
                        >
                          LMIA{" "}
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested2 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested2(true)}
                          onMouseLeave={() => setDoubleNested2(false)}
                        >
                          <Link href="/low-wage-lmia">Low Wage Lmia</Link>
                          <Link href="/agriculture-stream-lmia">
                            Seasonal Agricultural
                          </Link>
                          <Link href="/global-stream-lmia">Global Talent</Link>
                          <Link href="/pathways-for-caregiver">Caregiver</Link>
                        </div>
                      </div>
                      {/* // */}
                      <Link href="/pr-renewal">PR Renewal</Link>
                      <Link href="/citizenship">Citizenship</Link>
                    </div>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link href="/previous-draw-history">
                      Prevoius Draw History
                    </Link>
                  </div>
                </div>
              </div>

              {/* BLOGS */}
              <Link href="/blogs">BLOGS</Link>

              {/* NEWS */}
              <Link href="/news">NEWS</Link>

              {/* CALCULATORS Menu with Dropdown */}
              <div className={styles.relativeDiv}>
                <Link
                  href="#"
                  onMouseEnter={() => setShowCalculatorsDropdown(true)}
                  onMouseLeave={() => setShowCalculatorsDropdown(false)}
                >
                  CALCULATORS
                </Link>
                <div
                  className={`${styles.calculatorsDropdown} ${
                    showCalculatorsDropdown
                      ? styles.showCalculatorsDropdown
                      : null
                  }`}
                  onMouseEnter={() => setShowCalculatorsDropdown(true)}
                  onMouseLeave={() => setShowCalculatorsDropdown(false)}
                >
                  <Link href="/Federal-Skilled">FSW Calculator</Link>
                  <Link href="/clb-ilets-calculator">CLB Calculator</Link>
                  <Link href="/bcpnp-calculator">BCPNP Calculator</Link>
                </div>
              </div>

              {/* CONTACT */}
              <Link href="/contact-us">CONTACT</Link>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSubmit}>
              <div className={styles.searchBar}>
                <div className={styles.inputWrapper}>
                  <Search
                    className={styles.searchIcon}
                    width={20}
                    height={20}
                  />
                  <input
                    type="text"
                    className={styles.input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={styles.button}>
                  Search here
                </button>
              </div>
            </form>

            {/* Hamburger Icon */}
            <div className={styles.hamburger} onClick={toggleSidebar}>
              {/* &#9776; */}{" "}
              <Image
                height={50}
                width={100} // Arbitrary number, Next.js auto-adjusts it
                src={"https://www.svgrepo.com/show/493683/hamburger-2-menu-mobile.svg"}
                className={styles.hamburgerColoredIcon}
                alt="wee"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`${styles.sidebar} ${
              showSidebar ? styles.showSidebar : ""
            }`}
          >
            {/* ///// */}
            <div className={styles.sidebarContent}>
              <div className={styles.closeBtn} onClick={toggleSidebar}>
                <Image height={30} width={30} src={"https://www.svgrepo.com/show/474223/close-circle.svg"}/>
              </div>
              <Link href="/" className={styles.sidebarLink}>
                HOME
              </Link>
              <div className={styles.dropdown}>
                <Link href="#" className={styles.dropbtn}>
                  SERVICES
                  <span className={styles.arrow}>▼</span>
                </Link>
                <div className={styles.dropdownContent}>
                  {/* Federal Skilled with Clickable Dropdown */}
                  <div className={styles.subDropdown}>
                    <Link href="/permanent-residency" onClick={toggleFederalSkilled}>
                      Permanent Residency
                      <span className={styles.arrow}>▼</span>
                    </Link>
                    {isFederalSkilledOpen && (
                      <div className={styles.subDropdownContent}>
                        <div className={styles.subSubDropdown}>
                          <Link href="/permanent-residency">
                            Permanent Residency
                          </Link>
                          <Link
                            href="/express-entry"
                            onClick={toggleFederalSkilledProgram}
                          >
                            Express Entry
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledProgramOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/express-entry">Express Entry</Link>
                              <Link href="/federal-skilled-worker-program">
                                FSWP
                              </Link>
                              <Link href="/federal-skilled-trades-program">
                                FSTP
                              </Link>
                              <Link href="/canadian-experience-class">CEC</Link>
                              <Link href="/category-based">Category Based</Link>
                              <Link href="/transport-occupation">
                                Transport Occupations
                              </Link>
                            </div>
                          )}
                        </div>
                        <div className={styles.subSubDropdown}>
                          <Link href="#" onClick={toggleFederalSkilledProgram}>
                            Pilot Programs
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledProgramOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/pilot-programs">Pilot Programs</Link>
                              <Link href="/agri-food-pilot-program">
                                Agri Food Pilot
                              </Link>
                            </div>
                          )}
                        </div>
                        <div>
                          <Link href="/rnip">RNIP</Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Temporary Residency with Subheadings */}
                  <div className={styles.subDropdown}>
                    <Link href="#" onClick={toggleTemporaryResidency}>
                      Temporary Residency
                      <span className={styles.arrow}>▼</span>
                    </Link>
                    {isTemporaryResidencyOpen && (
                      <div className={styles.subDropdownContent}>
                        <Link href="/temporary-resident-permit-draft">
                          Temporary Residency
                        </Link>
                        <Link href="/super-visa">Super Visa</Link>

                        <div className={styles.subSubDropdown}>
                          <Link href="#" onClick={toggleVisitorVisa}>
                            Visitor Visa
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isVisitorVisaOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/visitor-visa">Visitor Visa</Link>
                              <Link href="/business-visitor-visa">
                                Business Visitor Visa
                              </Link>
                              <Link href="/dual-intent-visa">
                                Dual Intent Visa
                              </Link>
                              <Link href="/reconsideration">
                                Reconsideration for Refusal
                              </Link>
                            </div>
                          )}
                        </div>

                        <Link href="/temporary-resident-permit-draft">
                          Temporary Resident Permits
                        </Link>
                        <Link href="/restoration-status-draft">
                          Restoration
                        </Link>
                        <Link href="/extensions-draft">Extend Stay</Link>
                        <Link href="/flagpoling">Flagpoling</Link>

                        <div className={styles.subSubDropdown}>
                          <Link href="#" onClick={toggleSpousalPermit}>
                            Spousal Permit
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isSpousalPermitOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/spousal-open-work-permit">
                                For Spouse of Worker
                              </Link>
                              <Link href="/international-graduate-program">
                                For Spouse of Student
                              </Link>
                              <Link href="/open-work-permit">
                                PR Open Work Permit, Inland
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Student Visa with Subheadings */}
                  <div className={styles.subDropdown}>
                    <Link href="#" onClick={toggleStudentVisa}>
                      Student Visa
                      <span className={styles.arrow}>▼</span>
                    </Link>
                    {isStudentVisaOpen && (
                      <div className={styles.subDropdownContent}>
                        <div className={styles.subSubDropdown}>
                          <Link href="/student-visa">Student Visa</Link>
                          <Link href="#" onClick={toggleOutsideCanada}>
                            Outside Canada
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isOutsideCanadaOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/outside-canada">Outside Canada</Link>
                              <Link href="/sds">SDS</Link>
                              <Link href="/non-sds">NON SDS</Link>
                            </div>
                          )}
                        </div>

                        <div className={styles.subSubDropdown}>
                          <Link href="#" onClick={toggleInsideCanada}>
                            Inside Canada
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isInsideCanadaOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/inside-canada">Inside Canada</Link>
                              <Link href="/change-college-program">
                                Change of College Program
                              </Link>
                              <Link href="/visitor-to-student">
                                Visitor to Student
                              </Link>
                            </div>
                          )}
                        </div>

                        <Link href="/study-permit-minors">
                          Study Permit Minors
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Family Reunification with Subheadings */}
                  <div className={styles.subDropdown}>
                    <Link href="#" onClick={toggleFamilyReunification}>
                      Family Reunification
                      <span className={styles.arrow}>▼</span>
                    </Link>
                    {isFamilyReunificationOpen && (
                      <div className={styles.subDropdownContent}>
                        <Link href="/family-reunification-sponsorship">
                          Family Reunification
                        </Link>
                        <Link href="/spousal-open-work-permit">
                          Spousal Permit
                        </Link>
                        <Link href="/dependent-children">
                          Dependent Children
                        </Link>
                        <Link href="/humanitarian-compassionate">H & C</Link>
                        <Link href="/orphan">Orphan</Link>
                        <Link href="/adoption">Adoption</Link>
                        {/* <Link href="/spouse">Spouse</Link> */}
                      </div>
                    )}
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link href="/previous-draw-history">
                      Previous Draw History
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.subDropdown}>
                <Link href="#" onClick={toggleCalculators}>
                  CALCULATORS
                  <span className={styles.arrow} style={{ marginLeft: "73px" }}>
                    ▼
                  </span>
                </Link>
                {isCalculatorsOpen && (
                  <div className={styles.subDropdownContent}>
                    {/* <Link href="/calculators">CALCULATORS</Link> */}
                    <Link href="/Federal-Skilled">FSWP Calculator</Link>
                    <Link href="/clb-ilets-calculator">CLB Calculator</Link>
                    <Link href="/bcpnp-calculator">BCPNP Calculator</Link>
                  </div>
                )}
              </div>

              {/* Separate links below the SERVICES section */}
              <Link href="/blogs" className={styles.sidebarLink}>
                BLOGS
              </Link>
              <Link href="/news" className={styles.sidebarLink}>
                NEWS
              </Link>
              <Link href="/about-us" className={styles.sidebarLink}>
                ABOUT
              </Link>
              <Link href="/contact-us" className={styles.sidebarLink}>
                CONTACT
              </Link>
            </div>
          </div>

          <div
            className={`${styles.contactNavbar} ${
              hideContactNavbar ? styles.hideContactNumber : null
            }`}
          >
            <div className={styles.contactInfo}>
              <div className={styles.location}>
                {showBlue ? (
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={LocationBlue}
                    alt="Location Blue"
                    className={styles.icon}
                  />
                ) : (
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={LocationIcon}
                    alt="Location"
                    className={styles.icon}
                  />
                )}
                <span
                  className={styles.lowerFooterText}
                  style={showBlue ? { color: "#164c95" } : { color: "white" }}
                >
                  <Link
                    href="https://g.co/kgs/9BZVS85"
                    className={styles.lowerFooterText}
                    style={showBlue ? { color: "#164c95" } : { color: "white" }}
                  >
                    {" "}
                    Vancouver
                  </Link>
                </span>
              </div>
              <div className={styles.email}>
                {showBlue ? (
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={EmailBlue}
                    alt="Email blue"
                    className={styles.icon}
                  />
                ) : (
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={EmailIcon}
                    alt="Email"
                    className={styles.icon}
                  />
                )}

                <span
                  className={styles.lowerFooterText}
                  style={showBlue ? { color: "#164c95" } : { color: "white" }}
                >
                  info@brightlightimmigration.ca
                </span>
              </div>
            </div>
            <div className={styles.socialMedia}>
              {showBlue ? (
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1"
                >
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={Tiktokblue}
                    alt="tik-tok"
                  />
                </Link>
              ) : (
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1"
                >
                  <TikTokIcon className={styles.socialIcon} />
                </Link>
              )}
              {showBlue ? (
                <Link
                  target="_blank"
                  href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198"
                >
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={Linkedinblue}
                    alt="linkedin"
                  />
                </Link>
              ) : (
                <Link
                  target="_blank"
                  href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198"
                >
                  <LinkedInIcon className={styles.socialIcon} />
                </Link>
              )}
              {showBlue ? (
                <Link
                  target="_blank"
                  href="https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p"
                >
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={Instagramblue}
                    alt="insta"
                  />
                </Link>
              ) : (
                <Link
                  target="_blank"
                  href="https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p"
                >
                  <InstagramIcon className={styles.socialIcon} />
                </Link>
              )}
              {showBlue ? (
                <Link
                  target="_blank"
                  href="https://www.facebook.com/brightlightimmigration"
                >
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={Facebookblue}
                    alt="fb"
                  />
                </Link>
              ) : (
                <Link
                  target="_blank"
                  href="https://www.facebook.com/brightlightimmigration"
                >
                  <FacebookIcon className={styles.socialIcon} />
                </Link>
              )}
              {showBlue ? (
                <Link
                  target="_blank"
                  href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA"
                >
                  <Image
                    height={50}
                    width={100} // Arbitrary number, Next.js auto-adjusts it
                    src={Youtubeblue}
                    alt="youtube"
                  />
                </Link>
              ) : (
                <Link
                  target="_blank"
                  href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA"
                >
                  <YouTubeIcon className={styles.socialIcon} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
