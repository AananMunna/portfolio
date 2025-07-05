import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />

        <Experience />
        <div className="hidden md:block" id="skills">

          <Tech />
          {/* all Tech content here */}
        </div>
        <div  id="projects">

        <Works />
        </div>
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <div className="hidden md:block">
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
