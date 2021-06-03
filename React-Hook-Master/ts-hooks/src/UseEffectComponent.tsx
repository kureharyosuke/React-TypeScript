
import { useState, useEffect } from 'react'

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
      // valSet(val + 1);
      valSet(v => v + 1)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div>{val}</div>
  )

}


export default UseEffectComponent