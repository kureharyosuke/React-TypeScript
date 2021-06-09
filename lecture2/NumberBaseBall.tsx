import * as React from "react";
import { useRef, useState, useCallback } from "react";
import Try from "./Try";
import { TryInfo } from './types'

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen)
  }
  return array;
}

const NumberBaseBall = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState<TryInfo[]>([]); // 자바스크립트 빈배열은 타입스크립트 정의해야한다.
  const inputE1 = useRef<HTMLInputElement>(null); // function useRef<T>(initialValue: T | null): RefObject<T>;

  // 타입
  // interface RefObject<T> {
  //   readonly current: T | null;
  // }

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    // (1) 'e' is declared but its value is never read.
    // useCallback(e를 감싸면, e의 타입이 안잡힌다.) 

    e.preventDefault();
    const input = inputE1.current;
    if (value === answer.join('')) {
      setTries((t) => ([
        ...t,
        {
          try: value,
          result: '홈런!',
        }
      ]));
      setResult('홈런');
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);

      // if (input) {
      //   input.focus();
      // }

      input && input.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`) // state set은 비동기
        alert('게임을 다시 시작합니다.')
        setValue('');
        setAnswer(getNumbers())
        setTries([]);
      } else {
        console.log('답은', answer.join(''));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            console.log('strike', answerArray[i], answer[i]);
            strike += 1;
          } else if (answer.includes(answerArray[i])) { //  includes  = ES2016에서 들어온 기능!
            console.log('ball', answerArray[i], answer.indexOf(answerArray[i]))
            ball += 1;
          }
        }
        setTries(t => ([
          ...t,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`
          }
        ]))
        setValue('');

        // if (input) {
        //   input.focus();
        // }

        input && input.focus()
      }
    }

  }, [value, answer])

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputE1}
          maxLength={4}
          value={value}
          onChange={useCallback((e) => setValue(e.target.value), [])}
        //(2) (parameter) e: React.ChangeEvent<HTMLInputElement> 타입추론이 되는데,
        //(3) (parameter) e: any = useCallback 을 감싸면 e: any 표시된다.
        />
        <button>Button</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
        ))}
      </ul>
    </>
  );
};

export default NumberBaseBall;
