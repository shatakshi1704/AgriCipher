import React from 'react'
import Navbar from '../Components/Navbar'
import Hero_Section from '../Components/Hero_Section'
import Features from '../Components/Features'
import Reviews from '../Components/Reviews'
import Gift_Hero from '../Components/Gift_Hero'

export default function Home() {
  return (
    <div bg-green-50>
        <Navbar></Navbar>

        <Hero_Section></Hero_Section>

        <Features></Features>

        <Reviews></Reviews>

        <Gift_Hero></Gift_Hero>
    </div>
  )
}
