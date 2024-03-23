import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appheader from "./components/header";
import Apphero from "./components/hero";

document.body.style.backgroundColor = "#f6f4e8";

export default function App() {
  return (
    <div id="App">
      <header id="header">
        <Appheader />
        <Apphero />
      </header>
      <main>
        <p>hej</p>
      </main>
    </div>
  );
}
