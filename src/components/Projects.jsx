import natours from "../assets/natours.png";
import ProBox from "./ProBox";
import eco from "../assets/eco.png";
import usepopcorn from "../assets/usepopcorn.png";
import forkify from "../assets/forkify.png";
import fastReactPizza from "../assets/fastReactPizza.png";
function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <h1 className="about__heading">Projects</h1>
          <div className="heading__background"></div>
          <div className="project-content">
            <div className="projects-grid">
              <ProBox
                title="Fast React Pizza"
                img={fastReactPizza}
                description="Fast React Pizza as an application for pizza restaurant where you can order the delicious Pizza you like."
                techno1="React"
                techno2="TailwindCss"
                code="https://github.com/mrxxcoder/fast-react-pizza"
                demo="tlify.app/"
                scrollY="-26%"
                icon="🍕"
              />

              <ProBox
                title="Eco"
                img={eco}
                description="Eco is a simple ecommerce application that shows a list of products depending on the category and also shows a single product page."
                techno1="React"
                techno2="TailwindCss"
                code="https://github.com/mrxxcoder/eco"
                demo="https://eco-lowkeylu.netlify.app/"
                scrollY="-26%"
                icon="🛒"
                cName="reversed-proj"
              />

              <ProBox
                title="Natours"
                img={natours}
                description="Natours is a landing page for a fictional company that offers travels and tours all around the world."
                techno1="HTML"
                techno2="SASS"
                code="https://github.com/stefvndev/car-rental"
                demo="https://car-rental-ten.vercel.app/"
                scrollY="-80%"
                icon="🌴"
              />

              <ProBox
                title="usepopcorn"
                img={usepopcorn}
                description="Usepopcorn is a rating website for movies and TV shows where you can search for your favorite movie, rate it and add it to your watched list."
                techno1="React"
                techno2="CSS"
                code="https://github.com/mrxxcoder/usepopcorn"
                demo="https://usepopcorn-lowkeylu.netlify.app/"
                icon="🍿"
                cName="reversed-proj"
              />

              <ProBox
                title="Forkify"
                img={forkify}
                description="Forkify is a food recipe application where you can search for your favorite meal and see it's ingredients, how much time it takes to be done, and you can also add your own recipes."
                techno1="Javascript"
                techno2="CSS"
                code="https://github.com/stefvndev/Minimalist-E-commerce"
                demo="https://minimalist-e-commerce.vercel.app/"
                scrollY="-9%"
                icon="😋"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
