import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";
import Template from "./components/partials/Template";
import Rotas from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Header />

          <Rotas />

          <Footer />
        </Template>
      </BrowserRouter>
    </div>
  );
}

export default App;
