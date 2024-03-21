import React from 'react'
import '../Approval/superadmin.css'

function usercard() {

  return (
    <div className="main-container">
        <div className="enquiry-user-data">
            <div className="enquiry-user-img-container">
                <img src="/userimg.jpg" alt="User Image" className="user-img" />
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
            <div className="enquiry-button-container">
                <button className="send-mail-button" >Email</button>
                <button className="make-call-button" >Make a Call</button>
            </div>
        </div>
    </div>
  )
}

export default usercard