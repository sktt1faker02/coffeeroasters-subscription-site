import "./home.scss";
// import sampleImage from "../../assets/home/desktop/image-gran-espresso.png";
import { collection, feature, works } from "../../data";
import { Link } from "react-router-dom";

const Home = ({ isNavOpen }) => {
  return (
    <>
      <section className={isNavOpen ? "hero active" : "hero"}>
        <div className="hero-content">
          <h1>Great coffee made simple.</h1>
          <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
          <Link className="cta-create-plan btn-primary" to="/subscribe">
            Create your plan
          </Link>
        </div>
      </section>

      <section className="collection">
        <h2>our collection</h2>
        <div className="collection-container">
          {collection.map((col) => {
            return (
              <article key={col.id}>
                <img src={col.img} alt={col.title} />
                <div className="description">
                  <h4>{col.title}</h4>
                  <p>{col.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <aside>
        <div className="aside-content">
          <h3>why choose us?</h3>
          <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
        </div>
        <div className="decoration"></div>
      </aside>

      <section className="featured-list">
        {feature.map((item) => {
          return (
            <article key={item.id}>
              <div className="featured-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="description">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="works-inner">
        <h3>How it works</h3>
        <div className="work-list">
          {works.map((work) => {
            return (
              <article key={work.id}>
                <span className="works-circle"></span>
                <span>0{work.id}</span>
                <h4>{work.title}</h4>
                <p>{work.description}</p>
              </article>
            );
          })}
        </div>
        {/* <a className="cta-create-plan btn-primary" href="#">
          Create your plan
        </a> */}
        <Link className="cta-create-plan btn-primary" to="/subscribe">
          Create your plan
        </Link>
      </section>
    </>
  );
};

export default Home;
