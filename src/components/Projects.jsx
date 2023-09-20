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
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
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
                description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
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
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
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
