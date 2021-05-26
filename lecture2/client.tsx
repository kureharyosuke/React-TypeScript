import * as React from 'react' // 마우스 오른쪽 클릭 Go To Type Definition
import * as ReactDOM from 'react-dom'

import GuGuDan from './GuGuDan'
// export default가 있어서,  * as를 사용안해도, 된다. 
// import * as React from 'react'는 export default가 없어서 사용해야한다.

ReactDOM.render(<GuGuDan />, document.querySelector('#root'))