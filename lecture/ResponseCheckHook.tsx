import * as React from "react";
import { useState, useRef, useCallback } from "react";

const ResponseCheckHook = () => {
  const [state, setState] = useState("Waiting");
  const [message, setMessage] = useState("Click");
  const [result, setResult] = useState<number[]>([]);
  const timeOut = useRef<number | null>(null); // *** Generic 제너릭 꼭 사용! <number | null>
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === "Waiting") {
      timeOut.current = window.setTimeout(() => {
        // *** .setTimeout 사용할때는 꼭  window. 을 사용 할것!
        setState("Now");
        setMessage("지금 클릭");
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
      setState("Ready");
      setMessage("초록색이 되면 클릭하십시오.");
    } else if (state === "Ready") {
      // 성급하게 클릭!
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
      setState("Waiting");
      setMessage("너무 빠릅니다. 초록색이 된 후에 클릭하세요.");
    } else if (state === "Now") {
      // 반응속도 체크
      endTime.current = new Date().getTime();
      setState("Waiting");
      setMessage("클릭해서 시작하십시오.");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div
        id="screen"
        className={state}
        // css
        onClick={onClickScreen}
      >
        {message}
      </div>
      {renderAverage()}
      {/* render function */}
    </>
  );
};

export default ResponseCheckHook;
