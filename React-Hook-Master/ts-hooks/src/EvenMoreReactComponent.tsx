import { ReactNode } from 'react'

export interface HeadingProps { title: string }

export function Heading({ title }: HeadingProps) {
  return (
    <h1>{title}</h1>
  )
}

export const Heading2 = ({ title }: HeadingProps) => {
  return <h2>{title}</h2>
}

export function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

export type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactNode;

export const List2: ListComponent = ({ items, render }) => {
  return (
    <ul>
      {
        items.map((item, index) => (
          <li key={index}>
            {render(item)}
          </li>
        ))
      }
    </ul >
  )
}

function TestComponent() {
  return (
    <>
      <Heading title="Good" />
      <Heading2 title="Not Bad" />
      <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
      <List2 items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
    </>
  )
}

export default TestComponent