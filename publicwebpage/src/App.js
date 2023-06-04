import { Fragment } from "react";
import Header from "./layout/header";
import Hero from "./components/hero";
import Footer from "./layout/footer";
import AboutUs from "./components/aboutUs";
import Partners from "./components/partners";
import WhyChooseUs from "./components/whyChooseUs";
import Contact from "./components/contact";
import WhitePaper from "./components/whitepaper";
import Team from "./components/team";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AboutUs />
      <Partners />
      <WhyChooseUs />
      <WhitePaper />
      <Team />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
