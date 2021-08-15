import React, { PropsWithChildren } from "react";
import { Nav } from "../components/Nav";
import { SideMenu } from "../components/SideMenu";

export const Wrapper = (props: PropsWithChildren<React.ReactNode>) => {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
};

// (alias) type PropsWithChildren<P> = P & {
//     children?: ReactNode | undefined; // (alias) type ReactNode = ReactNode | null | undefined;
// }
// import PropsWithChildren
