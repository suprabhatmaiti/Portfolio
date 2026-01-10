import Header from "./component/header";
import RocketScrollIndicator from "./component/RocketScrollIndicator";
import Hero from "./component/Hero";
import MyJourney from "./component/MyJourney";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import PointerFollower from "./component/PointerFollower";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200">
      <PointerFollower />
      <Header />
      <Hero />
      <Skills />
      <MyJourney />
      <Contact />
      <Footer />
    </div>
  );
}
