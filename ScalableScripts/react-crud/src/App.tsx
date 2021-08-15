import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import SideMenu from "./components/SideMenu";
import { Products } from "./admin/Products";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
        </div>
      </div>

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        {/* <h2>Section title</h2> */}
        <BrowserRouter>
          <Route path="/admin/products" component={Products} />
        </BrowserRouter>
        {/* <div className="table-responsive">
          <Products />
        </div>  */}
      </main>
    </div>
  );
}

export default App;
