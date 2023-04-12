import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Hero } from './Components/Hero';
import { Works } from './Components/Works';
// import { Test } from "./Components/Test";

function App() {
  return (
    <div className='wrapper'>
      <Hero/>
      <About/>
      <Works/>
      <Contact/>
      {/* <Test/> */}
    </div>
  );
}

export default App;
