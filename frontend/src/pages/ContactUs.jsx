import Contact from "../components/contactus/Contact"
import {Footer} from "../components/shared/Footer"
import {NavigationBar} from "../components/shared/header/NavigationBar"

export const ContactUs = () => {
    return (
        <>
            <NavigationBar/>
            <section className="h-screen">
                <Contact/>
                <Footer/>
            </section>
        </>
    )
}
