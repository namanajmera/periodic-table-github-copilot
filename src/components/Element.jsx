import React from 'react'

export default function Element({name, symbol, number, weight, category, onClick, selected}) {

  return (
    <div className={`element ${category} ${selected && 'selected'}`} onClick={onClick}>
      <span className='number'>{number}</span>
      <span className='symbol'>{symbol}</span>
      <span className='name'>{name}</span>
      <span className='weight'>{weight}</span>
    </div>
  )
}
