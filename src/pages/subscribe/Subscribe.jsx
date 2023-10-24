import "./subscribe.scss";
import { works, subscription } from "../../data";
import { useState } from "react";
import iconArrow from "../../assets/plan/desktop/icon-arrow.svg";
import Modal from "../../components/modal/modal";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import ScrollToHashElement from "../../components/ScrollToHashElement";

const Subscribe = () => {
  // const location = useLocation();

  const initialActiveIndex = subscription.map((_, index) => index);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const [activeLink, setIsActiveLink] = useState(false);

  const [userSelected, setUserSelected] = useState({
    preferences: "filter",
    "bean-type": "decaf",
    quantity: "250g",
    "grind-option": "cafetiére",
    deliveries: "every week",
  });

  // console.log(activeIndex);

  const handleToggleItem = (index, route = false) => {
    // const nextIndex = isActive ? null : index;
    // setActiveIndex(nextIndex);

    if (activeIndex.includes(index) && route === false) {
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };

  console.log(activeIndex);
  console.log(userSelected);

  const handleRadioChange = (e, type) => {
    console.log(e, type);
    setUserSelected({
      ...userSelected,
      [type]: e.target.value,
    });
  };

  const openModal = (e) => {
    e.stopPropagation();
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const calculatePrice = () => {
    let quantityPrice = 0;
    let deliveryPrice = 0;

    if (userSelected.quantity === "250g") {
      quantityPrice = 7;
    } else if (userSelected.quantity === "500g") {
      quantityPrice = 14;
    } else {
      quantityPrice = 28;
    }

    if (userSelected.deliveries === "every week") {
      deliveryPrice = 7.2;
    } else if (userSelected.deliveries === "every 2 weeks") {
      deliveryPrice = 9.6;
    } else {
      deliveryPrice = 12;
    }

    setTotalPrice(quantityPrice + deliveryPrice);
  };

  const handleSetActiveLink = (index) => {
    setIsActiveLink(index);
  };

  return (
    <>
      <ScrollToHashElement />
      <section className="subscribe">
        <div className="hero-content">
          <h1>Create a plan</h1>
          <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
        </div>
      </section>

      <section className="works-inner subscribe-works">
        <div className="work-list">
          {works.map((work) => {
            return (
              <article key={work.id}>
                <span className="works-circle works-dark"></span>
                <span>0{work.id}</span>
                <h4>{work.title}</h4>
                <p>{work.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="subscription">
        {/* Navigation Accordion */}

        <nav className="nav-subscription">
          <ul>
            <li className={activeLink === 0 ? "active" : ""}>
              <Link
                to="#preferences"
                className={activeLink === 0 ? "active" : ""}
                onClick={() => {
                  handleToggleItem(0, true);
                  handleSetActiveLink(0);
                }}
              >
                preferences
              </Link>
            </li>
            <li className={activeLink === 1 ? "active" : ""}>
              <Link
                to="#bean-type"
                className={activeLink === 1 ? "active" : ""}
                onClick={() => {
                  handleToggleItem(1, true);
                  handleSetActiveLink(1);
                }}
              >
                bean type
              </Link>
            </li>
            <li className={activeLink === 2 ? "active" : ""}>
              <Link
                to="#quantity"
                className={activeLink === 2 ? "active" : ""}
                onClick={() => {
                  handleToggleItem(2, true);
                  handleSetActiveLink(2);
                }}
              >
                quantity
              </Link>
            </li>
            <li className={activeLink === 3 ? "active" : ""}>
              <Link
                to="#grind-option"
                className={activeLink === 3 ? "active" : ""}
                onClick={() => {
                  handleToggleItem(3, true);
                  handleSetActiveLink(3);
                }}
              >
                grind option
              </Link>
            </li>
            <li className={activeLink === 4 ? "active" : ""}>
              <Link
                to="#deliveries"
                className={activeLink === 4 ? "active" : ""}
                onClick={() => {
                  handleToggleItem(4, true);
                  handleSetActiveLink(4);
                }}
              >
                deliveries
              </Link>
            </li>
          </ul>
        </nav>

        <div className="subscription-order">
          {subscription.map((sub, index) => {
            return (
              <div id={sub.type} className="subscription-item" key={sub.id}>
                <div className="subscription-item-content" onClick={() => handleToggleItem(index)}>
                  <h4>{sub.title}</h4>

                  <img src={iconArrow} alt="show details" className={activeIndex.includes(index) ? "icon-arrow active" : "icon-arrow"} />
                </div>

                <form className={activeIndex.includes(index) ? "content show" : "content"}>
                  <fieldset>
                    {sub.content.map((item, i) => {
                      const optionName = item.title.replaceAll(" ", "-");
                      return (
                        <div className="option" key={i}>
                          <input type="radio" id={optionName} name={sub.type} checked={userSelected[sub.type] === item.title} value={item.title} onChange={(e) => handleRadioChange(e, sub.type)} />
                          <label className={userSelected[sub.type] === item.title ? "selected" : null} htmlFor={optionName}>
                            {item.title === "filter-grind" ? "filter" : item.title}
                            <span>{item.description}</span>
                          </label>
                        </div>
                      );
                    })}
                  </fieldset>
                </form>
              </div>
            );
          })}

          <div className="order">
            <div className="order-summary">
              <div className="order-summary-details">
                <h3>Order Summary</h3>
                <p>
                  “I drink my coffee as <span>{userSelected.preferences}</span>, with a <span>{userSelected["bean-type"]}</span> type of bean. <span>{userSelected.quantity}</span> ground ala <span>{userSelected["grind-option"] === "filter-grind" ? "filter" : userSelected["grind-option"]}</span>, sent to me <span>{userSelected.deliveries}</span>.”
                </p>
              </div>
            </div>
            <button
              className="cta-create-plan btn-primary"
              href="#"
              onClick={(e) => {
                calculatePrice();
                openModal(e);
              }}
            >
              Create my plan
            </button>
          </div>
        </div>
      </section>

      <Modal showModal={showModal} userSelected={userSelected} closeModal={closeModal} totalPrice={totalPrice} />
    </>
  );
};

export default Subscribe;
