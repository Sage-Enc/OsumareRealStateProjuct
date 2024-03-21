import React from 'react'
import './superadmin.css'

function approvalusercard() {

  return (
    <div className="protperty-owner-user-main-container">
        <div className="property-owner-user-data">
            <div className="property-owner-user-img-container">
                <img src="/userimg.jpg" alt="User Image" className="property-owner-user-img" />
            </div>
            <div className='user-name'>
                Tabish Khan
            </div>
            <div className="user-num">
                <p>+91 8520963741</p>
            </div>
            <div className="user-email" >
                <p>tabish@gmail.com</p>
            </div>
            <div className="protperty-owner-button-container">
                <button className="Reject-Btn" >Reject</button>
                <button className="Approve-Btn" >Approve</button>
            </div>
        </div>
    </div>
  )
}

export default approvalusercard