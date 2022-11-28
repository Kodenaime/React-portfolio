
import Navbar from './sections/Navbar/navbar';
import Header from './sections/header/header';
import About from './sections/about/about';
import Services from './sections/services/services';
import Portfolio from './sections/portfolio/portfolio';
import Testimonials from './sections/testimonials/testimonial';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';
import FloatingNav from './sections/Floating-Nav/FloatingNav';


const app = () => {
  return (
    <main>
       <Navbar/>
       <Header/>
       <About/>
       <Services/>
       <Portfolio/>
       <Testimonials/>
       <FAQs/>
       <Contact/>
       <Footer/>
       <FloatingNav/>

    </main>
  )
}

export default app