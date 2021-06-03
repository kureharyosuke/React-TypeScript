
export interface HeadingProps { title: string }

export function Heading({ title }: HeadingProps) {
  return (
    <h1>{title}</h1>
  )
}

function TestComponent() {
  return <Heading title="Hello"
}