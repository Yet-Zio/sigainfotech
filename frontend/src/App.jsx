import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ServicesProvided from "./pages/ServicesProvided"
import {HomePage} from "./pages/HomePage.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/services" element={<ServicesProvided/>}/>
            </Routes>
        </Router>
    )
}

export default App
