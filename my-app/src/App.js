import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appheader from "./components/header";
import Appstart from "./start";
import Apphero from "./components/hero";
import Appgalleri from "./galleri";

document.body.style.backgroundColor = "#f6f4e8";

export default function App() {
  return (
    <div id="App">
      <header
        id="header"
        style={{
          maxHeight: "calc(100vh - 50px)",
          overflowY: "auto",
          marginBottom: "20px",
        }}
      >
        <Appheader />
      </header>
      <main>
        <Apphero />
        <Appstart />
        <Appgalleri />
      </main>
    </div>
  );
}
