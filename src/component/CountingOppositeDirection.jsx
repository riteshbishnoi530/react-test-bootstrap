import React from 'react'

function CountingOppositeDirection() {
    const numbers = [];
    for (let i = 9; i >= 0; i--) {
      numbers.push(i);
    }
  return (
    <div>
      <h1>Countdown</h1>
      <ul>
        {(() => {
          const items = [];
          for (let i = 0; i < numbers.length; i++) {
            items.push(<li key={i}>{numbers[i]}</li>);
          }
          return items;
        })()}
      </ul>
    </div>
  )
}

export default CountingOppositeDirection