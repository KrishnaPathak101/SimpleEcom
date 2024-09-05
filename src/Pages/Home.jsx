import React from 'react'
import Hero from '../components/Hero'
import SelectCategory from '../components/Select-Category'
import Productlist from '../components/productlist'
import Footer from '../components/Footer'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Categories/>
        <Hero/>
      <SelectCategory/>
      <Productlist/>
    </div>
  )
}

export default Home