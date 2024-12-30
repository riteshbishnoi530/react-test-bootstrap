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
        }, 100)
    })
  return (
    <>
    <h2 className='text-center'><span>Counter</span> {count}</h2>
</>
  )
}

export default Counting