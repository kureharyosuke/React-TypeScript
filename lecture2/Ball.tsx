import * as React from 'react'
import { FunctionComponent } from 'react'

export const Ball: FunctionComponent<{ number: number }> = ({ number }) => {
  let background;

  if (number <= 10) {
    background = 'red';
  } else if (number <= 20) {
    background = 'orange';
  } else if (number <= 30) {
    background = 'yellow';
  } else if (number <= 40) {
    background = 'blue';
  } else {
    background = 'green';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
}

export default Ball

// type StatelessComponent<P = {}> = FunctionComponent<P>;

// type FC<P = {}> = FunctionComponent<P>;

// interface FunctionComponent<P = {}> {
//   (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
//   propTypes?: WeakValidationMap<P>;
//   contextTypes?: ValidationMap<any>;
//   defaultProps?: Partial<P>;
//   displayName?: string;
// }

// type VFC<P = {}> = VoidFunctionComponent<P>;

// interface VoidFunctionComponent<P = {}> {
//   (props: P, context?: any): ReactElement<any, any> | null;
//   propTypes?: WeakValidationMap<P>;
//   contextTypes?: ValidationMap<any>;
//   defaultProps?: Partial<P>;
//   displayName?: string;
// }