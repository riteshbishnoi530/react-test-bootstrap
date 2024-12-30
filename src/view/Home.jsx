import React from 'react'
import Product from '../component/Product'
import CustomCounter from '../component/CustomCounter'
import Cards from '../component/Cards'
import Counting from '../component/Counting'
function Home() {
  return (
    <div>
    <Product/>
    <Cards/>
    <CustomCounter/>
    <Counting/>
    </div>
  )
}

export default Home