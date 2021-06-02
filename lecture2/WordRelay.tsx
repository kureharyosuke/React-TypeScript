import * as React from 'react'
import { useState, useCallback, useRef } from 'react'

const WordRelay = () => {
  const [word, setWord] = useState<string>('사과')
  const [value, setValue] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const inputE1 = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputE1.current;
    if (word[word.length - 1] === value[0]) {
      setResult('정답');
      setWord(value);
      setValue('');

      // input.focus(); // const input: HTMLInputElement | null =>  Object is possibly 'null'

      // if (input) {
      //   input.focus();
      // }

      input && input.focus();
    } else {
      setResult('오답');
      setValue('');

      // if (input) {
      //   input.focus();
      // }

      input && input.focus();
    }
  }, [word, value]) // [value] 꼭 넣어야한다. 오류가 안난다.
  // useCallback 안에서 쓰이는 state(word, value) 넣어줘야 한다.

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }, [])

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputE1} value={value} onChange={onChange} />
        <button>Button</button>
      </form>
      <div>{result}</div>
    </>
  )
}

export default WordRelay;