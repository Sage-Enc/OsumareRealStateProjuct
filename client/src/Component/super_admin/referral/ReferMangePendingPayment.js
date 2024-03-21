import React from 'react'
import PendingPaymentCard from './PendingPaymentCard'

function ReferMangePendingPayment() {
  return (
    <div className='PendingPaymentMain'>
        <table className='PendingPaymentTable'>
            <tr className='PendingPaymentTableHead'>
                <td>Property Name</td>
                <td>Price</td>
                <td>Your Reward</td>
                <td>GST 18% Deducted</td>
                <td>Amount</td>
            </tr>
            <div className='PendingPaymentCardContainer'>
                <PendingPaymentCard />
                <PendingPaymentCard />
                <PendingPaymentCard />
                <div className='TotalAmountContainer'>
                    <td>Total Amount</td>
                    <td className='TotalAmountValue'>₹3,381,000</td>
                </div>
            </div>
        </table>
        <div className='PayButtonContainer'>
            <button>Pay</button>
        </div>
    </div>
  )
}

export default ReferMangePendingPayment