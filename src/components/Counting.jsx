import React, { useEffect, useState } from 'react'
function Counting() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if (count < 100) {
                setCount(count + 1);
            } else {
                setCount(100);
            }
        }, 1000)
    })
  return (
    <div className='border py-4 mx-3'>
    <h2 className='text-center text-custom-8xl mb-3'>UseEffect</h2>
    <h4 className='text-center'><span>Counter</span> {count}</h4>
</div>
  )
}

export default Counting