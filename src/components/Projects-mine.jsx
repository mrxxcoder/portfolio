import ProjectCard from "./ProjectCard";
import "./Projects.css";
import "./btn.css";
import natours from "../assets/natours.png";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="project-content">
          <div className="projects-grid">
            <div className="pro pro__1 undefined">
              <div className="pro__img">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mrxxcoder.github.io/natours/"
                >
                  <img src={natours} alt="website" />
                </a>
              </div>
              <div className="pro__text">
                <h3>Natours</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis porro rerum cupiditate quod repellendus dolor
                  explicabo dicta. Numquam, cupiditate! Error possimus quisquam
                  veritatis ratione voluptatem maxime quod ullam. Deserunt,
                  nemo.
                </p>
                <div className="stack">
                  <p>HTML</p>
                  <p>SASS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/stefvndev/car-rental"
                    rel="noreferrer"
                  >
                    Code <i className="fa-brands fa-github"></i>
                  </a>

                  <a
                    target="_blank"
                    href="https://car-rental-ten.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
