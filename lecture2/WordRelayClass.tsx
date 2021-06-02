import * as React from 'react'
import { Component, createRef } from 'react'

interface IState {
  word: string
  value: string
  result: string
}

class WordRelayClass extends Component<{}, IState> {
  state = {
    word: '사자',
    value: '',
    result: '',
  }

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // const input = this.input;
    // createRef 쓰는방법
    const input = this.onRefInput.current
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '정답',
        word: this.state.value,
        value: '',
      });
      if (input) {
        input.focus();
      }
    } else {
      this.setState({
        result: '오답',
        value: '',
      })
      if (input) {
        input.focus();
      }
    }

  }

  input: HTMLInputElement | null = null;

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value })
  }

  // onRefInput = (c: HTMLInputElement) => {
  //   this.input = c;
  // }

  // 위에 또는 아래
  onRefInput = createRef<HTMLInputElement>();

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>Button</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

export default WordRelayClass;