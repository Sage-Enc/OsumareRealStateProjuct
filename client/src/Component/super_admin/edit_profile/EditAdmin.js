import { React, useState } from "react";
import axios from "axios";
import Profile from "../../assests/Avtar- tabish.png";
import { RiUpload2Fill } from "react-icons/ri";
import "../../pages/CssFile/super_admin/editprofile/editadmin.css";
import AdminPass from "./AdminPass";
import ApprovalHomeUserCard from "../Home/ApprovalHomeUserCard"

const EditAdmin = () => {
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
    <div className="editadmin">
      <div className="editprofile">
        <div className="edittext">
          <h4>Edit Profile</h4>
        </div>
        <div className="admin-pro">
          <div className="admin-pro1">
            <div className="pro_img_info">
              <div className="profile-img1">
                <img src={Profile} alt="" />
              </div>
              <div className="pro_img-info-text">
                <h4>Admin</h4>
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
          </div>
          <AdminPass />
          {/* <ChangePass />
          <ContentWriPass /> */}
        </div>
      </div>
      <div>
        <ApprovalHomeUserCard />
      </div>
      {/* <div className="user-container">
        <div className="user-text">
          <h4>User profiles</h4>
        </div>
        <div className="user-data">
          <div className="user-img-container">
            <img src="" alt="User Image" className="user-img" />
            <div className="user-name">Tabish Khan</div>
          </div>
          <div className="id-section">
            <div className="user-num">
              <p>Offline</p>
            </div>
            <div className="user-email">
              <p>tabish@gmail.com</p>
            </div>
          </div>
          <div className="button-container">
            <div className="delete-btn">
              <button>
                <MdDelete />
                Delect account
              </button>
            </div>
            <div className="edit">
              <button>Edit Profile</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EditAdmin;
