import {NavigationBar} from "../components/shared/header/NavigationBar.jsx";
import {HeroSection} from "../components/homepage/HeroSection.jsx";
import {Footer} from "../components/shared/Footer.jsx";
import {Stats} from "../components/homepage/Stats.jsx";
import {AboutUs} from "../components/homepage/AboutUs.jsx";
import {Automation} from "../components/homepage/Automation.jsx";
import {ServiceTitle} from "../components/homepage/ServiceTitle.jsx";
import {CloudServices} from "../components/homepage/CloudServices.jsx";
import {ApiIntegration} from "../components/homepage/ApiIntegration.jsx";
import {Products} from "../components/homepage/Products.jsx";
import {HServices} from "../components/homepage/HServices.jsx";

export const HomePage = () => {
    return (
        <div className="relative bg-gray-50">
            <NavigationBar/>
            <HeroSection/>
            <Stats/>
            <ServiceTitle/>
            <Automation/>
            <CloudServices/>
            <ApiIntegration/>
            <Products/>
            <HServices/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}
