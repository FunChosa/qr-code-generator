import React, { useState, useCallback } from "react";
import noDataImg from "./assets/nodata.png";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [altText, setAltText] = useState("No data");
  const [imageUrl, setImageUrl] = useState(noDataImg);

  const generateQrCode = useCallback(() => {
    if (!inputValue) return;
    setImageUrl(
      `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(
        inputValue
      )}`
    );
    setAltText(`Qr code for ${inputValue}`);
  }, [inputValue]);

  const resetQrCode = () => {
    setInputValue("");
    setImageUrl(noDataImg);
    setAltText("No data");
  };

  const downloadImage = () => {
    if (inputValue) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `qr-code-${inputValue}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="image">
          {imageUrl && (
            <img src={imageUrl} alt={altText} onClick={downloadImage} />
          )}
        </div>
        <div className="form">
          <input
            type="text"
            id="content"
            placeholder="Enter text or url"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="buttons">
            <button id="btnCreate" onClick={generateQrCode}>
              Generate
            </button>
            <button id="btnClear" onClick={resetQrCode}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
