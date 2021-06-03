
export interface HeadingProps { title: string }

export function Heading({ title }: HeadingProps) {
  return (
    <h1>{title}</h1>
  )
}

export const Heading2 = ({ title }: HeadingProps) => {
  return <h2>{title}</h2>
}

function TestComponent() {
  return (
    <>
      <Heading title="Good" />
      <Heading2 title="Not Bad" />
    </>
  )
}

export default TestComponent