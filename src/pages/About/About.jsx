// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import aboutBanner from '../../assets/about-banner.png'

const About = () => {
  return (
    <div>
      <section className="about" aria-label="about" data-section>
        <div className="container-about">
          <figure className="about-banner">
            <img
              src={aboutBanner}
              width="748"
              height="436"
              loading="lazy"
              alt="about banner"
              className="img-banner"
            />
          </figure>
          <div className="about-content">
            <h2 className="section-title-about">What Is CoinB</h2>
            <p className="section-text-about">
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions.
            </p>
            <ul className="section-list-about">
              <li className="section-item-about">
                <div className="title-wrapper-about">
                  <h3 className="list-title-about">
                    <span>✔</span>View real-time currency prices
                  </h3>
                </div>
                <p className="item-text-about">
                  Stay updated with the latest market trends by accessing live
                  cryptocurrency prices. Monitor real-time fluctuations to make
                  informed trading decisions instantly.
                </p>
              </li>
              <li className="section-item-about">
                <div className="title-wrapper-about">
                  <h3 className="list-title-about">
                    <span>✔</span>Buy and sell BTC, ETH, XRP, OKB, Etc...
                  </h3>
                </div>
                <p className="item-text-about">
                  Easily trade popular cryptocurrencies like BTC, ETH, XRP, and
                  OKB on our platform. Enjoy seamless transactions with a wide
                  range of digital assets available for buying and selling.
                </p>
              </li>
            </ul>
            <a href="#" className="btn-link-about">
              Explore More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
