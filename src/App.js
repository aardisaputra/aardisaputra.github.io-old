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
import OneIT from "./media/exp/oneIT.png";

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
              img={OneIT}
              org="UC Berkeley (One IT)"
              position="Web Accessibility Engineer • Jul 2022 - Present"
              desc="Campus-wide team responsible for tools, data, and infrastructure that power the campus experience. Performed accessibility audits on Berkeley websites based on WCAG standards while carrying out simple fixes using the Open Berkeley toolset."
            />
            <ExpItem
              img={Urbaneyes}
              org="UrbanEyes"
              position="Data Scientist • Jun 2022 - Aug 2022"
              desc="A startup aiming to provide more precise real estate data and ML-driven insights for CRE investors. Worked with NumPy, Pandas, h3-py, Geopandas, folium, and other libraries for data visualization and analysis, as well as data preprocessing and cleaning."
            />
            <ExpItem
              img={Memoryz}
              org="Memoryz"
              position="Software Engineer • May 2022 - Aug 2022"
              desc="Digital caregiving companion app targeted towards families with members experiencing dementia. Used React Native and PostgreSQL for full-stack development of mobile app."
            />
            <ExpItem
              img={Blum}
              org="Blum Center for Developing Economies"
              position="Web Developer • Feb 2022 - Present"
              desc="On campus hub for students and researchers aiming to solve world problems such as global poverty through various initiatives. Managed and improved websites for the Big Ideas Contest and Health Tech CoLab using HTML, CSS, Wordpress, etc."
            />
            <ExpItem
              img={Ghq}
              org="Garuda Hacks"
              position="Technical Advisor • Feb 2022 - Present"
              desc="Largest student-led annual hackathon in Southeast Asia by participant count targeted towards Indonesian high school students. Led tech team to develop website, build and manage Discord server, reach out to technology partners, etc."
            />
          </ul>
          <a id="moreLIn" href="https://www.linkedin.com/in/aardisaputra/">
            <p>Check out my LinkedIn to see more!</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
