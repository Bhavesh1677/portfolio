import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/theme'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footar from './components/Footar'

function App() {
  const [themeMode, setThemeMode] = useState('dark')

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className='font-sans bg-indigo-300 dark:bg-indigo-950 dark:text-white w-full'>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Contact />
          <Footar />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
