import { Route, BrowserRouter as Router, Routes } from "react-router"
import Layout from "./components/Layouts"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"

function App() {

  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:category" element={<Blog />} />
          </Routes>
        </AnimatePresence>
      </Layout>

    </Router>
  )
}

export default App
