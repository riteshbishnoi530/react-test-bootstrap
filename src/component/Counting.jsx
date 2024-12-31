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
    <h2 className='text-center'>For loop</h2>
    <h2 className='text-center'><span>Counter</span> {count}</h2>
</div>
  )
}

export default Counting