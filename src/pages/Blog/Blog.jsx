// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Blog.css";
import instructionOne from "../../assets/instruction-1.png";
import instructionTwo from "../../assets/instruction-2.png";
import instructionThree from "../../assets/instruction-3.png";
import instructionFour from "../../assets/instruction-4.png";

const Blog = () => {
  return (
    <>
      <section
        className="instruction-blog"
        aria-label="instruction"
        data-section
      >
        <div className="container-blog">
          <h2 className="section-title-blog">How It Works</h2>
          <p className="section-text-blog">
            Read the steps carefully, then follow them and enjoy earning a lot
            of coins
          </p>
          <ul className="instruction-list-blog">
            <li>
              <div className="instruction-card-blog card-line-blog">
                <figure className="card-banner-blog">
                  <img
                    src={instructionOne}
                    width="96"
                    height="96"
                    loading="lazy"
                    alt="Step 1"
                    className="img"
                  />
                </figure>
                <p className="card-subtitle-blog">Step 1</p>
                <h3 className="card-title-blog">Download</h3>
                <p className="card-text-blog">
                  Download the application on your phone or computer to enjoy
                  trading.
                </p>
              </div>
            </li>
            <li>
              <div className="instruction-card-blog card-line-blog">
                <figure className="card-banner-blog">
                  <img
                    src={instructionTwo}
                    width="96"
                    height="96"
                    loading="lazy"
                    alt="Step 2"
                    className="img"
                  />
                </figure>
                <p className="card-subtitle-blog">Step 2</p>
                <h3 className="card-title-blog">Connect Wallet</h3>
                <p className="card-text-blog">
                  Connect your electronic wallet so you can trade currencies and
                  get money.
                </p>
              </div>
            </li>
            <li>
              <div className="instruction-card-blog card-line-blog">
                <figure className="card-banner-blog">
                  <img
                    src={instructionThree}
                    width="96"
                    height="96"
                    loading="lazy"
                    alt="Step 3"
                    className="img"
                  />
                </figure>
                <p className="card-subtitle-blog">Step 3</p>
                <h3 className="card-title-blog">Start Trading</h3>
                <p className="card-text-blog">
                  Start trading now in the currency you want and enjoy the
                  competition.
                </p>
              </div>
            </li>
            <li>
              <div className="instruction-card-blog">
                <figure className="card-banner-blog">
                  <img
                    src={instructionFour}
                    width="96"
                    height="96"
                    loading="lazy"
                    alt="Step 4"
                    className="img"
                  />
                </figure>
                <p className="card-subtitle-blog">Step 4</p>
                <h3 className="card-title-blog">Earn Money</h3>
                <p className="card-text-blog">
                  Earn the money you traded, plus the profits you made from
                  currency trading.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Blog;
