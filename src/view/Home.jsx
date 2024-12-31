import React from 'react'
import Product from '../components/Product'
import CustomCounter from '../components/CustomCounter'
import Cards from '../components/Cards'
import Counting from '../components/Counting'
import CountingOppositeDirection from '../components/CountingOppositeDirection'
function Home() {
  return (
    <div>
    <Product/>
    <Cards/>
    <CustomCounter/>
    <Counting/>
    <CountingOppositeDirection/>
    </div>
  )
}

export default Home