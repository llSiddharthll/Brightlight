// import React, { useEffect, useState } from "react";
// import styles from "../styles/Loader.module.css";

// const Loader = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => { 
//     fetch("https://brightlight-node.onrender.com")
//       .then((res) => {
//         return res.text();
//       })
//       .then(() => {
//         setTimeout(() => {
//           setIsLoaded(true);
//         }, 4000);
//         return;
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     let loadTimeout = setTimeout(() => {
//       setIsLoaded(true);
//     }, 4000);
//   }, []);

//   return (
//     <div
//       className={styles.loaderParent}
//       style={{
//         opacity: isLoaded ? 0 : 1,
//         visibility: isLoaded ? "hidden" : "visible"
//       }}
//     >
//       <div className={styles.pl}></div>
//     </div>
//   );
// };

// export default Loader;


import React, { useEffect, useState } from "react";
import styles from "../styles/Loader.module.css";
import logo from "../assets/brlightlight-icon.webp"; // Adjust the path to your logo image
import Image from "next/image";
const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com")
      .then((res) => res.text())
      .then(() => {
        setTimeout(() => {
          setIsLoaded(true);
        }, 3400);
      })
      .catch((error) => {
        console.log(error);
      });

    const loadTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 3400);

    return () => clearTimeout(loadTimeout); // Cleanup on unmount
  }, []);

  return (
    <div
      className={styles.loaderParent}
      style={{
        opacity: isLoaded ? 0 : 1,
        visibility: isLoaded ? "hidden" : "visible"
      }}
    >
      <div className={styles.loader}>
           <Image height={50} width={100} src={logo} alt="Company Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Loader;
