import * as React from "react";
import { useState, useRef, useCallback } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState<string | null>("waiting");
  const [message, setMessage] = useState<string | null>("클릭해서 시작하세요.");
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef<number | null>(0);
  const endTime = useRef<number | null>(0);


  const onReset = useCallback(() => {
    setResult([]);
  }, [])

  const renderAverge = () => {
    return result?.length === 0 ? null : (
      <>
        <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>{onReset}</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverge()}
    </>
  );
};
