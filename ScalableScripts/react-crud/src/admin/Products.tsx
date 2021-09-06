import React, { useEffect, useState } from "react";
import { Wrapper } from "./Wrapper";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const getProducts = async () => {};

    // getProducts();
    (async () => {
      const response = await fetch("http://localhost:8000/api/products");

      const data = await response.json();

      // console.log(data);
      setProducts(data);
    })();
  }, []);

  return (
    <Wrapper>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

// (alias) const Wrapper: (props: PropsWithChildren<React.ReactNode>) => JSX.Element
// import Wrapper
