import React from 'react'
import { useState } from 'react'
function CustomCounter() {
    const [value, setValue] = useState(0);
    const addValue = () => {
        setValue(value + 1);
    }
    const removeValue = () => {
        setValue(value - 1);
    }
  return (
    <div className='border-1 border mt-4 py-4 mb-3 mx-3'>
        <h3 className='text-center text-custom-8xl'>Counter</h3>
        <div className='d-flex counter'>
                        <button className='text-custom-8xl border-0 bg-transparent' onClick={removeValue}>-</button>
                        <p className='text-custom-8xl mb-0 d-flex align-items-center'>{value}</p>
                        <button className='text-custom-8xl border-0 bg-transparent' onClick={addValue}>+</button>
                    </div>
    </div>
  )
}

export default CustomCounter