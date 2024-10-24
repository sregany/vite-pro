import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation"
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="overflox-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ExperienceEducation />
      <Contact />
      <Footer />
      <SocialLinks />

    </div>
  )
}