import React from "react";
import "./NewsLetter.css";
import axios from "axios";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return alert("Please provide an email.");
    } else if (!emailRegex.test(email)) {
      return alert("Please provide a valid email address.");
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/sendmail", {
        email,
      });
      toast.success("Mail Sent Successfully!");
      setIsLoading(false);
      setEmail("");
    } catch (error) {
      console.log("error:", error);
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <div>
          <input
            type="email"
            placeholder="Your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendMail}>
            {isLoading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
};

export default NewsLetter;
