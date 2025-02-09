import AboutUs from '../components/Home/AboutUs'
import FAQS from '../components/Home/FAQS'
import HeroSection from '../components/Home/HeroSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <div>
        <div className="hero-section min-h-screen">
          <HeroSection />
        </div>
        <div className="aboutUs mt-20">
          <AboutUs />
        </div>
        <div className="faqs mt-20">
          <FAQS />
        </div>
      </div>
    </div>
  )
}

export default Home