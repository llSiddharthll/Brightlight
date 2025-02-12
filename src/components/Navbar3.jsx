import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar1.module.css";
import IconGear  from "../assets/gearIcon.svg";
import RightArrow  from "../assets/rightArrow.svg";
import PhoneIcon  from "../assets/phoneIcon.svg";
import BrightlightBlueLogo from "../assets/brlightlight-icon.webp";
import LocationIcon from "../assets/location-white.png";
import EmailIcon from "../assets/mail-white.png";
import EmailBlue from "../assets/mailBlue.png";
import LocationBlue from "../assets/locationBlue.png";
import Search  from "../assets/search.svg";
import TikTokIcon  from "../assets/tiktok.svg";
import LinkedInIcon  from "../assets/linkedin.svg";
import InstagramIcon  from "../assets/instagram.svg";
import FacebookIcon  from "../assets/facebook.svg";
import YouTubeIcon  from "../assets/youtube.svg";
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

const Navbar3 = (props) => {
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

  const [isFederalSkilledOpenTwo, setIsFederalSkilledOpenTwo] = useState(false);
  const [isFederalSkilledProgramOpenTwo, setIsFederalSkilledProgramOpenTwo] =
    useState(false);

  const [isFederalSkilledOpenThree, setIsFederalSkilledOpenThree] =
    useState(false);
  const [isFederalSkilledProgramOpenFour, setIsFederalSkilledProgramOpenFour] =
    useState(false);

  const [isFederalSkilledProgramOpenFive, setIsFederalSkilledProgramOpenFive] =
    useState(false);

  const [isFederalSkilledProgramOpenSix, setIsFederalSkilledProgramOpenSix] =
    useState(false);

  const [
    isFederalSkilledProgramOpenSeven,
    setIsFederalSkilledProgramOpenSeven,
  ] = useState(false);

  const [
    isFederalSkilledProgramOpenEight,
    setIsFederalSkilledProgramOpenEight,
  ] = useState(false);

  const [isFederalSkilledProgramOpenNine, setIsFederalSkilledProgramOpenNine] =
    useState(false);

  const [isFederalSkilledProgramOpenTen, setIsFederalSkilledProgramOpenTen] =
    useState(false);

  const [isFederalSkilledProgramOpenEl, setIsFederalSkilledProgramOpenEl] =
    useState(false);

  const [isFederalSkilledProgramOpenTw, setIsFederalSkilledProgramOpenTw] =
    useState(false);

  const [isFederalSkilledProgramOpenTh, setIsFederalSkilledProgramOpenTh] =
    useState(false);

  const [isFederalSkilledProgramOpenFt, setIsFederalSkilledProgramOpenFt] =
    useState(false);

  const toggleFederalSkilled = (e) => {
    e.preventDefault();
    setIsFederalSkilledOpen(!isFederalSkilledOpen);
  };

  const toggleFederalSkilledProgram = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpen(!isFederalSkilledProgramOpen);
  };
  const toggleFederalSkilledProgramTwo = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenTwo(!isFederalSkilledProgramOpenTwo);
  };
  const toggleFederalSkilledProgramThree = (e) => {
    e.preventDefault();
    setIsFederalSkilledOpenThree(!isFederalSkilledOpenThree);
  };
  const toggleFederalSkilledProgramFour = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenFour(!isFederalSkilledProgramOpenFour);
  };
  const toggleFederalSkilledProgramFive = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenFive(!isFederalSkilledProgramOpenFive);
  };
  const toggleFederalSkilledProgramSix = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenSix(!isFederalSkilledProgramOpenSix);
  };
  const toggleFederalSkilledProgramSeven = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenSeven(!isFederalSkilledProgramOpenSeven);
  };
  const toggleFederalSkilledProgramEight = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenEight(!isFederalSkilledProgramOpenEight);
  };
  const toggleFederalSkilledProgramNine = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenNine(!isFederalSkilledProgramOpenNine);
  };
  const toggleFederalSkilledProgramTen = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenTen(!isFederalSkilledProgramOpenTen);
  };

  const toggleFederalSkilledProgramEl = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenEl(!isFederalSkilledProgramOpenEl);
  };
  const toggleFederalSkilledProgramTw = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenTw(!isFederalSkilledProgramOpenTw);
  };
  const toggleFederalSkilledProgramTh = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenTh(!isFederalSkilledProgramOpenTh);
  };
  const toggleFederalSkilledProgramFt = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenFt(!isFederalSkilledProgramOpenFt);
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
  let [showNestedDropdown8, setShowNestedDropdown8] = useState(false);
  let [showNestedDropdown9, setShowNestedDropdown9] = useState(false);
  let [showNestedDropdown10, setShowNestedDropdown10] = useState(false);
  let [showNestedDropdown11, setShowNestedDropdown11] = useState(false);
  let [showNestedDropdown12, setShowNestedDropdown12] = useState(false);
  let [showNestedDropdown13, setShowNestedDropdown13] = useState(false);
  let [doubleNested1, setDoubleNested1] = useState(false);
  let [doubleNested2, setDoubleNested2] = useState(false);
  let [doubleNested3, setDoubleNested3] = useState(false);
  let [doubleNested4, setDoubleNested4] = useState(false);
  let [doubleNested7, setDoubleNested7] = useState(false);
  let [showHamburgerServicesDropdown, setShowHamburgerServicesDropdown] =
    useState(false);
  const dropdownRef = useRef(null);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setShowHamburgerServicesDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

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
              <Image src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
            </Link>

            {showBlue ? (
              <Link href="/" className={`${styles.logo} ${styles.logoMobile}`}>
                <Image src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
              </Link>
            ) : (
              <Link href="/" className={`${styles.logo} ${styles.logoMobile}`}>
                <Image src={whiteLogo} alt="Brightlight Blue Logo" />
              </Link>
            )}

            <div className={styles.mainNavbar}>
              <Link href="/" className={styles.sidebarLink}>
                HOME
              </Link>
              <div className={styles.relativeDiv}>
                <Link
                  href="/more-services"
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
                          <Link href="/federal-skilled-worker-program">FSWP</Link>
                          <Link href="/federal-skilled-trades-program">FSTP</Link>
                          <Link href="/canadian-experience-class">CEC</Link>
                          <div
                            className={`${styles.relativeDiv} ${styles.flex}`}
                          >
                            <Link
                              href="/category-based"
                              onMouseEnter={() => setShowNestedDropdown7(true)}
                              onMouseLeave={() => setShowNestedDropdown7(false)}
                            >
                              Category Based
                            </Link>
                            <div
                              className={`${styles.doubleNested} ${
                                showNestedDropdown7 ? styles.showNested : null
                              }`}
                              onMouseEnter={() => setShowNestedDropdown7(true)}
                              onMouseLeave={() => setShowNestedDropdown7(false)}
                            >
                              <Link href="/french-targeted-draw">
                                French Language Proficiency
                              </Link>
                              <Link href="/healthcare-targeted-draw">
                                Healthcare Occupations
                              </Link>
                              <Link href="/stem-targeted-draw">STEM Occupations</Link>
                              <Link href="/trade-occupation-targeted-draw">
                                Trade Occupations
                              </Link>
                              <Link href="/transport-occupation-targeted-draw">
                                Transport Occupation Targeted Draws
                              </Link>
                              <Link href="/agriculture-agri-food-occupation">
                                Agriculture and Agri-Food Occupation
                              </Link>
                            </div>
                          </div>
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
                          <Link href="/agri-food-pilot-program">Agri Food Pilot</Link>
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
                          <div
                            className={`${styles.relativeDiv} ${styles.flex}`}
                          >
                            <Link
                              href="/bc-pnp"
                              onMouseEnter={() => setShowNestedDropdown(true)}
                              onMouseLeave={() => setShowNestedDropdown(false)}
                            >
                              BCPNP
                            </Link>
                            <div
                              className={`${styles.doubleNested} ${
                                showNestedDropdown ? styles.showNested : null
                              }`}
                              onMouseEnter={() => setShowNestedDropdown(true)}
                              onMouseLeave={() => setShowNestedDropdown(false)}
                            >
                              <Link href="/skilled-worker-stream">
                                Skilled Worker
                              </Link>
                              <Link href="/health-authority-stream">
                                Health Authority
                              </Link>
                              <Link href="/entry-level-semi-skilled">
                                Entry Level and Semi-Skilled (ELSS)
                              </Link>
                              <Link href="/international-graduate-program">
                                International Graduate
                              </Link>
                              <Link href="/international-post-graduate-program">
                                International Post-Graduate
                              </Link>
                              <Link href="/priorities-program">
                                Program Priorities
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Link href="/rnip">RNIP</Link>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="/temporary-resident"
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
                          {/* <Link href="/super-visa">Super Visa</Link> */}
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
                          Spousal Open Work Permit
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
                          <Link href="/common-law-partner-temporary">
                            Open Work Permit - For Spouse of Worker
                          </Link>
                          <Link href="/cby">
                            Open Work Permit - For Spouse of Student
                          </Link>
                          <Link href="/open-work-permit-for-spouse-inland">
                            PR Open Work Permit, Inland
                          </Link>
                          <Link href="/francophone-mobility-program">
                            Francophone Mobility Program
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
                          href="/outside-canada"
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
                          <Link href="/visitor-to-student">Visitor to Student</Link>
                          <Link href="/change-college-program">DLI Change</Link>
                          {/* <Link href="#">Admission</Link> */}
                          {/* <Link href="#">Transfer DLI</Link> */}
                        </div>
                      </div>

                      {/* Other menu items */}
                      <Link href="/study-permit-minors">Study Permit For Minor</Link>
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
                      Family Reunification & Sponsorship
                    </Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown4 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => setShowNestedDropdown4(true)}
                      onMouseLeave={() => setShowNestedDropdown4(false)}
                    >
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/spouse-common-law-sponsership"
                          onMouseEnter={() => setShowNestedDropdown8(true)}
                          onMouseLeave={() => setShowNestedDropdown8(false)}
                        >
                          Spousal Sponsorship
                        </Link>
                        <div
                          className={`${styles.permanentNestedSection} ${
                            showNestedDropdown8 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setShowNestedDropdown8(true)}
                          onMouseLeave={() => setShowNestedDropdown8(false)}
                        >
                          <Link href="/spouse-inland">Inside Canada</Link>
                          <Link href="/spouse-outland">Outside Canada</Link>
                          <Link href="/same-sex">Same Sex</Link>
                        </div>
                      </div>

                      <Link href="/ParentsGrandparents">Parents / Grandparents</Link>
                      <Link href="/dependent-children">Dependent Children</Link>
                      <Link href="/humanitarian-compassionate">H & C</Link>
                      <Link href="/orphan">Orphan</Link>
                      <Link href="/adoption">Adoption</Link>
                      <Link href="/lonely-canadian">Lonely Canadian</Link>
                    </div>
                  </div>

                  {/* // */}

                  {/*  */}

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="/work-permit"
                      onMouseEnter={() => setShowNestedDropdown5(true)}
                      onMouseLeave={() => setShowNestedDropdown5(false)}
                    >
                      Work Permit
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
                          href="/lmia-reviewed"
                          onMouseEnter={() => setDoubleNested1(true)}
                          onMouseLeave={() => setDoubleNested1(false)}
                        >
                          LMIA
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested1 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested1(true)}
                          onMouseLeave={() => setDoubleNested1(false)}
                        >
                          <Link href="/low-wage-lmia">High Wage / Low Wage</Link>
                          <Link href="/agriculture-stream-lmia">Agriculture</Link>
                          {/* <Link href="#">PR Supporting</Link> */}
                          <Link href="/global-stream-lmia">Global Talent Stream</Link>
                          <Link href="/in-home-caregiver-program-lp">
                            Caregiver LMIA
                          </Link>
                        </div>
                      </div>

                      {/* // */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/open-work-permit"
                          onMouseEnter={() => setDoubleNested2(true)}
                          onMouseLeave={() => setDoubleNested2(false)}
                        >
                          Open Work Permit{" "}
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested2 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested2(true)}
                          onMouseLeave={() => setDoubleNested2(false)}
                        >
                          <Link href="/bridging-open-work-permit-lp">
                            BOWP – Bridging Open Work Permit
                          </Link>
                          <Link href="/pgwp">
                            PGWP – Post Graduate Open Work Permit
                          </Link>
                          <Link href="/spousal-open-work-permit">
                            SOWP – Spousal Open Work Permit
                          </Link>
                          <Link href="/francophone-mobility-program">
                            Francophone Mobility Program
                          </Link>
                          <Link href="/open-work-vulnerable-lp">
                            Vulnerable Worker
                          </Link>
                          <Link href="/openWork-dependent-children">
                            Dependent Child of Worker
                          </Link>
                        </div>
                      </div>
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          href="/spouse-common-law-sponsership"
                          onMouseEnter={() => setShowNestedDropdown10(true)}
                          onMouseLeave={() => setShowNestedDropdown10(false)}
                        >
                          Spousal Permit
                        </Link>
                        <div
                          className={`${styles.doubleNested} ${
                            showNestedDropdown10 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setShowNestedDropdown10(true)}
                          onMouseLeave={() => setShowNestedDropdown10(false)}
                        >
                          <Link href="/spousal-open-work-permit">
                            Open Work Permit - For Spouse of Worker
                          </Link>
                          <Link href="/cby">
                            Open Work Permit - For Spouse of Student
                          </Link>
                          <Link href="/open-work-permit">
                            Open Work Permit - For Spouse of PR
                          </Link>
                          {/* <Link href="/cby">Cby</Link> */}
                        </div>
                      </div>
                      <Link href="/francophone-mobility-program">
                        Francophone Mobility Program
                      </Link>
                    </div>
                  </div>
                  <Link href="/lmia-reviewed">LMIA</Link>
                  <Link href="/francophone-mobility-program">
                    Francophone Mobility Program
                  </Link>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="/pathways-for-caregiver"
                      onMouseEnter={() => setShowNestedDropdown9(true)}
                      onMouseLeave={() => setShowNestedDropdown9(false)}
                    >
                      Caregiver
                    </Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown9 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => {
                        setShowNestedDropdown9(true);
                      }}
                      onMouseLeave={() => {
                        setShowNestedDropdown9(false);
                      }}
                    >
                      <Link href="/in-home-caregiver-program-lp">
                        Inside - With LMIA
                      </Link>
                      <Link href="/permanent-residence-pathways-caregivers-lp">
                        PR Pathways for Care-Giver
                      </Link>
                      {/* <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <Link
                          onMouseEnter={() => setShowNestedDropdown10(true)}
                          onMouseLeave={() => setShowNestedDropdown10(false)}
                        >
                          Outside
                        </Link>
                        <div
                          className={`${styles.permanentNestedSection} ${
                            showNestedDropdown10 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => {
                            setShowNestedDropdown10(true);
                          }}
                          onMouseLeave={() => {
                            setShowNestedDropdown10(false);
                          }}
                        >
                          <Link>Home Child Care Provider Pilot</Link>
                          <Link>Home Support Worker</Link>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link href="/pr-renewal">PR Renewal</Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown11 ? styles.showNested : null
                      }`}
                    >
                      <Link href="/pr-renewal">PR Renewal</Link>
                    </div>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link href="/citizenship">Citizenship</Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown12 ? styles.showNested : null
                      }`}
                    >
                      <Link href="/citizenship">Citizenship</Link>
                    </div>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link
                      href="#"
                      onMouseEnter={() => setShowNestedDropdown13(true)}
                      onMouseLeave={() => setShowNestedDropdown13(false)}
                    >
                      Other Services
                    </Link>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown13 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => {
                        setShowNestedDropdown13(true);
                      }}
                      onMouseLeave={() => {
                        setShowNestedDropdown13(false);
                      }}
                    >
                      <Link href="/reconsideration">
                        Reconsideration of Refusal Decision
                      </Link>
                      <Link href="/additional-document">
                        Additional Document Request
                      </Link>
                      <Link href="/reply-to-pfl-page">PFL</Link>
                    </div>
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
                  <Link href="/Federal-Skilled">FSWP Calculator</Link>
                  <Link href="/clb-ilets-calculator">CLB Calculator</Link>
                  <Link href="/bcpnp-calculator">BCPNP Calculator</Link>
                  <Link href="/previous-draw-history">Previous Draws History</Link>
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
              <img
                src={showBlue ? hamBurgerIconBlue : hamBurgerIconWhite}
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
                &times;
              </div>
              <Link href="/" className={styles.sidebarLink}>
                HOME
              </Link>
              <div className={styles.dropdown}>
                <Link
                  href="#"
                  className={styles.dropbtn}
                  onClick={() =>
                    setShowHamburgerServicesDropdown(
                      !showHamburgerServicesDropdown
                    )
                  }
                  ref={dropdownRef}
                >
                  SERVICES
                  <span className={styles.arrow}>▼</span>
                </Link>
                <div
                  className={styles.dropdownContent}
                  style={
                    showHamburgerServicesDropdown
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {/* Federal Skilled with Clickable Dropdown */}
                  <div className={styles.subDropdown}>
                    <Link href="#" onClick={toggleFederalSkilled}>
                      Permanent Residency
                      <span className={styles.arrow}>▼</span>
                    </Link>
                    {isFederalSkilledOpen && (
                      <div className={styles.subDropdownContent}>
                        <div className={styles.subSubDropdown}>
                          <Link href="/permanent-residency">Permanent Residency</Link>
                          <Link href="#" onClick={toggleFederalSkilledProgram}>
                            Express Entry
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledProgramOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/express-entry">Express Entry</Link>
                              <Link href="/federal-skilled-worker-program">FSWP</Link>
                              <Link href="/federal-skilled-trades-program">FSTP</Link>
                              <Link href="/canadian-experience-class">CEC</Link>
                              <Link
                                href="#"
                                onClick={toggleFederalSkilledProgramTwo}
                              >
                                Category Based{" "}
                                <span className={styles.arrow}>▼</span>
                              </Link>
                              {isFederalSkilledProgramOpenTwo && (
                                <div className={styles.subSubDropdownContent}>
                                  <Link href="/category-based">Category Based</Link>
                                  <Link href="/french-targeted-draw">
                                    French Language Proficiency
                                  </Link>
                                  <Link href="/healthcare-targeted-draw">
                                    Healthcare Occupations
                                  </Link>
                                  <Link href="/stem-targeted-draw">
                                    STEM Occupationss
                                  </Link>
                                  <Link href="/trade-occupation-targeted-draw">
                                    Trade Occupations
                                  </Link>
                                  <Link href="/transport-occupation-targeted-draw">
                                    Transport Occupation Targeted Draws
                                  </Link>
                                  <Link href="/agriculture-agri-food-occupation">
                                    Agriculture and Agri-Food Occupation
                                  </Link>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className={styles.subSubDropdown}>
                          <Link
                            href="#"
                            onClick={toggleFederalSkilledProgramThree}
                          >
                            Pilot Programs
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledOpenThree && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/agri-food-pilot-program">
                                Agri Food Pilot
                              </Link>
                              <Link href="/pilot-programs"> Pilot Programs</Link>
                            </div>
                          )}
                        </div>
                        <div className={styles.subSubDropdown}>
                          <Link href="#" onClick={toggleFederalSkilledProgramFour}>
                            PNP
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledProgramOpenFour && (
                            <div className={styles.subSubDropdownContent}>
                              <Link
                                href="#"
                                onClick={toggleFederalSkilledProgramFive}
                              >
                                BCPNP
                                <span className={styles.arrow}>▼</span>
                              </Link>
                              {isFederalSkilledProgramOpenFive && (
                                <div className={styles.subSubDropdownContent}>
                                  <Link href="/pnp">PNP</Link>
                                  <Link href="/bc-pnp">BCPNP</Link>
                                  <Link href="/skilled-worker-stream">
                                    Skilled Worker
                                  </Link>
                                  <Link href="/health-authority-stream">
                                    Health Authority
                                  </Link>
                                  <Link href="/entry-level-semi-skilled">
                                    Entry Level and Semi-Skilled (ELSS)
                                  </Link>
                                  <Link href="/international-graduate-program">
                                    International Graduate
                                  </Link>
                                  <Link href="/international-post-graduate-program">
                                    International Post-Graduate
                                  </Link>
                                  <Link href="/priorities-program">
                                    Program Priorities
                                  </Link>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <Link href="/rnip">RNIP</Link>
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
                        <Link href="/temporary-resident">Temporary Residency</Link>
                        <Link href="/super-visa">Super Visa</Link>

                        <div className={styles.subSubDropdown}>
                          <Link href="#" onClick={toggleVisitorVisa}>
                            Visitor Visa
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isVisitorVisaOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/visitor-visa">Visitor Visa</Link>
                              <Link href="/business-visitor-visa">Business Visa</Link>
                              <Link href="/dual-intent-visa">Dual Intent Visa</Link>
                              {/* <Link href="#">Super Visa</Link> */}
                              <Link href="/reconsideration">
                                Reconsideration for Refusal
                              </Link>
                            </div>
                          )}
                        </div>

                        <Link href="/temporary-resident-permit-draft">
                          Temporary Resident Permits
                        </Link>
                        <Link href="/restoration-status-draft">Restoration</Link>
                        <Link href="/extensions-draft">Extend Stay</Link>
                        <Link href="/flagpoling">Flagpoling</Link>

                        <div className={styles.subSubDropdown}>
                          <Link href="#" onClick={toggleSpousalPermit}>
                            Spousal Open Work Permit
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isSpousalPermitOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/common-law-partner-temporary">
                                Open Work Permit - For Spouse of Worker
                              </Link>
                              <Link href="/cby">
                                Open Work Permit - For Spouse of Student
                              </Link>
                              <Link href="/open-work-permit">
                                Open Work Permit - For Spouse of PR
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
                              <Link href="/non-sds">Non SDS</Link>
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
                              <Link href="/visitor-to-student">
                                Visitor To Student
                              </Link>
                              <Link href="/change-college-program">DLI Change</Link>
                              {/* <Link href="#">Admission</Link>
                              <Link href="#">Transfer DLI</Link> */}
                            </div>
                          )}
                        </div>

                        <Link href="/study-permit-minors">Study Permit Minors</Link>
                      </div>
                    )}
                  </div>

                  {/* Family Reunification with Subheadings */}
                  <div className={styles.subDropdown}>
                    <Link href="#" onClick={toggleFamilyReunification}>
                      Family Reunification & Sponsorship
                      <span className={styles.arrow}>▼</span>
                    </Link>
                    {isFamilyReunificationOpen && (
                      <div className={styles.subDropdownContent}>
                        <Link href="/family-reunification-sponsorship">
                          Family Reunification & Sponsorship
                        </Link>
                        <div className={styles.subSubDropdown}>
                          <Link
                            href="#"
                            onClick={toggleFederalSkilledProgramSeven}
                          >
                            Spousal Sponsorship{" "}
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledProgramOpenSeven && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/spouse-common-law-sponsership">
                                Spousal Sponsorship
                              </Link>
                              <Link href="/spouse-inland">Inside Canada</Link>
                              <Link href="/spouse-outland">Outside Canada</Link>
                              <Link href="/same-sex">Same Sex</Link>
                            </div>
                          )}
                        </div>
                        <Link href="/dependent-children">Dependent Children</Link>
                        <Link href="/humanitarian-compassionate">H & C</Link>
                        <Link href="/orphan">Orphan</Link>
                        <Link href="/adoption">Adoption</Link>
                      </div>
                    )}
                  </div>
                  <div className={styles.subDropdown}>
                    <Link href="#" onClick={toggleFederalSkilledProgramSix}>
                      Work Permit <span className={styles.arrow}>▼</span>
                    </Link>
                    {isFederalSkilledProgramOpenSix && (
                      <div className={styles.subDropdownContent}>
                        <Link href="/work-permit">Work Permit</Link>
                        <div className={styles.subSubDropdown}>
                          <Link
                            href="#"
                            onClick={toggleFederalSkilledProgramEight}
                          >
                            LMIA
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledProgramOpenEight && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/low-wage-lmia">High Wage / Low Wage</Link>
                              <Link href="/agriculture-stream-lmia">
                                Agriculture Stream LMIA
                              </Link>
                              {/* <Link href="#">PR Supporting</Link> */}
                              <Link href="/global-stream-lmia">
                                Global Talent Stream
                              </Link>
                              <Link href="/in-home-caregiver-program-lp">
                                Caregiver LMIA
                              </Link>
                            </div>
                          )}

                          <Link href="#" onClick={toggleFederalSkilledProgramNine}>
                            Open Work Permit
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledProgramOpenNine && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/bridging-open-work-permit-lp">
                                BOWP – Bridging Open Work Permit
                              </Link>
                              <Link href="/pgwp">
                                PGWP – Post Graduate Open Work Permit
                              </Link>
                              <Link href="/spousal-open-work-permit">
                                SOWP – Spousal Open Work Permit
                              </Link>
                              <Link href="/francophone-mobility-program">
                                Francophone Mobility Program
                              </Link>
                              <Link href="/open-work-vulnerable-lp">
                                Vulnerable Worker
                              </Link>
                              <Link href="/openWork-dependent-children">
                                Dependent Child of Worker
                              </Link>
                            </div>
                          )}
                          <Link href="#" onClick={toggleFederalSkilledProgramTw}>
                            Spousal Permit
                            <span className={styles.arrow}>▼</span>
                          </Link>
                          {isFederalSkilledProgramOpenTw && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="/spouse-common-law-sponsership">
                                Spousal Permit
                              </Link>
                              <Link href="/spousal-open-work-permit">
                                Open Work Permit - For Spouse of Worker
                              </Link>
                              <Link href="/cby">
                                Open Work Permit - For Spouse of Student
                              </Link>
                              <Link href="/open-work-permit-for-spouse-inland">
                                PR Open Work Permit, Inland
                              </Link>
                              <Link href="/francophone-mobility-program">
                                Francophone Mobility Program
                              </Link>
                            </div>
                          )}

                          <Link href="/francophone-mobility-program">
                            Francophone Mobility Program
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <Link href="/lmia-reviewed">LMIA</Link>
                  <Link href="/francophone-mobility-program">
                    Francophone Mobility Program
                  </Link>
                  <div className={styles.subDropdown}>
                    <Link href="#" onClick={toggleFederalSkilledProgramTen}>
                      Caregiver <span className={styles.arrow}>▼</span>
                    </Link>
                    {isFederalSkilledProgramOpenTen && (
                      <div className={styles.subDropdownContent}>
                        <Link href="/pathways-for-caregiver">Caregiver</Link>
                        <Link href="/in-home-caregiver-program-lp">
                          Inside - With LMIA{" "}
                        </Link>
                        <Link href="/permanent-residence-pathways-caregivers-lp">
                          PR Pathways for Care-Giver
                        </Link>
                        <Link href="#" onClick={toggleFederalSkilledProgramEl}>
                          Outside <span className={styles.arrow}>▼</span>
                        </Link>
                        {/* <div className={styles.subSubDropdown}>
                          {isFederalSkilledProgramOpenEl && (
                            <div className={styles.subSubDropdownContent}>
                              <Link href="#">Home Child Care Provider Pilot</Link>
                              <Link href="#">Home Support Worker</Link>
                            </div>
                          )}
                        </div> */}
                      </div>
                    )}
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link href="/pr-renewal">PR Renewal</Link>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <Link href="/citizenship">Citizenship</Link>
                  </div>
                  <div className={styles.subDropdown}>
                    <Link href="#" onClick={toggleFederalSkilledProgramEl}>
                      Other Services <span className={styles.arrow}>▼</span>
                    </Link>
                    {isFederalSkilledProgramOpenEl && (
                      <div className={styles.subDropdownContent}>
                        <Link href="/reconsideration">
                          Reconsideration of Refusal Decision
                        </Link>
                        <Link href="/additional-document">
                          Additional Document Request
                        </Link>
                        <Link href="/reply-to-pfl-page">PFL</Link>
                      </div>
                    )}
                  </div>
                  <Link href="/more-services">More Services</Link>
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
                    <Link href="/previous-draw-history">Previous Draws History</Link>
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
                  <img
                    src={LocationBlue}
                    alt="Location Blue"
                    className={styles.icon}
                  />
                ) : (
                  <img
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
                    style={showBlue ? { color: "#164c95" } : { color: "white" }}  target="_blank"
                  >
                    Vancouver
                  </Link>
                </span>
              </div>
              <div className={styles.email}>
                {showBlue ? (
                  <img
                    src={EmailBlue}
                    alt="Email blue"
                    className={styles.icon}  target="_blank"
                  />
                ) : (
                  <img src={EmailIcon} alt="Email" className={styles.icon} />
                )}

                <span
                  className={styles.lowerFooterText}
                  style={showBlue ? { color: "#164c95" } : { color: "white" }}  target="_blank"
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
                  <img src={Tiktokblue} />
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
                  <img src={Linkedinblue} />
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
                  <img src={Instagramblue} />
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
                  <img src={Facebookblue} />
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
                  <img src={Youtubeblue} />
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

export default Navbar3;
