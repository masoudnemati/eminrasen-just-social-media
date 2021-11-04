import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <a
          href="https://t.me/atyal"
          target="_blank"
          rel="noopener noreferrer"
          className="button_base b10_tveffect"
        >
          <div>
            <p>
              Design by <strong>Atyal</strong> <span className="wall"> | </span>
              <span>2019 - {new Date().getFullYear()} &copy;</span>
            </p>
          </div>
          <div>
            <div>Design by Atyal</div>
            <div>Design by Atyal</div>
            <div>Design by Atyal</div>
          </div>
        </a>
      </footer>
      <style jsx>{`
        a {
          position: fixed;
          bottom: 0;
          left: 0;
          text-decoration: none;
        }

        .wall {
          color: #df63b2;
        }

        p {
          color: darkgray;
          font-size: 1.5rem;
        }

        /*glitch effect*/
        .button_base {
          margin: 0;
          box-sizing: border-box;
        }

        .b10_tveffect div {
          text-align: center;
          width: 100%;
        }

        .b10_tveffect div:nth-child(1) {
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 0 10px 0 0;
        }

        .b10_tveffect div:nth-child(2) {
          overflow: hidden;
        }

        .b10_tveffect div:nth-child(2) div {
          position: absolute;
          top: 0;
          left: 0;
          text-align: center;
          width: 100%;
          height: 50px;
          box-sizing: border-box;
          padding: 10px;
          border: #000000 hidden 1px;
        }

        .b10_tveffect div:nth-child(2) div:nth-child(1) {
          color: rgba(200, 120, 120, 0.8);
          opacity: 0;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAF0lEQVQIW2NkwAIYgWKS6OIgQQxAoUoAE4AAUnD/0ugAAAAASUVORK5CYII=)
            repeat;
        }

        .b10_tveffect div:nth-child(2) div:nth-child(2) {
          color: rgba(120, 200, 120, 0.8);
          opacity: 0;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAF0lEQVQIW2NkwAIYgWKS6OIgQQxAoUoAE4AAUnD/0ugAAAAASUVORK5CYII=)
            repeat;
        }

        .b10_tveffect div:nth-child(2) div:nth-child(3) {
          color: rgba(120, 120, 200, 0.8);
          opacity: 0;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAF0lEQVQIW2NkwAIYgWKS6OIgQQxAoUoAE4AAUnD/0ugAAAAASUVORK5CYII=)
            repeat;
        }

        a:hover div p span {
          display: none;
        }

        .b10_tveffect:hover div:nth-child(1) {
          background-color: black;
          transition: color 0s ease;
          transition: background-color 0.5s ease 0.25s;
        }

        .b10_tveffect:hover div:nth-child(1) p {
          color: #8e021f;
        }

        .b10_tveffect:hover div:nth-child(2) div:nth-child(1) {
          animation: b10_tveffect_red 0.7s linear;
        }
        .b10_tveffect:hover div:nth-child(2) div:nth-child(2) {
          animation: b10_tveffect_green 0.7s linear;
        }
        .b10_tveffect:hover div:nth-child(2) div:nth-child(3) {
          animation: b10_tveffect_blue 0.7s linear;
        }
        @-webkit-keyframes b10_tveffect_red {
          from,
          to {
            opacity: 0;
          }
          25% {
            opacity: 1;
            -webkit-transform: scale(1.8, 1.6) translate(-10px, 3px)
              skewX(30deg);
          }
          50% {
            opacity: 1;
            -webkit-transform: scale(1.5, 1.2) translate(20px, 6px) skewX(5deg);
          }
          75% {
            opacity: 1;
            -webkit-transform: scale(0.9, 1.8) translate(-16px, -1px)
              skewX(-20deg);
          }
        }
        @-webkit-keyframes b10_tveffect_green {
          from,
          to {
            opacity: 0;
          }
          25% {
            opacity: 1;
            -webkit-transform: scale(1.3, 1.5) translate(3px, 6px) skewX(25deg);
          }
          50% {
            opacity: 1;
            -webkit-transform: scale(1.6, 1.1) translate(-16px, -5px)
              skewX(-15deg);
          }
          75% {
            opacity: 1;
            -webkit-transform: scale(1, 1.8) translate(18px, 4px) skewX(15deg);
          }
        }
        @-webkit-keyframes b10_tveffect_blue {
          from,
          to {
            opacity: 0;
          }
          25% {
            opacity: 1;
            -webkit-transform: scale(1.2, 1.4) translate(-10px, -3px)
              skewX(-25deg);
          }
          50% {
            opacity: 1;
            -webkit-transform: scale(1.9, 1.1) translate(16px, 3px) skewX(5deg);
          }
          75% {
            opacity: 1;
            -webkit-transform: scale(1.3, 2) translate(-30px, -3px) skewX(20deg);
          }
        }
        @keyframes b10_tveffect_red {
          from,
          to {
            opacity: 0;
          }
          25% {
            opacity: 1;
            transform: scale(1.8, 1.6) translate(-10px, 3px) skewX(30deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5, 1.2) translate(20px, 6px) skewX(5deg);
          }
          75% {
            opacity: 1;
            transform: scale(0.9, 1.8) translate(-16px, -1px) skewX(-20deg);
          }
        }
        @keyframes b10_tveffect_green {
          from,
          to {
            opacity: 0;
          }
          25% {
            opacity: 1;
            transform: scale(1.3, 1.5) translate(3px, 6px) skewX(25deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.6, 1.1) translate(-16px, -5px) skewX(-15deg);
          }
          75% {
            opacity: 1;
            transform: scale(1, 1.8) translate(18px, 4px) skewX(15deg);
          }
        }
        @keyframes b10_tveffect_blue {
          from,
          to {
            opacity: 0;
          }
          25% {
            opacity: 1;
            transform: scale(1.2, 1.4) translate(-10px, -3px) skewX(-25deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.9, 1.1) translate(16px, 3px) skewX(5deg);
          }
          75% {
            opacity: 1;
            transform: scale(1.3, 2) translate(-30px, -3px) skewX(20deg);
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
