
import './App.css';
import { About } from './Components/About/About';
import { Competence } from './Components/Competence/Competence';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar';
import { Projects } from './Components/Projects/Projects';
import {Contact} from './Components/Contact/Contact';

function App() {
 

  return (
    <div className= "App">
      <Navbar/>
      <Hero/>
      <About/>
      <Competence/>
      <Projects /> 
      <Contact />
     
    </div>
  );
};

export default App
