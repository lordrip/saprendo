import { html } from 'lit-html';
import { domEventHandler } from '../utils';
import { renderApp } from '../pages/homepage';

let value = '';

const onClick = (exercise) => {
  if (exercise.answer === Number.parseInt(value, 10)){
    value = ''
    renderApp(true);
  }
}

const onChange = (userAnswer: string) => {
  value = userAnswer;
}

export const writtenOperation = (exercise, operationKey) => html`
<div class="operation">
  <span>${exercise.num1}</span>
  <span class='operator ${operationKey.replace(' ', '')}'>${exercise.operator}</span>
  <span>${exercise.num2}</span>
  <span>=</span>
  <span>?</span>
</div>
<div class="result">
  <input .value=${value} type="number" @change=${domEventHandler(onChange)}>
  <button @click=${() => onClick(exercise)}>Go!</button>
</div>
`;
