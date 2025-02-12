import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
let predefinedUsername;
let predefinedPassword;

let Login = () => {
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/login-cred")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          predefinedUsername = data[0].user;
          predefinedPassword = data[0].pass;
        }
      });
  }, []);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let { login } = useAuth();
  let router = useRouter()

  let notifySuccess = () => {
    toast.success("Success, Redirecting To Dashboard", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyError = () => {
    toast.error("Invalid Credentials.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (username === predefinedUsername && password === predefinedPassword) {
      notifySuccess();
      localStorage.setItem("isLoggedIn", "true");
      login();
      setTimeout(() => {
        router.replace("/dash/panel/overwrite");
      }, 3000);
    } else {
      notifyError();
    }
  };

  return (
    <>
      <div className={styles.login}>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="password"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className={styles.submitButton} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
