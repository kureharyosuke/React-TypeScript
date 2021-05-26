import * as React from 'react'
import { useState, useRef } from 'react'

// <> === React.Fragment 와 동일하다.
const GuGuDan = () => {
  const [first, setFirst] = useState<number>(Math.ceil(Math.random() * 9))
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9))
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;
    if (parseInt(value) === first * second) {
      setResult('정답')
      setFirst(Math.ceil(Math.random() * 9))
      setSecond(Math.ceil(Math.random() * 9))
      // input!.focus(); // 확신 갖고 있을때만 !을 사용
      if (input) {
        input.focus()
      }
    } else {
      setResult('오답')
      setValue('')

      // input!.focus(); // 아주 작은 확률이라도 에러가 날 수 있기 때문에, 사용하지 않는게 좋다.
      if (input) {
        input.focus()
      }
    }

  }

  return (
    <>
      <div>{first} * {second}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} type="number" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
      </form>
      <div>{result}</div>
    </>
  )
}

export default GuGuDan;