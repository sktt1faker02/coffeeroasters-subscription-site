import "./modal.scss";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ showModal, userSelected, closeModal, totalPrice }) => {
  useEffect(() => {
    if (showModal) {
      const handleClickOutside = (event) => {
        const modalContainer = document.querySelector(".modal-container");
        if (modalContainer && !modalContainer.contains(event.target)) {
          closeModal(); // Close the modal if the click is outside of the modal container
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [showModal, closeModal]);

  if (!showModal) return null;

  return createPortal(
    <div className={showModal ? "modal active" : "modal"}>
      <div className="modal-container">
        <div className="modal-header">
          <h3>Order Summary</h3>
        </div>
        <div className="modal-content">
          <p>
            “I drink my coffee as <span>{userSelected.preferences}</span>, with a <span>{userSelected["bean-type"]}</span> type of bean. <span>{userSelected.quantity}</span> ground ala <span>{userSelected["grind-option"] === "filter-grind" ? "filter" : userSelected["grind-option"]}</span>, sent to me <span>{userSelected.deliveries}</span>.”
          </p>

          <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>

          <Link className="cta-create-plan btn-primary" to="/">
            Checkout<span>${totalPrice.toFixed(2)} / mo</span>
          </Link>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
