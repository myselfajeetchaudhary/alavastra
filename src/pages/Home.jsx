import React from 'react'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/Categories'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
      <Contact />
    </>
  )
}

export default Home