import "./Projects.css";
import "./btn.css";

function ProjectCard() {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture">&nbsp;</div>
        <h3 className="card__heading">
          <span className="card__heading-span">Natours landing page</span>
        </h3>
      </div>
      <div className="card__side card__side--back">
        <div className="card__cta">
          <div className="card__description-box">
            <p className="card__description-text">
              A landing page for a fictional tours company{" "}
            </p>
          </div>
          <a
            href="https://mrxxcoder.github.io/natours/"
            target="_blank"
            rel="noreferrer"
            className="btn btn--white"
          >
            Check it out
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
