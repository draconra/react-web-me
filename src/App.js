import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolios from "./components/Portfolios";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App bg-[#e2efe8] h-screen overflow-y-scroll px-12 py-4">
      <Header />
      <Hero />
      <Banner />
      <Services />
      <Portfolios />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
