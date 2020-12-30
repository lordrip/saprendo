import { html } from 'lit-html';
import { EventHandlerFn } from '../models';
import { registeredOperations } from './registered-operations';

export const OperationsPage = (
  operationKey: keyof typeof registeredOperations,
  onBackClick: EventHandlerFn,
) => html`
<a @click=${onBackClick}>Back</a>
<p>Operations</p>
<p>Selected operations was: ${operationKey}</p>

${registeredOperations[operationKey]}
`;
