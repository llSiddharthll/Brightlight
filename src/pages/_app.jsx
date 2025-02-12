import { useEffect, useState } from "react";
import "../styles/global.css"; // Ensure this exists
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../components/Loader";
import FloatingButton from "../components/FloatingButton";

function MyApp({ Component, pageProps }) {
  const [redirectsData, setRedirectsData] = useState([]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/redirects")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          let mappedData = [];
          for (let i = 1; i <= 99; i++) {
            let redirectFromKey = `redirectFrom${i}`;
            let redirectToKey = `redirectTo${i}`;
            if (data[0][redirectFromKey] && data[0][redirectToKey]) {
              mappedData.push({
                from: data[0][redirectFromKey],
                to: data[0][redirectToKey],
              });
            }
          }
          if (mappedData.length > 0) {
            setRedirectsData(mappedData);
          }
        }
      })
      .catch((error) => console.error("Redirect Fetch Error:", error));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    redirectsData.forEach((redirect) => {
      if (window.location.pathname === redirect.from) {
        window.location.href = `/${redirect.to}`;
      }
    });
  }, [redirectsData]);

  useEffect(() => {
    const handleBackgroundColor = () => {
      document.body.style.backgroundColor =
        window.location.pathname === "/dash/panel/overwrite"
          ? "rgb(241, 241, 241)"
          : "white";
    };

    handleBackgroundColor();
    window.addEventListener("popstate", handleBackgroundColor);

    return () => {
      window.removeEventListener("popstate", handleBackgroundColor);
      document.body.style.backgroundColor = "white";
    };
  }, []);

  return (
    <HelmetProvider>
      <ToastContainer />
      <Loader />
      <Component {...pageProps} />
      <FloatingButton />
    </HelmetProvider>
  );
}

export default MyApp;
