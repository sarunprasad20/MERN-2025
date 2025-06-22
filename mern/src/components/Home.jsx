import React from 'react'
import About from './About'
import image from'../assets/Ashoka_Chakra.png'

const Home = ({items}) => {
  return (
    <div>
      <About items={items} />;
      <img src={image} alt="" />
    </div>
  )
}
export default Home