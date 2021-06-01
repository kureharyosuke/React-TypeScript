import * as React from "react";
import { Component } from "react";

interface IState {
  first: number
  second: number
  value: string // 타입추론 안되어서, 인터페이스로 잡아줌.
  result: string
}

class GuGuDan extends Component<{}, IState> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevState) => {
        return {
          result: '정답 : ' + prevState.value, // prevState.value =  prevState: Readonly<IState>
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
        }
      })
      if (this.input) {
        this.input.focus();
      }
    } else {
      this.setState({
        result: '땡',
      })
      if (this.input) {
        this.input.focus();
      }
    }
  }

  input: HTMLInputElement | null = null;

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value })
  }

  onRefInput = (c: HTMLInputElement) => { this.input = c; }

  render() {
    return (
      <React.Fragment>
        <div>{this.state.first} * {this.state.second}</div>
        <form onSubmit={this.onSubmit}>
          <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange} />
          <button>Button</button>
        </form>
        <div>{this.state.result}</div>
      </React.Fragment>
    )
  }
}

export default GuGuDan;
