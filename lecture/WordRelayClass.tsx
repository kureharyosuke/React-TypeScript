import * as React from "react";
// import { Component } from "react";
import { Component, createRef } from "react";

interface State {
  word: string;
  value: string;
  result: string;
}

class WordRelayClass extends Component<{}, State> {
  state = {
    word: "오럭키",
    value: "",
    result: "",
  };

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // const input = this.input;
    const input = this.onRefInput.current;
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "Good",
        word: this.state.value,
        value: "",
      });
      if (input) {
        input.focus();
      }
    } else {
      this.setState({
        result: "No",
        value: "",
      });
      if (input) {
        input.focus();
      }
    }
  };

  // Miss Error: No!! = <HTMLImageElement>
  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

  // input: HTMLInputElement | null = null;
  // onRefInput = (c: HTMLInputElement) => {
  //   this.input = c;
  // };

  onRefInput = createRef<HTMLInputElement>(); // createRef

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>Button</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordRelayClass;
