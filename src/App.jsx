import { Route, BrowserRouter as Router, Routes } from "react-router"
import Layout from "./components/Layouts"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {

  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </Layout>

    </Router>
  )
}

export default App
