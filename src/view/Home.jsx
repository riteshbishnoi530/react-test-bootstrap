import React from 'react'
import Product from '../component/Product'
import CustomCounter from '../component/CustomCounter'
import Cards from '../component/Cards'
import Counting from '../component/Counting'
import CountingOppositeDirection from '../component/CountingOppositeDirection'
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