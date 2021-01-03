import * as React from "react";
import { useState, useRef } from "react";

const GuGuDanHook = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); // = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;
    if (parseInt(value) === first * second) {
      setResult("Good!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      if (input) {
        input.focus();
      }
      // input!.focus();
    } else {
      setResult("No!");
      setValue("");
      if (input) {
        input.focus();
      }
      // input!.focus();
    }
  };

  return (
    <>
      <div>
        {first} x {second} ?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Button</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default GuGuDanHook;
