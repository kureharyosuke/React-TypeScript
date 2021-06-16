import * as React from 'react'
import { useState, useRef, useEffect } from 'react'

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px'
}

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
}

const computerChoice = (imgCoords) => {
  return Object.keys(rspCoords).find((k) => {
    return rspCoords[k] === imgCoords;
  })
}

export const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.바위)
  const [score, setScore] = useState(0);
  const interval = useRef<number>();

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.바위);
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