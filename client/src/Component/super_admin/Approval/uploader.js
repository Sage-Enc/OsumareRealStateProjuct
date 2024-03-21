import { useState, React } from "react";
import "./uploader.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { PictureAsPdf } from "@mui/icons-material";

function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");

  return (
    <div className="uploader">
      <div
        className="UploadBtn"
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="application/pdf"
          name=""
          id=""
          className="input-field"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />

        {image ? (
          // <img src={image}  alt={fileName} />
          <PictureAsPdf />
        ) : (
          <>
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browse Files To Upload</p>
          </>
        )}
      </div>

      <section className="uploaded-row">
        <AiFillFileImage color="#1475cf">
            <span className="upload-content">
                {fileName}
                <MdDelete
                onClick={()=>{
                    setFileName("No Selected File")
                    setImage(null)
                }} />
            </span>
        </AiFillFileImage>
      </section>
    </div>
  );
}

export default Uploader;
