// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Features.css";
import appBanner from "../../assets/app-banner.png";
import googlePlay from "../../assets/googleplay.png";
import appStore from "../../assets/appstore.png";

const Features = () => {
  return (
    <>
      <section className="app" aria-label="app" data-section>
        <div className="container-feature">
          <div className="app-content">
            <h2 className="section-title-feature">
              Free Your Money & Invest With Confidence
            </h2>
            <p className="section-text-feature">
              With Cryptor Trade, you can be sure your trading skills are
              matched.
            </p>
            <ul className="section-list-feature">
              <li className="section-item-feature">
                <div className="title-wrapper-feature">
                  <h3 className="item-title-feature">
                    <span>✔</span>Buy, Sell, And Trade On The Go
                  </h3>
                </div>
                <p className="item-text-feature">
                  Manage Your Holdings From Your Mobile Device
                </p>
              </li>
              <li className="section-item-feature">
                <div className="title-wrapper-feature">
                  <h3 className="item-title-feature">
                    <span>✔</span>Take Control Of Your Wealth
                  </h3>
                </div>
                <p className="item-text-feature">
                  Rest Assured You (And Only You) Have Access To Your Funds
                </p>
              </li>
            </ul>
            <div className="app-wrapper-feature">
              <a href="#">
                <img
                  src={googlePlay}
                  width="135"
                  height="40"
                  loading="lazy"
                  alt="get it on google play"
                />
              </a>
              <a href="#">
                <img
                  src={appStore}
                  width="120"
                  height="40"
                  loading="lazy"
                  alt="download on the app store"
                />
              </a>
            </div>
          </div>
          <div className="app-banner-feature">
            <img
              src={appBanner}
              width="618"
              height="526"
              loading="lazy"
              alt="app banner"
              className="w-100"
            />
            <span className="span">Scan To Download</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
