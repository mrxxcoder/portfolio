import ServiceCard from "./ServiceCard";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="about__heading">Services I Offer</h1>
        <div className="heading__background"></div>
        <div className="cards">
          <ServiceCard>
            <h2>Web Design</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              dolorum doloremque, velit quod, debitis tenetur quasi consequuntur
              quisquam numquam dolores neque vel dicta. Vel nisi voluptatum
              ullam vero voluptatibus consequuntur.
            </p>
          </ServiceCard>

          <ServiceCard>
            <h2>Web Development</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              dolorum doloremque, velit quod, debitis tenetur quasi consequuntur
              quisquam numquam dolores neque vel dicta. Vel nisi voluptatum
              ullam vero voluptatibus consequuntur.
            </p>
          </ServiceCard>

          <ServiceCard>
            <h2>Singe Page Applications</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              dolorum doloremque, velit quod, debitis tenetur quasi consequuntur
              quisquam numquam dolores neque vel dicta. Vel nisi voluptatum
              ullam vero voluptatibus consequuntur.
            </p>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}

export default Services;
