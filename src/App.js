import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Projects from "./Projects";
import Campanile from "./media/berkeley.png";

import ExpItem from "./helper_class/ExpItem";
import Urbaneyes from "./media/exp/urbaneyes.png";
import Memoryz from "./media/exp/memoryz.png";
import Blum from "./media/exp/blum.png";
import Ieee from "./media/exp/ieee.png";
import Ghq from "./media/exp/ghq.png";

function App() {
  return (
    <div className="app">
      <div className="navBarArea">
        <Navbar />
        <hr></hr>
      </div>
      <Body />
      <AboutMe />
      <Projects />
      <div className="experience">
        <a id="exp" />
        <h2>Experience</h2>
        <hr />
        <div className="expList">
          <ul>
            <ExpItem
              img={Urbaneyes}
              org="UrbanEyes"
              position="Data Scientist • Jun 2022 - Present"
            />
            <ExpItem
              img={Memoryz}
              org="Memoryz"
              position="Software Engineer • May 2022 - Present"
            />
            <ExpItem
              img={Blum}
              org="Blum Center"
              position="Web Developer • Feb 2022 - Present"
            />
            <ExpItem
              img={Ieee}
              org="UC Berkeley IEEE"
              position="TechOps Officer • Feb 2022 - Present"
            />
            <ExpItem
              img={Ghq}
              org="Garuda Hacks"
              position="Technical Director • Feb 2022 - Present"
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
