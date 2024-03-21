import React from 'react'

const imgColl = [
  {
    imgName: "/1.jpg",
  },
  {
    imgName: "/2.jpg",
  },
  {
    imgName: "/3.jpg",
  },
  {
    imgName: "/4.jpg",
  },
  {
    imgName: "/5.jpg",
  }
]

function approvalImages() {
  return (
    <div className='approvalImages'>
        <div className='imageContainer'>
          {imgColl.map((img, id)=>(
            <img src={img.imgName} alt="Property-Image" key={id} className='itemImage' />
          ))}
        </div>
    </div>
  )
}

export default approvalImages