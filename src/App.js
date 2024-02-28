import Navigation from "./component/Navigation";
import Hero from "./component/Hero";
import Highlights from "./component/Highlights";
import Testimonials from "./component/Testimonials"
import About from "./component/About"
import Footer from "./component/Footer"


import './App.css';

function App() {
  return (
    <main >
      <Navigation />
      <Hero />
      <Highlights />
      <Testimonials style = {{border: "4px solid blue"}}/>
      <About />
      <Footer />
    </main>
  );

}

export default App;
