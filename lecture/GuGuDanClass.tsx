import * as React from "react";
import { Component, FormEvent, ChangeEvent } from "react";

interface State {
  // interface IState
  first: number;
  second: number;
  value: string;
  result: string;
}

class GuGuDanClass extends Component<{}, State> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevState) => {
        return {
          result: "Good: " + prevState.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: "",
        };
      });
      if (this.input) {
        this.input.focus();
      }
    } else {
      this.setState({
        result: "No!",
        value: "",
      });
      if (this.input) {
        this.input.focus();
      }
    }
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  input: HTMLInputElement | null = null;

  onRefInput = (c: HTMLInputElement) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>
          {this.state.first} X {this.state.second}
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>Button</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default GuGuDanClass;
