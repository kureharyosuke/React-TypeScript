import React, { ReactNode, ReactElement } from 'react';
import './App.css';

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

function Contatiner({ heading, children }: { children: ReactNode } & typeof defaultContainerProps): ReactElement {
  return (
    <div><h1>{heading}</h1>{children}</div>
  )
}

Contatiner.defaultProps = defaultContainerProps


function App() {
  return (
    <div>
      <Heading title={"Heelo"}></Heading>
      {/* <HeadingWithContent><strong>hI</strong></HeadingWithContent> */}
      <HeadingWithContent><strong>hI</strong></HeadingWithContent>
      <Contatiner>Foo</Contatiner >
      {/* roperty 'heading' is missing in type '{ children: string; }'에러가 나니까,  heading: ReactNode,를  PROPS삭제, */}
    </div>
  );
}

export default App;
