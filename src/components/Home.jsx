import "./Home.css";
import reactLogo from "../assets/react.svg";
import javascriptLogo from "../assets/javascript.svg";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css3.svg";
import tailwindcssLogo from "../assets/tailwindcss.svg";
import sassLogo from "../assets/sass.svg";
import profile from "../assets/prof.png";
function Home() {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End React Developer 👋</h1>
              <p>
                Hi, I am <strong>Ahmed Samy</strong>. A passionate Front-End
                React Developer based in Egypt. 📍
              </p>
              <button>
                Download CV <span>→</span>
              </button>
            </div>
            {/* <div className="hero-img"></div> */}
            <div className="hero__images">
              <div className="hero__image">
                <div className="hero__shape">
                  <img src={profile} alt="Personal Image" />
                </div>
              </div>

              <div className="icon-container hero__react">
                <img className="icon--react" src={reactLogo} id="react" />
              </div>

              <div className="icon-container hero__javascript">
                <img className="icon--javascript" src={javascriptLogo} />
              </div>

              <div className="icon-container hero__html">
                <img className="icon--html" src={htmlLogo} />
              </div>
              <div className="icon-container hero__tailwind">
                <img className="icon--tailwind" src={tailwindcssLogo} />
              </div>

              <div className="icon-container hero__css">
                <img className="icon--css" src={cssLogo} />
              </div>

              <div className="icon-container hero__sass">
                <img className="icon--sass" src={sassLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
