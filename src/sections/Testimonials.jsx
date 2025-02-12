import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Testimonials.module.css";
import google from "../assets/google-review.webp";
import { ReactComponent as ReviewStar } from "../assets/review_star.svg";
import { ReactComponent as Arrow } from "../assets/right-arrow-white.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials_White = () => {
  const videoSwiperRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);
  const [videosData, setVideosData] = useState([]);
  const [data, setData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // const videoId = videosData[`video${i + 1}`]
  //   ? new URL(videosData[`video${i + 1}`]).searchParams.get("v")
  //   : "";

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/videos-section")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setVideosData(data[0]);
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/testimonials-section")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const sortedArray = [];
          for (let i = 1; i <= 10; i++) {
            if (data[0][`review${i}img`] && data[0][`review${i}name`]) {
              sortedArray.push({
                image: data[0][`review${i}img`],
                review: data[0][`review${i}text`],
                review_stars: Math.floor(data[0][`review${i}star`]),
                person_name: data[0][`review${i}name`],
              });
            }
          }
          setReviewData(sortedArray);
          setData(data[0]);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Auto slide for videos
    autoSlideIntervalRef.current = setInterval(() => {
      if (
        videoSwiperRef.current &&
        videoSwiperRef.current.swiper.activeIndex < 2
      ) {
        videoSwiperRef.current.swiper.slideNext();
      } else {
        clearInterval(autoSlideIntervalRef.current); // Stop after 3 slides
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlideIntervalRef.current); // Cleanup on unmount
  }, [videosData]);

  const handleNextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviewData.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePreviousReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReview(
        (prev) => (prev - 1 + reviewData.length) % reviewData.length
      );
      setIsAnimating(false);
    }, 500);
  };

  const handleNextVideo = () => {
    if (videoSwiperRef.current) {
      videoSwiperRef.current.swiper.slideNext();
    }
  };

  const handlePreviousVideo = () => {
    if (videoSwiperRef.current) {
      videoSwiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.testimonialsContentSection}>
        <h1>{data?.heading}</h1>
        <div className={styles.googleImageSection}>
          <img src={google}  alt="Google" title="Google" />
          <p>{data?.googleRatings}/5</p>
        </div>
        <div className={styles.clientReviewsOverflowSection}>
          <div
            className={`${styles.clientTestimonialsSection} ${
              isAnimating ? styles.animating : ""
            }`}
          >
            <div className={styles.clientImageSection}>
              <img
                src={reviewData[currentReview]?.image}
                alt={reviewData[currentReview]?.person_name}
              />
            </div>
            <div className={styles.reviewDetails}>
              <h3>{reviewData[currentReview]?.review}</h3>
              <h2>{reviewData[currentReview]?.person_name}</h2>
              <div className={styles.reviewsStarsSection}>
                {Array.from(
                  { length: reviewData[currentReview]?.review_stars },
                  (_, i) => (
                    <ReviewStar key={i} width={25} height={25} />
                  )
                )}
              </div>
              <div className={styles.reviewsPaginationSection}>
                <Arrow width={20} height={20} onClick={handlePreviousReview} />
                <p>{`${currentReview + 1} / ${reviewData.length}`}</p>
                <Arrow width={20} height={20} onClick={handleNextReview} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsVideoSection}>
          <Swiper
            ref={videoSwiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper_pagination_2", clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={styles.swiper_container}
          >
            {Array.from(
              { length: 10 },
              (_, i) =>
                videosData[`video${i + 1}`] &&
                videosData[`video${i + 1}name`] && (
                  <SwiperSlide key={i}>
                  <iframe
                    width="560"
                    height="315"
                    loading="lazy"
                    src={`https://www.youtube.com/embed/${new URL(videosData[`video${i + 1}`]).searchParams.get("v")}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={videosData[`video${i + 1}name`]}
                  ></iframe>
                    <p>{videosData[`video${i + 1}name`]}</p>
                  </SwiperSlide>
                )
            )}
          </Swiper>

          {/* Navigation Buttons */}
          <div className={styles.navigationButtons}>
            <button onClick={handlePreviousVideo} className={styles.prevButton}>
              <span>{"<"}</span>
            </button>
            <button onClick={handleNextVideo} className={styles.nextButton}>
              <span>{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials_White;
