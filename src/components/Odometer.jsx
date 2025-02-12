import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Odometer.module.css";
import "odometer/themes/odometer-theme-minimal.css";
import "animate.css/animate.min.css";

const OdometerComponent = ({ value }) => {
  const odometerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [odometerInstance, setOdometerInstance] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("odometer").then((Odometer) => {
        if (isVisible && !odometerInstance) {
          const odometer = new Odometer.default({
            el: odometerRef.current,
            value: 1234, // Initial value
            theme: "minimal",
            duration: 3000,
          });
          odometer.render();
          setOdometerInstance(odometer);
        }

        if (odometerInstance && isVisible) {
          odometerInstance.update(value || 10357);
        }
      });
    }
  }, [isVisible, value, odometerInstance]);

  return <div className={`${styles.odometer} animated fadeIn`} ref={odometerRef}></div>;
};

export default OdometerComponent;
