import * as React from "react";
import { useState, useCallback, useRef } from "react";

const WordRelayHook = () => {
  const [word, setWord] = useState("apple");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
    (e) => {
      e.preventDefault();
      const input = inputRef.current;
      if (word[word.length - 1] === value[0]) {
        setResult("Good");
        setWord(value);
        setValue("");
        if (input) {
          input.focus();
        }
      } else {
        setResult("No");
        setValue("");
        if (input) {
          input.focus();
        }
      }
    },
    [word, value] // *****
  );

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChange} />
        <button>Button</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelayHook;
