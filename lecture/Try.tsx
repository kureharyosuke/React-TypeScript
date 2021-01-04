import * as React from "react";
import { FunctionComponent } from "react";
// import { TryInfo } from './NumBaseballHook'; // V-1
import { TryInfo } from "./type";

// V-1
// const Try = {{tryInfo}:{ tryInfo: TryInfo }} => {
//     return (
//         <>
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         </>
//     )
// }

const Try: FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {
  return (
    <>
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    </>
  );
};

export default Try;
