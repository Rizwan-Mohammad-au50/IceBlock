import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0%;
    padding: 0;
  }
  body{
    background-image: url("/images/bg_img03.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-color: #000000;
    color: white;
    max-height: 100vh;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Poppins', sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
