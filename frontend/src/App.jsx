import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ServicesProvided from "./pages/ServicesProvided"
import {HomePage} from "./pages/HomePage.jsx";
import {ContactUs} from "./pages/ContactUs.jsx";
import {SetTitle} from "./components/systemutil/SetTitle.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<>
                    <SetTitle setTitle={"SigaInfoTech"}/>
                    <HomePage/>
                </>}/>
                <Route path="/services" element={<>
                    <SetTitle setTitle={"Service"}/>
                    <ServicesProvided/>
                </>}/>
                <Route path="/contact" element={<>
                    <SetTitle setTitle={"contact-us"}/>
                    <ContactUs/>
                </>}/>
            </Routes>
        </Router>
    )
}

export default App
