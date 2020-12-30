import { html } from 'lit-html';
import { registeredOperationsComponent } from '../operations';

export const Page2 = (
  user: string,
  onChangeOperation: (operationKey: string) => void,
) => html`
<h1>2 of 3</h1>

<p>Hello ${user}, what do you wanna play today?</p>
${registeredOperationsComponent(onChangeOperation)}
`;
