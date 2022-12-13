import { html } from 'lit-html';
import { Operation } from '../models';
import { renderApp } from '../pages/homepage';
import { arrayShuffle } from '../utils';

const onClick = (exercise, answer) => {
  if (exercise.answer === answer){
    renderApp(true);
  }
}

export const TouchOperation = (exercise: Operation, operationKey: string) => html`
<div class="operation">
  <span class="text-lg">${exercise.num1}</span>
  <div class="operator ml-1">
    <span class="text-xl">${exercise.operator}</span>
  </div>
  <span class="text-lg ml-1">${exercise.num2}</span>
  <span class="text-lg ml-1">=</span>
  <span class="text-lg ml-1">?</span>
</div>

<div class="result">
  ${
    arrayShuffle([exercise.answer, exercise.opt1, exercise.opt2, exercise.opt3])
      .map((option) => html`
        <button class="text-lg" @click=${() => onClick(exercise, option)}>${option}</button>
      `)
  }
</div>
`;
