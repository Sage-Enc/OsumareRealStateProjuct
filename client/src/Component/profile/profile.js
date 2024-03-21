import React, { useContext, useState, useEffect } from "react";
import "../pages/CssFile/profile/Profile.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaCaretRight } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { RiUpload2Fill } from "react-icons/ri";
import Profile from "../assests/Avtar- tabish.png";
import axios from "axios";
import "../pages/CssFile/profile/Profile.css";
import changePassword from "./chagnePassword";
import Wishlist from "../pages/wishlist/Wishlist";

import { RiUploadCloud2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ThreeDots } from "react-loader-spinner";
import { Co2Sharp } from "@mui/icons-material";

const ProfileUser = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    email: "",
    userAvatar: "",
    createdAt: "",
  });

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [images, setImages] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in local storage");
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "http://localhost:5000/api/Register/edit-user",
          config
        );
        const { firstname, email, userAvatar, createdAt } = response.data;
        setUserData({ firstname, email, userAvatar, createdAt });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const wishlist = async () => {
    console.log("wishlist click");
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

  const logout = async () => {
    try {
      await axios.get("http://localhost:5000/api/Register/logout");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
    const files = e.target.files[0];
    setImages(files);
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const updateUser = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      if (!token) {
        throw new Error("No token found in local storage");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the Authorization header
        },
      };

      let updatedUser = { ...userData };
      const response = await axios.put(
        "http://localhost:5000/api/Register/edit-user",
        userData,
        config
      );
      console.log("User updated:", response.data);
      console.log("User updated:", response);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };


  //working the chnage password
  const handlePskCheck = (e) => {
    const { name, value } = e.target;
    if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const chnagePsk = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found in local storage");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.put(
        "http://localhost:5000/api/Register/updatepassword",
        {
          password: newPassword,
        },
        config
      );
      alert("Password changed successfully");
      console.log(response);
      setNewPassword("");
      setConfirmPassword("");
      setError("");
    } catch (error) {
      console.error("Password change failed:", error);
    }
  };

  // const isUploadDisabled = images !== null && images.length < 5;
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
                  <img
                    src={userData.userAvatar || Profile}
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
                <div className="pro-text">
                  <h1>{userData.firstname}</h1>
                  <h1>{userData.email}</h1>
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
                  <img src={userData.userAvatar || Profile} alt="" />
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
                  <input
                    type="text"
                    name="firstname"
                    placeholder="UserName"
                    value={userData.firstname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="pro_email">
                  <input
                    type="text"
                    name="email"
                    placeholder="email@email.com"
                    value={userData.lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="update-btn">
                  <button onClick={updateUser}>Update</button>
                </div>
              </div>
            </div>
          </div>
          {/* create password */}

          <div className="create-password">
            <div className="create_text">
              <div className="create-heading">
                <h1> Change password</h1>
              </div>
              <div className="New_password">
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={handlePskCheck}
                  required
                />
              </div>
              <div className="confirm-password">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handlePskCheck}
                  required
                />
              </div>
              <div className="error-message">{error}</div>
              <div className="create-btn">
                <button onClick={chnagePsk}>Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
