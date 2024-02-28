import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appheader from "./components/header";
import Apphero from "./components/hero";

export default function App() {
  return (
    <div id="App">
      <p>hej</p>
      <header id="header">
        <Appheader />
      </header>
      <main>
        <Apphero />
      </main>
    </div>
  );
}
