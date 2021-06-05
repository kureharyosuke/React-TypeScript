import React, { ReactNode, ReactElement } from "react";
import "./App.css";

// 예전방식 작동은 하지만, 비추천한다. *****
// const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>


// Conventional props
function Heading({ title }: { title?: string }) {
  return <h1>{title}</h1>;
}

// 성공!
// function HeadingWithContent({ children }: { children: string | JSX.Element }) {
//   return (
//     <h1>{children}</h1>
//   )
// }

function HeadingWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}



// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

function Contatiner({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

Contatiner.defaultProps = defaultContainerProps;


// Functional Props
function TextWithNumber({
  header,
  children,
}: {
  header: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = React.useState<number>(1);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  );
}

// List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}


// Class component
class ClassContainer extends React.Component<{ title: ReactNode }> {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

function App() {
  return (
    <div>
      <Heading title={"Heelo"}></Heading>
      {/* <HeadingWithContent><strong>hI</strong></HeadingWithContent> */}
      <HeadingWithContent>
        <strong>hI</strong>
      </HeadingWithContent>
      <Contatiner>Foo</Contatiner>
      {/* roperty 'heading' is missing in type '{ children: string; }'에러가 나니까,  heading: ReactNode,를  PROPS삭제, */}
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Today's number, number is {num}</div>}
      </TextWithNumber>
      <List
        items={["APPLE", "BANANA", "ORANGE"]}
        render={(itme: string) => <div>{itme.toLowerCase()}</div>}
      ></List>
      {/* apple banana orange */}
      <ClassContainer title="Thank you" />
    </div>
  );
}

export default App;
