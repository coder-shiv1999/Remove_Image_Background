import React from 'react'
import { useState } from "react";
import './Logic.css'

export default function Logic() {
 
const [selectedFile, setSelectedFile] = useState(null);
const [finalUrl, setFinalUrl] = useState(null);
const[isUpload, setisUpload] = useState(false);

const handleFileInputChange = (e) =>{
    let image = e.target.files[0]; 
    console.log(image);
    setSelectedFile(image);
};



const handleFileUpload =async () =>{
    setisUpload(true);
    const formData = new FormData();
    formData.append("image_file", selectedFile);
    formData.append("size", "auto");

    const api_key = "qEuV9f1z7SdmXsy6rxJ18Kg2";
    await fetch("https://api.remove.bg/v1.0/removebg",{
    method:"POST",
    headers:{
        "X-Api-Key": api_key,
    },
    body: formData,
    }).then((response) => {
        return response.blob();
      })
      .then((blob) => {
        console.log(blob);
        const url = URL.createObjectURL(blob);
        setFinalUrl(url);
        setisUpload(false);
      })
      .catch();
     setisUpload(false);
};

// const downloadImage =  (e) =>{
//     const imgurl = URL.createObjectURL(blob);
    
// }
   

  

  return (

    <>
    
    <form className="info_container">
        <label className="info_text">Select a File</label>
        <input type="file" className="choosebtn" onChange={handleFileInputChange} required />
        {!isUpload ? (
            <button
              type="button"
              onClick={handleFileUpload}
              className="btn btn_upload"
            >
              Upload
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFileUpload}
              className="btn btn_upload btn_disabled"
              disabled={true}
            >
              Uploading...
            </button>
          )}
          
    </form>
      
    {finalUrl && (
        <div className="final_img_area">
          <img src={finalUrl} alt="final_img" className="final_img" />
        </div>
      )} {finalUrl && (
        <a href={finalUrl} download="no-back.png">
          <button className="btn btn_download">Download</button>
        </a>
      )}
      </>
  );
}
