import {NavigationBar} from "../components/shared/header/NavigationBar.jsx";
import {HeroSection} from "../components/homepage/HeroSection.jsx";
import {Footer} from "../components/shared/Footer.jsx";
import {Stats} from "../components/homepage/Stats.jsx";
import {AboutUs} from "../components/homepage/AboutUs.jsx";

export const HomePage = () => {
    return (
        <div className="relative bg-gray-50">
            <NavigationBar/>
            <HeroSection/>
            <Stats/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}
