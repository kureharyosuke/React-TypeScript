import * as React from 'react'
import { FunctionComponent } from 'react'
import { TryInfo } from './types'

// interface FunctionComponent<P = {}> P === PROPS 약어

const Try: FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {

  //const Try = ({ tryInfo }: { tryInfo: TryInfo }) => {

  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
}

// PropTypes 
export default Try