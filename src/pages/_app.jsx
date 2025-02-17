import { useEffect, useState } from "react";
import "../styles/global.css"; // Ensure this file exists
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../components/Loader";
import FloatingButton from "../components/FloatingButton";

function MyApp({ Component, pageProps }) {
  const [redirectsData, setRedirectsData] = useState([]);

  // Fetch Redirect Data
  useEffect(() => {
    async function fetchRedirects() {
      try {
        const response = await fetch("https://brightlight-node.onrender.com/redirects");
        if (!response.ok) throw new Error("API Response Not OK");

        const data = await response.json();
        if (!data || !Array.isArray(data) || data.length === 0) return;

        let mappedData = [];
        for (let i = 1; i <= 99; i++) {
          let redirectFromKey = `redirectFrom${i}`;
          let redirectToKey = `redirectTo${i}`;
          if (data[0]?.[redirectFromKey] && data[0]?.[redirectToKey]) {
            mappedData.push({
              from: data[0][redirectFromKey],
              to: data[0][redirectToKey],
            });
          }
        }

        if (mappedData.length > 0) setRedirectsData(mappedData);
      } catch (error) {
        console.error("Redirect Fetch Error:", error);
      }
    }

    fetchRedirects();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Apply Redirects Without Infinite Loops
  useEffect(() => {
    redirectsData.forEach((redirect) => {
      if (window.location.pathname === redirect.from) {
        window.history.replaceState(null, "", `/${redirect.to}`);
      }
    });
  }, [redirectsData]);

  // Handle Background Color Change
  useEffect(() => {
    const updateBackgroundColor = () => {
      document.body.style.backgroundColor =
        window.location.pathname === "/dash/panel/overwrite"
          ? "rgb(241, 241, 241)"
          : "white";
    };

    updateBackgroundColor();
    window.addEventListener("popstate", updateBackgroundColor);
    window.addEventListener("hashchange", updateBackgroundColor); // Extra safety for hash routes

    return () => {
      window.removeEventListener("popstate", updateBackgroundColor);
      window.removeEventListener("hashchange", updateBackgroundColor);
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
