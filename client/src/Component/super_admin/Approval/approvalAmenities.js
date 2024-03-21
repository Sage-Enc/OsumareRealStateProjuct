import React from 'react'
import {aminityOne} from '../../multiuse/menu-items/Menuproduct'

function approvalAmenities() {
  const aminityItems = aminityOne;
  return (
    <div className='aminityItemContainer'>
        {aminityItems.map((item, index)=>(
          <div key={index} className='aminityItem'>
            <div className='aminityIcon'>{item.aminityIcon}</div>
            <div className='aminityTitle'>{item.aminityText}</div>
          </div>
        ))}
    </div>
  )
}

export default approvalAmenities