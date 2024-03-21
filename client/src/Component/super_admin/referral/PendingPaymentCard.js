import React from 'react'

function PendingPaymentCard() {
  return (
    <tr className='PendingPaymentCard'>
        <td className="PropertyName">
            <img src="2.jpg" alt="" />
            <p>Property name</p>
        </td>
        <td className="Price">₹5.0 Cr </td>
        <td className="YourReward">₹5,00,000</td>
        <td className="GST">-1700</td>
        <td className="Amount">₹483,000</td>
    </tr>
  )
}

export default PendingPaymentCard