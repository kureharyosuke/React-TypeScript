import { useState } from 'react'


function UseStateComponent() {

  // const [arr, arrSet] = useState([]) // never[] | const arr: never[] | useState<never[]>(initialState: never[] | (() => never[])): [never[], React.Dispatch<React.SetStateAction<never[]>>] (+1 overload)

  const [arr, arrSet] = useState<number[]>([])

  // const [name, nameSet] = useState(null); // onst name: null

  const [name, nameSet] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => nameSet('jack')}>
          Set  Name
        </button>
        {JSON.stringify(name)}
      </div>
    </div>
  )
}

export default UseStateComponent