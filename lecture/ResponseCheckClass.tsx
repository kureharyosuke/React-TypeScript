import * as React from "react";
import { Component, createRef } from "react";

interface State {
  state: "Waiting" | "Now" | "Reday";
  message: string;
  result: number[];
}

class ResponseCheckClass extends Component<{}, State> {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       state: "Waiting" as "Waiting" | "Now" | "Ready",
  //       message: "클릭하시면 시작됩니다.",
  //       result: [] as number[],
  //     };
  //   }

  state: State = {
    // Error : 타입추론 result: Array에 빈 배열의 타입추론이 안되서 never 문제에 대한 interface => state: State = {}
    state: "Waiting",
    message: "클릭하시면 시작됩니다.",
    result: [],
  };

  // 화면에 영향을 안주는 것은 Ref
  timeout: number | null = null;
  startTime: number | null = null;
  endTime: number | null = null;

  onClickScreen = () => {
    const { state } = this.state;
    if (state === "Waiting") {
      this.timeout = window.setTimeout(() => {
        // *** .setTimeout 사용할때는 꼭  window. 을 사용 할것! (window? 인지 node?인지 인식이 안될때)
        this.setState({
          state: "Now",
          message: "Click",
        });
        this.startTime = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      this.setState({
        state: "Reday",
        message: "초록색이 되면 클릭하십시오.",
      });
    } else if (state === "Reday") {
      // 성급하게 클릭
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.setState({
        state: "Waiting",
        message: "너무 성급하시군요! 초록색 된 후에 클릭하십시오.",
      });
    } else if (state === "Now") {
      this.endTime = new Date().getTime();
      // Error1: getTime() = number , entTime = number | null ? 이니까...
      this.setState((prevState) => {
        return {
          state: "Waiting",
          message: "클릭해서 시작하십시오.",
          result: [...prevState.result, this.endTime! - this.startTime!],
          // Error2: ! 또는 if(){}
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={this.onReset}>Reset</button>
      </>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheckClass;
