import "./about.scss";
import commitmentMobile from "../../assets/about/mobile/image-commitment.jpg";
import commitmentTablet from "../../assets/about/tablet/image-commitment.jpg";
import commitmentDesktop from "../../assets/about/desktop/image-commitment.jpg";
import qualityMobile from "../../assets/about/mobile/image-quality.jpg";
import qualityTablet from "../../assets/about/tablet/image-quality.jpg";
import qualityDesktop from "../../assets/about/desktop/image-quality.jpg";

import { headquarters } from "../../data";

const About = () => {
  return (
    <>
      <section className="about-us">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
        </div>
      </section>

      <section className="commitment">
        <div className="commitment-container">
          <picture>
            <source srcSet={commitmentDesktop} media="(min-width: 1024px)" />
            <source srcSet={commitmentTablet} media="(min-width: 768px)" />
            <img className="img-mobile" src={commitmentMobile} alt="man making coffee" />
          </picture>
          <article>
            <h3>our commitment</h3>
            <p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
          </article>
        </div>

        <div className="commitment-item">
          <picture>
            <source srcSet={qualityDesktop} media="(min-width: 1024px)" />
            <source srcSet={qualityTablet} media="(min-width: 768px)" />
            <img className="img-mobile" src={qualityMobile} alt="coffee in white mug" />
          </picture>
          <div className="content">
            <h3>uncompromising quality</h3>
            <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
          </div>
        </div>
      </section>

      <section className="headquarters">
        <h4>our headquarters</h4>
        <div className="location-container">
          {headquarters.map((loc) => {
            return (
              <div key={loc.id} className="location">
                <img src={loc.img} alt={loc.title} />
                <span className="country">{loc.title}</span>
                <ul>
                  <li>{loc.street}</li>
                  <li>{loc.city}</li>
                  <li>{loc.postal}</li>
                  <li>{loc.phone}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
