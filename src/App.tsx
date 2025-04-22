import Controls from "./components/controls/Controls"
import Desktop from "./components/desktop/Desktop"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import About from "./components/sections/about/About"
import Experience from "./components/sections/experience/Experience"
import Projects from "./components/sections/projects/Projects"
import Technologies from "./components/sections/technologies/Technologies"
import { useThemeStore } from "./stores/themeStore"

function App() {
  const { theme } = useThemeStore()

  return (
    <div id="home" data-theme={theme} className="w-screen h-screen bg-slate-800 flex justify-center">
      <Controls />
      <Hero />
      <Desktop />

      <About />
      <Technologies />
      <Experience />
      <Projects />

      <Footer />
    </div>
  )
}

export default App
