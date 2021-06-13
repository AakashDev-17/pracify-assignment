import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Section1 from "./pages/home/section1/Section1";
import Section2 from "./pages/home/section2/Section2";
import Section3 from "./pages/home/section3/Section3";
import Section4 from "./pages/home/section4/Section4";
import Section5 from "./pages/home/section5/Section5";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}

export default App;
