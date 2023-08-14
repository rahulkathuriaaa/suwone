"use-client"

import Benefit from "./Benefit"
import Ecom from "./Ecom"
import Deal from "./components/Deal"
import Hero from "./components/Hero"
import Nabar from "./components/Nabar"
import Swipe from "./components/Swipe"
import Navbar from "./components/Navbar"
import Carousel from "./components/Swipe"
import Advertisement from "./components/Deal"
import Gallery from "./Gallery"
import Com from "./com"
import Footer from "./Footer"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Nabar/>
      <Hero/>
      <Ecom/>
    <Advertisement/>
    <Gallery/>
    <Com/>
    <Footer/>
    </div>
  )
}
