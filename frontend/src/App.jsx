import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import ServicesProvided from "./pages/ServicesProvided"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Test</div>}/>
        <Route path="/services" element={<ServicesProvided/>}/>
      </Routes>
    </Router>
  )
}

export default App
