import React from 'react'
import { IoDocumentText } from "react-icons/io5"; 

function itemDocs() {
  return (
    <div className="doc-main-container">
        <div className="doc-data">
            <div className="doc-img-container">
            <IoDocumentText className="user-img" />

            </div>
            <div className='doc-name'>
                Owneship Papers
            </div>
            <div className="doc-upload-date">
                <p>21-12-2000</p>
            </div>
            <div className="doc-status" >
                <p>Uploaded</p>
            </div>
            <div className="doc-button-container">
                <button className="doc-delete" >Delete</button>
                <button className="doc-download" >Download</button>
            </div>
        </div>
    </div>
  )
}

export default itemDocs