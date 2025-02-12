import { useRouter } from "next/router"
import styles from "../styles/NewsDetails.module.css";
import { useEffect, useState } from "react";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import searchIcon from "../assets/search-gray.png";
import ogImage from "../assets/ogImage.png";
import Head from "next/head";

let NewsDetails = () => {

  let router = useRouter()
  let { id } = router.query
  let [blog, setBlog] = useState({});
  let [recentBlogs, setRecentBlogs] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [storedNewsHeading, setStoredNewsHeading] = useState(null);

  useEffect(() => {
    let newsHeading = localStorage.getItem("news_heading");
    setStoredNewsHeading(newsHeading);
    fetch(`https://brightlight-node.onrender.com/news`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (newsHeading) {
            let filteredData = data.filter((item) => {
              return item.news_heading == newsHeading;
            });
            setBlog(filteredData[0]);
          } else {
            let idValueArray = id.split("-").splice(0, 3).join(" ");
            let filteredData = data.filter((item) => {
              return item.news_heading
                .toLowerCase()
                .includes(idValueArray.toLowerCase());
            });
            if (filteredData) {
              setBlog(filteredData[0]);
            }
            else {
              setBlog(data[0]);
            }
          }
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/news/")
      .then((res) => res.json())
      .then((data) => {
        let recentBlogsFilteredData = data.filter(
          (item) => item.news_heading !== newsHeading
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
      router.replace(`/news?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Head>
        <title>
          {blog?.metaTitle ? blog?.metaTitle : "Brightlight Immigration"}
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
            blog?.metaTitle ? blog?.metaTitle : "Brightlight Immigration"
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
          <h1>{blog.news_heading}</h1>
        </div>
      </div>
      <div className={styles.blogsFlexSection}>
        <div className={styles.blogImgSection}>
          <img
            src={blog.image}
            alt={blog.alt_tag_featured}
            title={blog.alt_tag_featured}
          />
        </div>
        <div className={styles.blogSearchSection1}>
          <div className={styles.searchDiv}>
            <input
              placeholder="Search News"
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
          {recentBlogs.length > 0 && (
            <div className={styles.recentBlogsSection}>
              <h4>Recent News</h4>
              {recentBlogs.map((item) => (
                <a
                  onClick={() => {
                    localStorage.setItem("news_heading", item.news_heading);
                  }}
                  href={
                    !item.custom_url
                      ? `/news/${item.news_heading
                        .trim()
                        .toLowerCase()
                        .replace(/[^\w\s]/g, "")
                        .replace(/\s+/g, "-")}`
                      : `/news${item.custom_url}`
                  }
                  key={item._id}
                  className={styles.recentBlog}
                >
                  <h3>{item.news_heading}</h3>
                </a>
              ))}
            </div>
          )}
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
        {blog.news_content ? (
          <div dangerouslySetInnerHTML={{ __html: blog.news_content }} />
        ) : null}
      </div>
      <div className={styles.blogSearchSection}>
        <div className={styles.searchDiv}>
          <input
            placeholder="Search News"
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
        {recentBlogs.length > 0 && (
          <div className={styles.recentBlogsSection}>
            <h4>Recent News</h4>
            {recentBlogs.map((item) => (
              <a
                onClick={() => {
                  localStorage.setItem("news_heading", item.news_heading);
                }}
                href={
                  !item.custom_url
                    ? `/news/${item.news_heading
                      .trim()
                      .toLowerCase()
                      .replace(/[^\w\s]/g, "")
                      .replace(/\s+/g, "-")}`
                    : `/news${item.custom_url}`
                }
                key={item._id}
                className={styles.recentBlog}
              >
                <h3>{item.news_heading}</h3>
              </a>
            ))}
          </div>
        )}
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

export default NewsDetails;
