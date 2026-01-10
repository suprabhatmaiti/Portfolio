import Header from "./component/header";
import Hero from "./sections/Hero";
import MyJourney from "./sections/MyJourney";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import PointerFollower from "./component/PointerFollower";
import { motion } from "framer-motion";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 bg-linear-to-b from-blue-200 to-blue-200">
      <PointerFollower />
      <Header />

      <Hero />
      <Skills />
      <Projects />
      <MyJourney />
      <Contact />
      <Footer />
    </div>
  );
}
