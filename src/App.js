import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";


function App() {
  return (
    <div className='container p-4 w-full mx-auto'>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
