import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Artism from "./components/Artism";
import Desgin from "./components/Design";
import Photo from "./components/Photo";
import Glass from "./components/glass";
import Sponsors from "./components/Sponsors";
import Work from "./components/Work";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Artism />
      <Desgin />
      <Photo />
      <Glass />
      <Sponsors />
      <Work />
      <Footer />
    </>
  );
}

export default App;
