import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
export const Pdfviewer = ({file}) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageScale, setPageScale] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setTotalPages(numPages);
    }
  
    function handleZoomIn() {
      if (pageScale < 3) {
        setPageScale(pageScale + 0.1);
      }
    }
  
    function handleZoomOut() {
      if (pageScale > 0.3) {
        setPageScale(pageScale - 0.1);
      }
    }
  
    function handleNext() {
      if (pageNumber < totalPages) {
        setPageNumber(pageNumber + 1);
      }
    }
    function handlePrevious() {
      if (pageNumber > 0) {
        setPageNumber(pageNumber - 1);
      }
    }
  return (
    <div className="App">
        <div className="header">
        <div className="button-container1">
          <button className="btn1"  onClick={handleZoomIn} disabled={pageScale >= 3}>
            Zoom + 
          </button>
          <button className="btn1" onClick={handleZoomOut} disabled={pageScale <= 0.3}>
            Zoom -
          </button>
        </div>
        <div className="page-text">
          Page <span className="current">{pageNumber}</span> of {totalPages}
        </div>
        <div className="button-container2">
          <button className="btn1" onClick={handlePrevious} disabled={pageNumber === 1}>
            ‹ Previous
          </button>
          <button className="btn1" onClick={handleNext} disabled={pageNumber === totalPages}>
            Next ›
          </button>
        </div>
      </div>
        <div className="page-container">
        <Document file={file} loading="please wait"  onLoadSuccess={onDocumentLoadSuccess}>
          <Page className="page" renderTextLayer={false} renderAnnotationLayer={false}  pageNumber={pageNumber} scale={pageScale} loading="please wait"    />
        </Document>
      </div>
      
    </div>
  )
}
