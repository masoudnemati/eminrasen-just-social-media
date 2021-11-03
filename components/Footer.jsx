import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <p>
          Design by <strong>Atyal</strong> <span> | </span> 2019 -{" "}
          {new Date().getFullYear()} &copy;
        </p>
      </footer>
      <style jsx>{`
        footer {
          position: fixed;
          bottom: 0;
          left: 10px;
        }

        span {
          color: #df63b2;
        }

        p {
          color: darkgray;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default Footer;
