import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { SideMenu } from "./components/SideMenu";
import { Products } from "./admin/Products";
import { Main } from "./main/Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>
              <Route path="/" component={Main} />
              <Route path="/admin/products" component={Products} />
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
