import React from 'react'
import { FaCalendar } from "react-icons/fa";
import Uploader from "./uploader";
import {Link} from "react-router-dom"

function contactOwner(e){
  e.preventDefault();
}

function viewDocument(e){
  e.preventDefault();
}

function viewImages(e){
  e.preventDefault();
}

function viewAmenities(e){
  e.preventDefault();
}

function approvalform() {
  return (
    <div>
        <div className="postForm">
        <form action="">
          <div className="postFormTop">
            <div className="postTitDes">
              <label htmlFor="postTitle">Title</label>
              <br />
              <input
                type="text"
                name="postTitle"
                id=""
                className="postTitleInput"
              />
              <br />
              <label htmlFor="postDescription">Description</label>
              <br />
              <textarea name="postTitle" id="" className="postDescriptionInput" />
              <p>
                <FaCalendar /> &nbsp; Requested in Dec, 2023
              </p>
            </div>
            <div className="postProofDoc">
              <label htmlFor="postProofDoc" className='ProofDocLabel'>Proof Documents</label>
              <br />
              <Uploader />
              <div className="btnSection">
                <button className="contactOwnerBtn" onClick={contactOwner}>Contact Owner</button>
                <button className="viewDocument" onClick={viewDocument}>View Documents</button>
              </div>
            </div>
          </div>
          <div className="postFormBottom">
            <div className="bhk">
              <div className="bhkTop">
                <h2>Bhk</h2>
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
              <label htmlFor="locality">Locality</label>
              <br />
              <input type="text" name="locality" id="" placeholder="Civil Lines Rampur" className="localityInput" />
              <br />
              <button className="viewImages" onClick={viewImages}>View Images</button>
            </div>
            <div className="amenities">
              <h2>Add Amenities</h2>
              <div className="amenitiesItemContainer">
                <div className="amenitiesItem">
                  <input type="checkbox" name="" id="" />Parking
                </div>
                <div className="amenitiesItem">
                  <input type="checkbox" name="" id="" />Garden
                </div>
                <div className="amenitiesItem">
                  <input type="checkbox" name="" id="" />High-Speed Internet
                </div>
                <div className="amenitiesItem">
                  <input type="checkbox" name="" id="" />Security
                </div>
              </div>
              <br />
              <button className="viewAll" onClick={viewAmenities}><Link to="viewall">View All</Link></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default approvalform