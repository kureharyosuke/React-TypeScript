import * as React from "react";
import Try from "./TryClass";
import { TryInfo } from "./types";

const { Component, createRef } = React;

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - 1)), 1)[0];
    array.push(chosen);
  }
  return array;
}

interface IState {
  result: string;
  value: string;
  answer: number[];
  tries: TryInfo[];
}

class NumberBaseball extends Component<{}, IState> {
  state = {
    result: "",
    value: "",
    answer: getNumbers(), // ex: [1,2,3,9]
    tries: [], // push 쓰면 안됨.
  };

  onSubmitForm = (e: React.FormEvent) => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    const input = this.inputRef.current;
    if (value === answer.join("")) {
      this.setState((prevState) => {
        return {
          result: "홈런!",
          tries: [...prevState.tries, { try: value, result: "홈런!" }],
        };
      });
      alert("게임을 다시 시작합니다.");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });

      // if (input) {
      //   input.focus()
      // }
      input && input.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v))
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join('')} 였습니다.`
        })
        alert('게임을 다시 시작합니다.')
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        })
        // if (input) {
        //   input.focus();
        // }

        input && input.focus()
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` }],
            value: '',
          }
        })
        // if (input) {
        //   input.focus();
        // }

        input && input.focus()
      }
    }
  }

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  // onRefInput = (c: HTMLInputElement) => {
  //   this.input = c;
  // }

  inputRef = createRef<HTMLInputElement>(); // this.inputRef

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.inputRef}
            maxLength={4}
            value={value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
            )
          })}
        </ul>
      </>
    );
  }
}
