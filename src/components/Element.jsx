import React from 'react'

export default function Element({name, symbol, number, weight, category, onClick}) {

  return (
    <div className={`element ${category}`} onClick={onClick}>
      <span className='number'>{number}</span>
      <span className='symbol'>{symbol}</span>
      <span className='name'>{name}</span>
      <span className='weight'>{weight}</span>
    </div>
  )
}
