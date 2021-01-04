import * as React from "react";
import { Component, createRef } from "react";

interface State {
  word: string;
  value: string;
  result: string;
}

class WordRelayClass extends Component {
  state = {
    word: "제로초",
    value: "",
    result: "",
  };

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
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
  input: HTMLInputElement | null = null;

  onChangeInput = (e: React.ChangeEvent<HTMLImageElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

//   onRefInpout = createRef<HTMLInputElement>();

    onRefInput = (c: HTMLInputElement) {
        this.input = c;
    }

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
