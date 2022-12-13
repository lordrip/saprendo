import { html } from 'lit-html';
import { registeredOperationsComponent } from '../operations';

export const Page2 = (
  user: string,
  onChangeOperation: (operationKey) => void,
) => html`
<p class="mt-1 text-lg">Hello ${user}, what do you wanna play today?</p>
${registeredOperationsComponent(onChangeOperation)}
`;
