import "./App.css";
import Home from "./pages/home/Home";
import Admission from "./pages/admission/Admission";
import About from "./pages/about/About";
import gif from './assets/images/img.webp'

function App() {
  return (
    <>
      <div className="app-container">
        <section id="home">
          <Home />
        </section>
        <section id="admission">
          <Admission />
        </section>
        <section id="admission">
          <About />
        </section>
      </div>
    </>
  );
}

export default App;
