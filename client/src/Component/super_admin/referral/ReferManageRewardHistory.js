import React from 'react'
import RewardHistoryCard from './RewardHistoryCard'

function ReferManageRewardHistory() {
  return (
    <div>
        <div className='RewardMain'>
        <table className='RewardTable'>
            <tr className='RewardTableHead'>
                <td>Property Name</td>
                <td>Date</td>
                <td>Price</td>
                <td>Your Reward</td>
                <td>GST 18% Deducted</td>
                <td>Credited</td>
            </tr>
            <div className='RewardHistoryCardContainer'>
                <RewardHistoryCard />
            </div>
        </table>
    </div>
    </div>
  )
}

export default ReferManageRewardHistory