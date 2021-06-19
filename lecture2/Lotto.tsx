import * as React from 'react'
import Ball from './Ball'
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'

function getWinNumbers() {
  console.log('getWinNumbers')

  const candidate = Array(45).fill(null).map((v, i) => i + 1); // fill(null) 추가
  const shuffle = [];

  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
  }

  const bonusNumber = shuffle[shuffle.length - 1] // 보너스 공

  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c) // 당첨숫자 정렬

  return [...winNumbers, bonusNumber]

}

export const Lotto = () => {
  // useMemo를 안쓰면, 리렌더링된다. 그러면 하나씩 뽑히는 공이 다시 바뀐다.
  const lottoNumbers = useMemo<number[]>(() => getWinNumbers(), []); // 타입추론이 되지 않을때, 제너릭<TYPE>을 넣어줘야 한다.
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState<number[]>([]); // 빈배열일때, never[] 이기때문에, 꼭 정확하게 지정해주어야한다.
  const [bonus, setBonus] = useState<number | null>(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    console.log('useEffect');

    // winNumbers.length = 6 

    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = window.setTimeout(() => { // setTimeout 쓸때는 , window.setTimeout
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }

    timeouts.current[6] = window.setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);


    //  useEffect 는 return 을 통하여 정리
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };

  }, [timeouts.current]); // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

  useEffect(() => {
    console.log('로또 숫자를 생성합니다.')
  }, [winNumbers])

  const onClickRedo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('onClickRedo');
    console.log(winNumbers);

    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];

  }, [winNumbers])

  return (
    <React.Fragment>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한번더</button>}
    </React.Fragment>
  )
}