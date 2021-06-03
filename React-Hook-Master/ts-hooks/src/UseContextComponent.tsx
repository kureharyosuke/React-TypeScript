import { useState, useContext } from 'react'

import UserContext, { UserState } from './store'

function ConsumerComponent() {

  // 둘다 가능
  // const user: UserState = useContext(UserContext);
  const user = useContext<UserState>(UserContext);


  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

function UseContextComponent() {

  const [user, userSet] = useState<UserState>({
    first: "Jane",
    last: 'Smith'
  })

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={() => userSet({
        first: 'yunseok', last: 'oh'
      })}>Change context</button>
    </UserContext.Provider >
  )
}

export default UseContextComponent