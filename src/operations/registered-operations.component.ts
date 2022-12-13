import { html } from 'lit-html';
import { domEventHandler } from '../utils';
import { registeredOperations } from './registered-operations';

export const registeredOperationsComponent = (onChangeOperation: (operationKey: keyof typeof registeredOperations) => void) => html`
<select  class="mt-2 text-md" @change=${domEventHandler(onChangeOperation)}>
  <option disabled selected></option>
  ${Object.keys(registeredOperations)
    .map((key) => html`
      <option value=${key}>${registeredOperations[key]['title']}</option>
    `)
  }
</select>
`;
