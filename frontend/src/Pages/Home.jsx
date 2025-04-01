import React from 'react'
import Navbar from '../Components/Navbar'
import Hero_Section from '../Components/Hero_Section'
import Features from '../Components/Features'
import Reviews from '../Components/Reviews'
import Gift_Hero from '../Components/Gift_Hero'
import Footer from './Footer'

export default function Home() {
  if (!localStorage.getItem("addToCart")){
    localStorage.setItem("addToCart", []);
  }
  
  return (
    <div bg-green-50>
        <Navbar></Navbar>

        <Hero_Section></Hero_Section>

        <Features></Features>

        <Reviews></Reviews>

        <Gift_Hero></Gift_Hero>

        <Footer></Footer>
    </div>
  )
}
