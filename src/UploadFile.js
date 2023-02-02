import React, { useState } from "react";
import { Pdfviewer } from "./Pdfviewer";
import './App.css';
import UploadIcon from '@mui/icons-material/Upload';

const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const [upload,setUpload]=useState(false);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUpload(true);
  };

  return (
    <>
    {!upload ? (
    <div className="form">
        <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} id="file" accept=".pdf" />
        <label htmlFor="file">
          Choose a Pdf
          <UploadIcon sx={{fontSize:45}}></UploadIcon>  
         </label>
        <button className="btn" type="submit">Upload</button>
        </form>
    </div>):  (  <Pdfviewer file={file} /> )
     }
    </>
    
  );
};

export default UploadPDF;
