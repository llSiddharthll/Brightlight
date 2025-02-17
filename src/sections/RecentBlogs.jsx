import { useState, useEffect } from "react";
import styles from "../styles/RecentBlogs.module.css";
import Image from "next/image";

const serviceNameMapping = {
  "visitor-visa": "Visitor Visa",
  "work-permit": "Work Permit",
  "skilled-worker-stream": "Skilled Worker Stream",
  "priorities-program": "Priorities Program",
  "international-post-graduate-program": "International Post Graduate Program",
  "international-graduate-program": "International Graduate Program",
  "health-authority-stream": "Health Authority Stream",
  "stem-targeted-draw": "STEM Targeted Draw",
  "trade-occupation-targeted-draw": "Trade Occupation Targeted Draw",
  "canadian-experience-class": "Canadian Experience Class",
  "same-sex": "Same Sex",
  "visitor-to-student": "Visitor to Student",
  "change-college-program": "Change College Program",
  "study-permit-minors": "Study Permit Minors",
  "super-visa": "Super Visa",
  "bc-pnp": "BC PNP",
  "pilot-programs": "Pilot Programs",
  "dual-intent-visa": "Dual Intent Visa",
  "business-visitor-visa": "Business Visitor Visa",
  "family-reunification-sponsorship": "Family Reunification Sponsorship",
  "dependent-children": "Dependent Children",
  "adoption": "Adoption",
  "humanitarian-compassionate": "Humanitarian and Compassionate",
  "spouse-inland": "Spouse Inland",
  "spouse-outland": "Spouse Outland",
  "spousal-open-work-permit": "Spousal Open Work Permit",
  "low-wage-lmia": "Low Wage LMIA",
  "global-stream-lmia": "Global Stream LMIA",
  "permanent-residence-pathways-caregivers-lp": "Permanent Residence Pathways Caregivers",
  "category-based-express": "Category Based Express",
  "pgwp": "PGWP",
  "temporary-resident": "Temporary Residency",
  "express-entry": "Express Entry",
  "permanent-residency": "Permanent Residency",
  "blogs": "Blogs",
  "blogs/:id": "Blog Details",
  "news": "News",
  "news/:id": "News Details",
  "category-based": "Category Based",
  "clb-ilets-calculator": "CLB ILETS Calculator",
  "previous-draw-history": "Previous Draw History",
  "dash/panel/overwrite": "Admin Panel",
  "more-services": "More Services",
  "privacy-policy": "Privacy Policy",
  "terms-&-conditions": "Terms and Conditions",
  "*": "404 Not Found",
  "healthcare-targeted-draw": "Healthcare Targeted Draw",
  "entry-level-semi-skilled": "Entry Level Semi Skilled",
  "pnp": "PNP",
  "rnip": "RNIP",
  "agri-food-pilot-program": "Agri Food Pilot Program",
  "transport-occupation-targeted-draw": "Transport Occupation Targeted Draw",
  "french-targeted-draw": "French Targeted Draw",
  "federal-skilled-worker-program": "Federal Skilled Worker Program",
  "federal-skilled-trades-program": "Federal Skilled Trades Program",
  "temporary-resident-permit-draft": "Temporary Resident Permit Draft",
  "cby": "CBY",
  "common-law-partner-temporary": "Common Law Partner Temporary",
  "common-law-partner-permanent": "Common Law Partner Permanent",
  "common-law-partner-international": "Common Law Partner International",
  "spouse-common-law-sponsership": "Spouse Common Law Sponsorship",
  "restoration-status-draft": "Restoration Status Draft",
  "open-work-permit-for-spouse-inland": "Open Work Permit for Spouse Inland",
  "flagpoling": "Flagpoling",
  "extensions-draft": "Extensions Draft",
  "sds": "SDS",
  "non-sds": "Non SDS",
  "outside-canada": "Outside Canada",
  "inside-canada": "Inside Canada",
  "student-visa": "Student Visa",
  "ParentsGrandparents": "Parents Grandparents",
  "orphan": "Orphan",
  "lonely-canadian": "Lonely Canadian",
  "humanitarian-compassionate": "Humanitarian Compassionate",
  "openWork-dependent-children": "Open Work Dependent Children",
  "open-work-vulnerable-lp": "Open Work Vulnerable LP",
  "francophone-mobility-program": "Francophone Mobility Program",
  "bridging-open-work-permit-lp": "Bridging Open Work Permit LP",
  "agriculture-stream-lmia": "Agriculture Stream LMIA",
  "open-work-permit": "Open Work Permit",
  "lmia-reviewed": "LMIA Reviewed",
  "reply-to-pfl-page": "Reply to PFL Page",
  "additional-document": "Additional Document",
  "reconsideration": "Reconsideration",
  "citizenship": "Citizenship",
  "pr-renewal": "PR Renewal",
  "agriculture-agri-food-occupation": "Agriculture and Agri Food Occupation",
  "in-home-caregiver-program-lp": "In Home Caregiver Program LP",
  "pathways-for-caregiver": "Pathways for Caregiver",
  "permanent-residence-pathways-caregivers-lp": "Permanent Residence Pathways Caregivers LP",
  "booking": "Booking",
  "immigration-tools": "Immigration Tools",
  "search": "Search",
  "auth/panel/dash/bright": "Auth Panel Dash Bright",
};

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filterBlogsParam, setFilterBlogsParam] = useState("");

  useEffect(() => {
    const urlPath = window.location.pathname;
    const serviceName = urlPath.split("/")[1];

    if (serviceName && serviceNameMapping[serviceName]) {
      setFilterBlogsParam(serviceNameMapping[serviceName]);
    } else {
      setFilterBlogsParam("All");
    }
  }, []);

  useEffect(() => {
    if (!filterBlogsParam) return;

    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://brightlight-node.onrender.com/new-added-blogs");
        const data = await res.json();

        if (data) {
          const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

          const answerBlogs = sortedData.filter((item) =>
            [item.tag_1, item.tag_2, item.tag_3].includes(filterBlogsParam)
          );

          const nonAnswerblogs = sortedData.filter(
            (item) => !answerBlogs.includes(item)
          );

          let latestBlogs;
          if (answerBlogs.length >= 3) {
            latestBlogs = answerBlogs.slice(0, 3);
          } else {
            latestBlogs = [...answerBlogs, ...nonAnswerblogs.slice(0, 3 - answerBlogs.length)];
          }

          setBlogs(latestBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [filterBlogsParam]);

  const truncateText = (text, numChars) => {
    if (!text) return "";
    const cleanedText = text.replace(/<[^>]*>/g, ""); // Remove HTML tags
    return cleanedText.length <= numChars
      ? cleanedText
      : `${cleanedText.slice(0, numChars)}...`;
  };

  const getBlogUrl = (item) => {
    if (item.custom_url) return item.custom_url;

    return `/blogs/${item.blog_heading
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")}`;
  };

  if (!blogs || blogs.length === 0) {
    return <div>No blogs found.</div>;
  }

  return (
    <div className={styles.recentBlogs}>
      <div className={styles.recentBlogMainSection}>
        <h1>Featured Blogs</h1>
        <div className={styles.blogsGridSection}>
          {blogs.map((item, index) => (
            <a
              key={index}
              onClick={() => localStorage.setItem("blog_heading", item.blog_heading)}
              href={getBlogUrl(item)}
              className={styles.blogs}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.blog_heading}
                  width={300}
                  height={200}
                  layout="responsive"
                />
              </div>
              <h2>{item.blog_heading}</h2>
              <h6>
                <b>{item.date && item.date.trim().split("T")[0]}</b>
              </h6>
              <p>{truncateText(item.blog_content, 100)}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;