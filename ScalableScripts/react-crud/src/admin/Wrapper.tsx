import React from "react";
import { Nav } from "../components/Nav";
import { SideMenu } from "../components/SideMenu";

export const Wrapper = () => {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"></main>
        </div>
      </div>
    </div>
  );
};
