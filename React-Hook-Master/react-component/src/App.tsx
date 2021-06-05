import React, { ReactNode, ReactElement } from 'react';
import './App.css';


// 예전방식 작동은 하지만, 비추천한다. *****
// const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>


// Conventional props
function Heading({ title }: { title?: string }) {
  return (
    <h1>{title}</h1>
  )
}

// 성공!
// function HeadingWithContent({ children }: { children: string | JSX.Element }) {
//   return (
//     <h1>{children}</h1>
//   )
// }

function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
  return (
    <h1>{children}</h1>
  )
}

// defaultProps

const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps

function Contatiner({ heading, children }: ContainerProps): ReactElement {
  return (
    <div><h1>{heading}</h1>{children}</div>
  )
}

Contatiner.defaultProps = defaultContainerProps

// Functional Props
function TextWithNumber({ children }: { children: (num: number) => ReactNode }) {
  const [state, stateSet] = React.useState<number>(1);

  return (
    <div>
      <div>
        {children(state)}
      </div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  )
}


function App() {
  return (
    <div>
      <Heading title={"Heelo"}></Heading>
      {/* <HeadingWithContent><strong>hI</strong></HeadingWithContent> */}
      <HeadingWithContent><strong>hI</strong></HeadingWithContent>
      <Contatiner>Foo</Contatiner >
      {/* roperty 'heading' is missing in type '{ children: string; }'에러가 나니까,  heading: ReactNode,를  PROPS삭제, */}
      <TextWithNumber>
        {(num: number) => <div>Today's number, number is {num}</div>}
      </TextWithNumber>
    </div>
  );
}

export default App;
