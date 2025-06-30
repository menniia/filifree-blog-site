import { Route, BrowserRouter as Router, Routes } from "react-router"
import Layout from "./components/Layouts"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"

function App() {

  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Layout>

    </Router>
  )
}

export default App
