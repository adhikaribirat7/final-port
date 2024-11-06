import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/port-service/Services";
import Projects from "./components/projects/Projects";


export default function App() {
  return (
<main className="max-w-7xl mx-auto relative sm:px-10 px-5">
<NavBar/>
{/* <HeroSection/> */}
<Hero/>
<AboutMe/>
<Services/>
<Projects/>
<ContactMe/>
<Footer/>

</main>

  );
}
