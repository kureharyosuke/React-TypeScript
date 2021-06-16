import * as React from 'react'
import { useState, useRef, useEffect } from 'react'

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px'
} as const

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
} as const

type a = typeof rspCoords
// //type a = {
// //     readonly 바위: "0";
// //     readonly 가위: "-142px";
// //     readonly 보: "-284px";
// // }
type b = keyof typeof rspCoords
// //type b = "바위" | "가위" | "보"

// type imgCoords = '0' | '-142px' | '-284px' // Union type 
// 비추천은 위의 const rspCoords의 고정값과 유니온 타입이 중복되어서, 같이 변경해줘야한다.
type ImgCoords = typeof rspCoords[keyof typeof rspCoords]


// *** Object.key : type = keys(o: object): string[]; 제너릭값이 없어 아쉽다.

// ***** 강제 형변환 Object.keys(rspCoords) => (Object.keys(rspCoords) as ['바위', '가위', '보'])

const computerChoice = (imgCoords: ImgCoords) => {
  return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
    return rspCoords[k] === imgCoords;
  })!
}

//const computerChoice: (imgCoords: ImgCoords) => "바위" | "가위" | "보" | undefined // undefined 잘못추론을 잡아줘야한다.
//! const computerChoice: (imgCoords: ImgCoords) => "바위" | "가위" | "보" // 확실하다고 !을 느낌표를 붙여줘야한다.
// *** 확실을 가졌을때는, undefined 가 안나오게, ! 를 꼭 붙여주자.

export const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.바위)
  const [score, setScore] = useState(0);
  const interval = useRef<number>();

  useEffect(() => { // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    console.log('다시 실행')
    interval.current = setInterval(changeHand, 100);
    return () => {// componentWillUnmount 역할
      console.log('종료')
      clearInterval(interval.current)
    }
  }, [imgCoord])

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위)
    }
  }

  // 고차함수
  const onClickBtn = () => () => {
    clearInterval(interval.current)
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)]
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('비겼습니다.')
    } else if ([-1, 2].includes(diff)) {
      setResult('이겼습니다.')
      setScore((prevScore) => prevScore + 1)
    } else {
      setResult('졌습니다.')
      setScore((prevScore) => prevScore - 1)
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000)
  }

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  )
}