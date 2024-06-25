import {NavigationBar} from "../components/shared/header/NavigationBar.jsx";
import {HeroSection} from "../components/header/HeroSection.jsx";
import {Footer} from "../components/shared/Footer.jsx";

export const HomePage = () => {
    return (
        <div className="relative bg-gray-50">
            <NavigationBar/>
            <HeroSection/>
            <Footer/>
        </div>
    )
}
