import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import ServicesProvided from "./pages/ServicesProvided"
import {HomePage} from "./pages/HomePage.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Test</div>}/>
          <Route path="/test" element={<HomePage/>}/>
        <Route path="/services" element={<ServicesProvided/>}/>
      </Routes>
    </Router>
  )
}

export default App
