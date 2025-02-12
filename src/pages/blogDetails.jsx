import { useParams, userouter.replace } from "react-router-dom";
import styles from "../styles/BlogsDetails.module.css";
import { useEffect, useState } from "react";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Linkedin from "../assets/bannerLinkedinLogo.png";
import rcic from "../assets/rcic.png";
import searchIcon from "../assets/search-gray.png";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";
import Lp from "../assets/blogDetailsPic.jpg";

let BlogDetails = () => {
  let { id } = useParams();
  let router = useRouter()
  let [blog, setBlog] = useState([]);
  let [loveneetData, setLoveneetData] = useState([]);
  let [recentBlogs, setRecentBlogs] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [storedNewsHeading, setStoredNewsHeading] = useState(null);

  useEffect(() => {
    let blogHeading = localStorage.getItem("blog_heading");
    setStoredNewsHeading(blogHeading);
    fetch(`https://brightlight-node.onrender.com/new-added-blogs`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (blogHeading) {
            let filteredData = data.filter((item) => {
              return item.blog_heading == blogHeading;
            });
            setBlog(filteredData[0]);
          } else {
            let idValueArray = id.split("-").splice(0, 3).join(" ");
            let filteredData = data.filter((item) => {
              return item.blog_heading
                .toLowerCase()
                .includes(idValueArray.toLowerCase());
            });
            if(filteredData){
              setBlog(filteredData[0]);
            }
            else{
              setBlog(data[0]);
            }
          }
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/loveneet")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoveneetData(data[0]);
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/new-added-blogs/")
      .then((res) => res.json())
      .then((data) => {
        let recentBlogsFilteredData = data.filter(
          (item) => item.blog_heading !== blogHeading
        );
        if (recentBlogsFilteredData) {
          setRecentBlogs(recentBlogsFilteredData.slice(0, 3));
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  let handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let handleSearchClick = () => {
    if (searchQuery.trim()) {
      router.replace(`/blogs?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Head>
        <title>
          {blog?.metaTitle
            ? blog?.metaTitle
            : "About Us - Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            blog?.metaDescription
              ? blog?.metaDescription
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            blog?.metaTitle
              ? blog?.metaTitle
              : "About Us - Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            blog?.metaDescription
              ? blog?.metaDescription
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
      </Head>
      <Navbar1 />
      <div className={styles.blogTopSection}>
        <div className={styles.blogsTopContentSection}>
          <h1>{blog.blog_heading}</h1>
          <div className={styles.loveneetSection}>
            <img src={Lp} className={styles.loveneetImage} />
            <div className={styles.loveneetContent}>
              <div className={styles.loveneetDataFlex}>
                <h3>By {loveneetData.name}</h3>

                <h5>{loveneetData.post}</h5>
              </div>
              <h4>{loveneetData.tagline}</h4>
              <div className={styles.loveneetLinks}>
                <a
                  className={styles.imageSection}
                  href={loveneetData.linkedin}
                  target="_blank"
                >
                  <img src={Linkedin} />
                </a>
                <div>
                  <p className={styles.haveAQuestion}>Have Questions?</p>
                  <a
                    className={styles.imageSection}
                    href="/booking"
                    target="_blank"
                  >
                    <img src={rcic} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blogsFlexSection}>
        <div className={styles.blogImgSection}>
          <img src={blog.image} alt={blog.alt_tag} title={blog.alt_tag} />
        </div>
        <div className={styles.blogSearchSection1}>
          <div className={styles.searchDiv}>
            <input
              placeholder="Search Blogs"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img
              src={searchIcon}
              onClick={handleSearchClick}
              className={styles.searchIcon}
              alt="Search"
            />
          </div>
          <div className={styles.blogTagsSection}>
            {blog.tag_1 && <p>{blog.tag_1}</p>}
            {blog.tag_2 && <p>{blog.tag_2}</p>}
            {blog.tag_3 && <p>{blog.tag_3}</p>}
          </div>
          {recentBlogs ? (
            <div className={styles.recentBlogsSection}>
              <h4>Recent Blogs</h4>
              {recentBlogs?.map((item, index) => (
                <a
                  onClick={() => {
                    localStorage.setItem("blog_heading", item.blog_heading);
                  }}
                  href={
                    !item.custom_url
                      ? `/blogs/${item.blog_heading
                          .trim()
                          .toLowerCase()
                          .replace(/[^\w\s]/g, "")
                          .replace(/\s+/g, "-")}`
                      : item.custom_url
                  }
                  key={index}
                  className={styles.recentBlog}
                >
                  <h3>{item.blog_heading}</h3>
                </a>
              ))}
            </div>
          ) : null}
          <div className={styles.freeAssesmentSection}>
            <h4>Start You Process Today With Us!</h4>
            <p>Book A Free Assement With Us Right Now.</p>
            <a href="/booking" target="_blank">
              Free Assesment
            </a>
          </div>
        </div>
      </div>
      <div className={styles.blogDescriptionSection}>
        {blog.blog_content ? (
          <div dangerouslySetInnerHTML={{ __html: blog.blog_content }} />
        ) : null}
      </div>
      <div className={styles.blogSearchSection}>
        <div className={styles.searchDiv}>
          <input
            placeholder="Search Blogs"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img
            src={searchIcon}
            onClick={handleSearchClick}
            className={styles.searchIcon}
            alt="Search"
          />
        </div>
        <div className={styles.blogTagsSection}>
          {blog.tag_1 && <p>{blog.tag_1}</p>}
          {blog.tag_2 && <p>{blog.tag_2}</p>}
          {blog.tag_3 && <p>{blog.tag_3}</p>}
        </div>
        {recentBlogs ? (
          <div className={styles.recentBlogsSection}>
            <h4>Recent Blogs</h4>
            {recentBlogs?.map((item, index) => (
              <a
                onClick={() => {
                  localStorage.setItem("blog_heading", item.blog_heading);
                }}
                href={
                  !item.custom_url
                    ? `/blogs/${item.blog_heading
                        .trim()
                        .toLowerCase()
                        .replace(/[^\w\s]/g, "")
                        .replace(/\s+/g, "-")}`
                    : item.custom_url
                }
                key={index}
                className={styles.recentBlog}
              >
                <h3>{item.blog_heading}</h3>
              </a>
            ))}
          </div>
        ) : null}
        <div className={styles.freeAssesmentSection}>
          <h4>Start You Process Today With Us!</h4>
          <p>Book A Free Assement With Us Right Now.</p>
          <a href="/booking" target="_blank">
            Free Assesment
          </a>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default BlogDetails;
