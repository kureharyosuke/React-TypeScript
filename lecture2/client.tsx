import * as React from 'react' // 마우스 오른쪽 클릭 Go To Type Definition
import * as ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

// import GuGuDan from './GuGuDan'
// import WordRelay from './WordRelay'
import NumberBassBall from './NumberBassBall'

const Hot = hot(NumberBassBall);

// export default가 있어서,  * as를 사용안해도, 된다. 
// import * as React from 'react'는 export default가 없어서 사용해야한다.

ReactDOM.render(<Hot />, document.querySelector('#root'))