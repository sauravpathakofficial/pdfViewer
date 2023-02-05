import React, { useState } from "react";
import { Pdfviewer } from "./Pdfviewer";
// import Box from '@mui/material/Box';
import './App.css';
// import UploadIcon from '@mui/icons-material/Upload';
import {MdPictureAsPdf } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
// import { positions } from "@mui/system";


const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const [upload,setUpload]=useState(false);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setUpload(true);
  };



  return (
    <>
    {!upload ? (
      <main>
           <header>
            <h1 className="mainHeading">
             <span style={{ color: "#0DACB1",fontSize:"40px",position: 'relative',
               top:"8px"
       }}>  <MdPictureAsPdf /> </span> PDF Reader
            </h1>
            <h3>
              Display ,Print,and share PDFs Online
            </h3>
           </header>
            <div className="form">
              <form >
              <input type="file" onChange={handleChange} id="file" accept=".pdf" />
              <label htmlFor="file">
               Choose <span style={{fontSize:"3rem" ,fontWeight:"bold",}}><VscFilePdf />  </span>
                {/* <UploadIcon sx={{fontSize:45}}></UploadIcon>   */}
              </label>
              </form>
            </div>
      </main>
    ):  (  <Pdfviewer file={file} /> )
     }
    </>
    
  );
};

export default UploadPDF;
