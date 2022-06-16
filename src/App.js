import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Projects from "./Projects";

import ExpItem from "./helper_class/ExpItem";
import Urbaneyes from "./media/exp/urbaneyes.png";
import Memoryz from "./media/exp/memoryz.png";
import Blum from "./media/exp/blum.png";
import Ieee from "./media/exp/ieee.png";
import Ghq from "./media/exp/ghq.png";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="navBarArea">
        <hr></hr>
      </div>
      <Body />
      <AboutMe />
      <Projects />
      <div className="experience">
        <a id="exp">Experience Anchor</a>
        <h2>Experience</h2>
        <hr />
        <div className="expList">
          <ul>
            <ExpItem
              img={Urbaneyes}
              org="UrbanEyes"
              position="Data Scientist • Jun 2022 - Present"
              desc="A startup aiming to provide more precise real estate data and ML-driven insights for CRE investors. Worked with NumPy, Pandas, h3-py, Geopandas, folium, and other libraries for data visualization and analysis, as well as data preprocessing and cleaning."
            />
            <ExpItem
              img={Memoryz}
              org="Memoryz"
              position="Software Engineer • May 2022 - Present"
              desc="Digital caregiving companion app targeted towards families with members experiencing dementia. Used React Native and PostgreSQL for full-stack development of mobile app."
            />
            <ExpItem
              img={Blum}
              org="Blum Center for Developing Economies"
              position="Web Developer • Feb 2022 - Present"
              desc="On campus hub for students and researchers aiming to solve world problems such as global poverty through various initiatives. Managed and improved websites for the Big Ideas Contest and Health Tech CoLab using HTML, CSS, Wordpress, etc."
            />
            <ExpItem
              img={Ieee}
              org="UC Berkeley IEEE"
              position="TechOps Officer • Feb 2022 - Present"
              desc="UC Berkeley's branch of the largest international technical professional organization. Maintained website server with Nginx, mail communication with Postfix, and led the 'DIY-API project' as part of their educational projects initiative."
            />
            <ExpItem
              img={Ghq}
              org="Garuda Hacks"
              position="Technical Director • Feb 2022 - Present"
              desc="Largest student-led annual hackathon in Southeast Asia by participant count targeted towards Indonesian high school students. Led team to develop website, build and manage Discord server, reach out to technology partners, etc."
            />
          </ul>
          <a
            id="moreLIn"
            href="https://www.linkedin.com/in/austin-ardisaputra-4726a11b7/"
          >
            <p>Check out my LinkedIn to see more!</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
