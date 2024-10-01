import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Lojas from './components/Lojas'
import Avaliacoes from './components/Avaliacoes'
import Footer from './components/Footer'
import LogoCarousel from './components/LogoCarousel'
import BannerSection from './components/BannerSection'
import Noticias from './components/Noticias'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Avaliacoes />
      <Noticias />
      <BannerSection />
      <Lojas />
      <LogoCarousel/>
      <Footer />
    </>
  )
}

export default App