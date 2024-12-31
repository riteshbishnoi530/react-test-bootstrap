import React from 'react'

function CountingOppositeDirection() {
    const numbers = [];
    for (let i = 9; i >= 0; i--) {
      numbers.push(i);
    }
  return (
    <div className='py-4 border m-3'>
      <h1 className='text-center text-custom-8xl mb-3'>For Loop</h1>
      <ul className='text-center'>
        {(() => {
          const items = [];
          for (let i = 0; i < numbers.length; i++) {
            items.push(<li className='text-custom-3xl' key={i}>{numbers[i]}</li>);
          }
          return items;
        })()}
      </ul>
    </div>
  )
}

export default CountingOppositeDirection