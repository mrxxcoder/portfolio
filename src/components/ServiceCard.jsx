import natoursMockup from "../assets/natours_mockup.jpg";
import "./Services.css";

function ServiceCard({ children }) {
  return (
    <div className="service__card">
      <figure>
        <img src={natoursMockup} alt="" />
      </figure>

      <div className="service__text">{children}</div>
    </div>
  );
}

export default ServiceCard;
