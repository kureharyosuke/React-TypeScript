
import { useState, useEffect } from 'react'

// 타이머 효과
function UseEffectComponent() {
  // useState :  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  const [val, valSet] = useState(1);

  // useEffect : function useEffect(effect: EffectCallback, deps?: DependencyList): void;

  // type EffectCallback = () => (void | Destructor);
  // interface MutableRefObject<T> {
  //   current: T;
  // }

  useEffect(() => {
    const timer = window.setInterval(() => {

      // valSet(val + 1); // 2까지 밖에 안 움직이는 문제가 생긴다.

      valSet(v => v + 1)

    }, 1000)

    return () => window.clearInterval(timer)

  }, []) // 빈배열이 있어야 한다.

  return (
    <div>{val}</div>
  )

}


export default UseEffectComponent