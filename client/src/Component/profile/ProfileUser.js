import "../pages/CssFile/profile/Profile.css"
import {FaArrowLeft} from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaCaretRight } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { RiUpload2Fill } from "react-icons/ri";
import Profile from"../assests/Avtar- tabish.png"
import changePassword from './chagnePassword'
import Wishlist from "../pages/wishlist/Wishlist";
import React, { useContext, useState } from "react";
import { IoWarning } from "react-icons/io5";
import { RiImageFill } from "react-icons/ri";
import { RiUploadCloud2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const ProfileUser=()=>{

    const wishlist = async () => {
        console.log("wishlist click")
    };
    const uploadFile = async (file) => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "images_preset");

        let cloudName = process.env.REACT_APP_CLOUDINARY_NAME;
        // let resourceType = type === "image" ;
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        const res = await axios.post(api, formData);
        const { secure_url } = res.data;
        console.log(secure_url);
        return secure_url;
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(images);
    console.log(setImages);

   
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      //upload image file
      const uploadedImageUrls = await Promise.all(
        images.map(async (image) => {
          const imageUrl = await uploadFile(image);
          return imageUrl;
        })
      );
      setImages(uploadedImageUrls);
    //   updateImageData(uploadedImageUrls);
      console.log("file Upload Succefully!!");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    };
    
    const handleImageChange = (e) => {
      const files = e.target.files;
      const newImages = [];

      for (let i = 0; i < files.length; i++) {
        newImages.push(files[i]);
      }
      setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleDeleteImage = (index) => {
      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);
    };

    const isUploadDisabled = images.length < 5;

return (
  <>
    <div className="profile-parent">
      <div className="profile_aside">
        <div className="pro_aside_child1">
          <div className="back-btn">
            <button>
              <FaArrowLeft />
              Back
            </button>
          </div>
          <div className="pro_aside_child1_copy">
            <div className="profile-child">
              <div className="profile-img">
                <img src={Profile} alt="" />
              </div>
              <div className="pro-text">
                <h1>Tabish Khan</h1>
                <p>tabishcaptures@gmail.com</p>
              </div>
            </div>
            <div className="pro_aside_child2">
              <div className="pro-wishlist">
                <button onClick={wishlist}>
                  <div className="pro-aside-text flex items-center gap-2">
                    <FcLike />
                    Wishlist
                  </div>
                  <div className="drp-btn">
                    <FaCaretRight />
                  </div>
                </button>
              </div>
              <div className="pro-manage">
                <button>
                  <div className="pro-aside-text flex items-center gap-2">
                    <BsBuildings />
                    Properties management
                  </div>
                  <div className="drp-btn">
                    <FaCaretRight />
                  </div>
                </button>
              </div>
              <div className="help-center">
                <button>
                  <div className="pro-aside-text">Help Center</div>
                  <div className="drp-btn">
                    <FaCaretRight />
                  </div>
                </button>
              </div>
              <hr></hr>
              <div className="logout">
                <button>
                  <div className="pro-aside-text">Logout</div>
                  <div className="drp-btn">
                    <AiOutlineLogout />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-profile">
        <div className="profile-u">
          <div className="pro_info">
            <div className="pro_img_info">
              <div className="profile-img1">
                <img src={Profile} alt="" />
              </div>
              <div className="pro_img-info-text">
                <div className="upload-btn">
                  <label htmlFor="file-upload" className="custom-file-upload">
                    <RiUpload2Fill />
                    Update Your Profile
                  </label>
              
                  <input
                    id="file-upload"
                    className="upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
                <p>Max image size:2MP</p>
              </div>
            </div>
            <div className="pro-text">
              <div className="pro_name">
                <input type="text" placeholder="Tabish Khan" />
              </div>
              <div className="pro_email">
                <input type="text" placeholder="tabishcaptures@gmail.com" />
              </div>
              <div className="update-btn">
                <button>Update</button>
              </div>
            </div>
          </div>
        </div>
        {/* create password */}

        <div className="create-password">
          <div className="create_text">
            <div className="create-heading">
              <h1> Create password</h1>
            </div>
            <div className="New_password">
              <input type="password" placeholder="New Password" />
            </div>
            <div className="confirm-password">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="create-btn">
              <button>Create Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default ProfileUser;