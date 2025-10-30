import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
        <NavBar  />
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App