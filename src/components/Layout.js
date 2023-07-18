import About from "./About"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Testimonial from "./Testimonial"
import Work from "./Work"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Work />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Layout