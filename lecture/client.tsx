import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

// import GuGuDanClass from "./GuGuDanClass";
// import GuGuDanHook from "./GuGuDanHook";
// import WordRelayHook from "./WordRelayHook";
// import WordRelayClass from "./WordRelayClass";

// import NumBaseballHook from "./NumBaseballHook";
// import NumBaseballClass from "./NumBaseballClass";

import ResponseCheckHook from "./ResponseCheckHook";
import ResponseCheckClass from "./ResponseCheckClass";

const Hot = hot(ResponseCheckHook);

ReactDOM.render(<ResponseCheckHook />, document.querySelector("#root"));
