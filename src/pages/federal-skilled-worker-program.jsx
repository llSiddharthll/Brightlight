import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/FederalSkilledWorkerProgram.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";
import Link from "next/link";

const FederalSkilledWorkerProgram = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData, setPData] = useState([])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/federalSkillWorkerProgMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/federalSkilledWorkerProgam")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const sectionsRef = useRef([]);

const handleScroll = () => {
    sectionsRef.current.forEach((section) => {
      if (section) { // ✅ Check if section exists
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add(styles.visible);
        } else {
          section.classList.remove(styles.visible);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const extractStrongText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    const strongMatch = htmlString.match(/<strong>(.*?)<\/strong>/);
    return strongMatch ? strongMatch[1] : "";
  };

  const extractRemainingText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    return htmlString.replace(/<strong>.*?<\/strong>/, "").trim();
  };

  const fetchedValue91 = pData?.wcu1;
  const strongText91 = extractStrongText(fetchedValue91);
  const remainingText91 = extractRemainingText(fetchedValue91);

  const fetchedValue92 = pData?.wcu2;
  const strongText92 = extractStrongText(fetchedValue92);
  const remainingText92 = extractRemainingText(fetchedValue92);

  const fetchedValue93 = pData?.wcu3;
  const strongText93 = extractStrongText(fetchedValue93);
  const remainingText93 = extractRemainingText(fetchedValue93);

  const fetchedValue94 = pData?.wcu4;
  const strongText94 = extractStrongText(fetchedValue94);
  const remainingText94 = extractRemainingText(fetchedValue94);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://brightlightimmigration.ca/federal-skilled-worker-program" />
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Head>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.banner}>
          <div
            className={`${styles.bannerHeadingRotateParent} ${isDropdownOpen ? styles.active : ""
              }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>Quick Access</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("process")}>Process</p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container} id="container">
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          {pData?.WorkProgHeading}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
            {pData?.WorkProgPara1}
          </p>
          <p>
            {pData?.WorkProgPara2}
          </p>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
            {pData?.EligibilityHeading}
          </h2>
          <p>
            {pData?.EligPara}
          </p>
          <ul>
            <li>{pData?.e1}</li>
            <li>
              {pData?.e2}
            </li>
            <li>
              {pData?.e3}
            </li>
            <li>
              {pData?.e4}
            </li>
          </ul>

          <h3 className={styles.subheading} id="categories">
            {pData?.EligTableHeading}
          </h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{pData?.EligTableHead1}</th>
                <th>{pData?.EligTableHead2}</th>
                <th>{pData?.EligTableHead3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.EligTable1HeadLi1}</td>
                <td>{pData?.EligTable2HeadLi1}</td>
                <td>
                  {pData?.EligTable3HeadLi1}
                </td>
              </tr>
              <tr>
                <td>{pData?.EligTable1HeadLi2}</td>
                <td>{pData?.EligTable2HeadLi2}</td>
                <td>{pData?.EligTable3HeadLi2}</td>
              </tr>
              <tr>
                <td>{pData?.EligTable1HeadLi3}</td>
                <td>
                  {pData?.OccupReqTabHeading1}
                  <ul>
                    <li> {pData?.OccupReqTab1Li1}</li>
                    <li>{pData?.OccupReqTab1Li2}</li>
                    <li>{pData?.OccupReqTab1Li3}</li>
                  </ul>
                </td>
                <td>
                  {pData?.EligTable3HeadLi3}
                </td>
              </tr>
              <tr>
                <td>{pData?.EligTable1HeadLi4}</td>
                <td>
                  {pData?.OccupReqTabHeading2}
                  <ul>
                    <li>  {pData?.OccupReqTab2Li1}</li>
                    <li> {pData?.OccupReqTab2Li2}</li>
                    <li> {pData?.OccupReqTab2Li3}</li>
                  </ul>
                </td>
                <td>
                  {pData?.EligTable3HeadLi4}
                </td>
              </tr>
              <tr>
                <td>{pData?.EligTable1HeadLi5}</td>
                <td>
                  {pData?.OccupReqTabHeading3}
                  <ul>
                    <li> {pData?.OccupReqTab3Li1}</li>
                    <li> {pData?.OccupReqTab3Li2}</li>
                  </ul>
                </td>
                <td>
                  {pData?.EligTable3HeadLi5}
                </td>
              </tr>
              <tr>
                <td>{pData?.EligTable1HeadLi6}</td>
                <td>
                  {pData?.EligTable2HeadLi6}
                </td>
                <td>
                  {pData?.EligTable3HeadLi6}
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            {pData?.EligLastPara}
          </p>

          <section className={styles.expressEntry}>
            <h2 className={styles.subheading}>
              {pData?.AssessmentHeading}
            </h2>
            <p>
              {pData?.AssessmentPara}
            </p>
            <button
              className={styles.button}
              onClick={() => (window.location.href = "/federal-skilled")}
            >
              FSWP Calculator
            </button>
          </section>
        </section>

        <section
          className={`${styles.expressEntry} ${styles.section}`}
          id="expressEntry"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            {pData?.ExpressEntryHead}
          </h2>
          <p>
            For the latest updates on Express Entry draws, {" "}
            <Link href="/previous-draw-history" className={styles.link}>
              Click here
            </Link>
            .
          </p>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="Process"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
            {pData?.HowToApplyHeading}
          </h2>
          <ol style={{ marginLeft: "40px" }}>
            <li>
              {pData?.ha1} {" "}
              <Link
                href="https://book.brightlightimmigration.ca/calendar-page"
                className={styles.link}
              >
                Click here
              </Link>
              .
            </li>
            <li>
              {pData?.ha2}
            </li>
            <li>
              {pData?.ha3}
            </li>
            <li>
              {pData?.ha4}
            </li>
            <li>
              {pData?.ha5}
            </li>
            <li>
              {pData?.ha6}
            </li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>
            {pData?.RefusalHeading}
          </h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              {pData?.r1}
            </li>
            <li>
              {pData?.r2}
            </li>
            <li>
              {pData?.r3}
            </li>
            <li>
              {pData?.r4}
            </li>
            <li>
              {pData?.r5}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.support} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotSureHeading}</h2>
          <p>
            {pData?.s1}
          </p>
          <p>
            {pData?.s2}
          </p>
          <button
            className={styles.button}
            onClick={() =>
            (window.location.href =
              "/booking")
            }
          >
            Book Appointment
          </button>
        </section>

        {/* <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we offer expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
        </section> */}
        {/* <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Experienced Team:</strong> Over a decade of experience in
              handling BCPNP applications with a high success rate.
            </li>
            <li>
              <strong>Tailored Approach:</strong> Personalized services and
              strategies based on your specific case.
            </li>
            <li>
              <strong>High Success Rate:</strong> Proven track record using case
              law and precedents for positive results.
            </li>
            <li>
              <strong>Comprehensive Support:</strong> Assistance from the start
              of the application process to obtaining your PR.
            </li>
          </ul>
        </section> */}

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[94] = el)}
        >
          <h2>  {pData?.WhyChooseUsHeading01}</h2>
          <ul className={styles.whychooseusLi} style={{ marginLeft: "40px" }}>
            <li>
              <strong>{strongText91}</strong>{" "} {remainingText91}
            </li>
            <li>
              <strong>{strongText92}</strong>{" "} {remainingText92}
            </li>
            <li>
              <strong>{strongText93}</strong>{" "} {remainingText93}
            </li>
            <li>
              <strong>{strongText94}</strong>{" "} {remainingText94}
            </li>
          </ul>
        </section>
      </div>
      <div id="faqs">
        <FAQ_White_Internal data={pData} />
      </div>
      {pData?.show_testimonials == "Y" && (
        <div id="testimonials">
          <Testimonials />
        </div>
      )}

      <div id="blogs">
        <RecentBlogs />
      </div>
      <Footer1 />
    </>
  );
};

export default FederalSkilledWorkerProgram;
