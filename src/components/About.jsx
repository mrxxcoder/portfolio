import "./About.css";
import about from "../assets/about.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h1 className="about__heading">Who Am I?</h1>
        <div className="heading__background"></div>
        <div className="about__content">
          <div className="img__box">
            <img src={about} alt="" />
          </div>

          <div className="about__text ">
            <h2>About me</h2>
            <h3>A passionate Front-End Developer</h3>
            <p>
              Hello! I'm a passionate React.js frontend developer and software
              engineer with a strong drive for learning and growth. Currently
              pursuing my education, I'm excited to combine my academic
              knowledge with practical experience to create engaging and
              user-friendly web applications. My journey in software development
              is just beginning, and I'm eager to contribute to innovative
              projects and make a positive impact in the tech world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
