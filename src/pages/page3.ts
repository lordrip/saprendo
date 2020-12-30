import { html } from 'lit-html';
import { registeredOperations } from '../operations/registered-operations';

export const Page3 = (
  operationKey: string,
) => html`
<h1>3 of 3</h1>

<p>Let's play ${registeredOperations[operationKey].title}!</p>
${registeredOperations[operationKey].component()}
`;
