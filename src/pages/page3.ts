import { html } from 'lit-html';
import { registeredOperations } from '../operations/registered-operations';

export const Page3 = (
  operationKey: string,
) => html`
<p class="mt-1 text-lg">Let's play ${registeredOperations[operationKey].title}!</p>
${registeredOperations[operationKey].component()}
`;
