import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"


function App() {


  return (
    <>
     <div className="bg-hero-background-mobile lg:bg-hero-background-desktop bg-cover bg-no-repeat bg-[50%_100%] backdrop-blur-sm">
      <Navbar />
      <Hero />
    </div>
    <Features />
    </>
  )
}

export default App
