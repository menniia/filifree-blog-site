import { Route, BrowserRouter as Router, Routes } from "react-router"
import Layout from "./components/Layouts"
import { AnimatePresence } from "framer-motion"

function App() {

  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" />
          </Routes>
        </AnimatePresence>
      </Layout>

    </Router>
  )
}

export default App
