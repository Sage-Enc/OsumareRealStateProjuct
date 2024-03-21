import React from 'react'
import './ReferManage.css'
import { IoEyeSharp } from "react-icons/io5";


function ClaimRewardPrompt() {
  return (
    <div className='ClaimRewardPrompt'>
        <h1>Claim Your Reward</h1>
        <div className='PromptOptions'>
            <button className='CheckBankDetails'>
            <IoEyeSharp /> Check Bank Details</button>
            <button className='GetYourReward'>Get Your Reward</button>
        </div>
    </div>
  )
}

export default ClaimRewardPrompt