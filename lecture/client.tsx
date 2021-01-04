import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

// import GuGuDanClass from "./GuGuDanClass";
// import GuGuDanHook from "./GuGuDanHook";
// import WordRelayHook from "./WordRelayHook";
// import WordRelayClass from "./WordRelayClass";

import NumBaseballHook from "./NumBaseballHook";
import NumBaseballClass from "./NumBaseballClass";

const Hot = hot(NumBaseballHook);

ReactDOM.render(<NumBaseballHook />, document.querySelector("#root"));
