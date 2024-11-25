import React, { useState, useCallback } from "react";
import qrCode from "./assets/qrCode.png";
import errorImg from "./assets/error.png";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [altText, setAltText] = useState("No data");
  const [imageUrl, setImageUrl] = useState(qrCode);
  const [error, setError] = useState("");

  const generateQrCode = useCallback(async () => {
    if (!inputValue) return;
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code?size=500x500&data=${encodeURIComponent(
        inputValue
      )}`
    )
      .then((res) => res)
      .catch(() => {
        setError("Something went wrong :(");
        setAltText("Error");
        setImageUrl(errorImg);
      });

    const res = await response.blob();
    const url = URL.createObjectURL(res);
    setImageUrl(url);
    setAltText(`Qr code for ${inputValue}`);
    setError("");
  }, [inputValue]);

  const resetQrCode = () => {
    setInputValue("");
    setImageUrl(qrCode);
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
        <p className={`${error ? "error-occured" : "no-error"}`}>{error}</p>
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
