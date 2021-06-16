// 주의 ! setTimeout(NodeJS.Timeout은 안된다. 서버) | window.setTimeout 과 제너릭으로 <number | null>
import * as React from "react";
import { useState, useRef, useCallback } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState<string | null>("waiting");
  const [message, setMessage] = useState<string | null>("클릭해서 시작하세요.");
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null); // useRef 타입은 3가지 이기때문에 주의
  const startTime = useRef<number>(0); // Type = readonly
  const endTime = useRef<number>(0); // Type = readonly

  const onClickScreen = useCallback(() => {
    if (state === 'waiting') {
      timeout.current = window.setTimeout(() => { // 에러 날때, 제너릭을 꼭 확인!! // setTimeout = NodeJS.Timeout 으로 잡고 있으니까, window(브라우저).setTimeout
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000) // 2초~3초 랜덤 // 강제로 형변할떄는
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
    } else if (state === 'ready') { // 성급하게 클릭
      // clearTimeout(timeout.current!); #*** 이것보다는 if문으로 감싸서, 확실하게 에러를 차단해주는게 좋다.
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') {
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current]
      })
    } // 반응속도 체크 
  }, [state]) // state 가 조건문에 맞게 상태 값이 변경되니까, state를 넘어주어야 한다.



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
