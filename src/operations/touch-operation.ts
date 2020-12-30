import { html } from 'lit-html';
import { Operation } from '../models';
import { renderApp } from '../pages/homepage';
import { arrayShuffle } from '../utils';

const onClick = (exercise, answer) => {
  if (exercise.answer === answer){
    renderApp(true);
  }
}

export const touchOperation = (exercise: Operation, operationKey: string) => html`
<div class="operation">
  <span>${exercise.num1}</span>
  <span class='operator ${operationKey.replace(' ', '')}'>${exercise.operator}</span>
  <span>${exercise.num2}</span>
  <span>=</span>
  <span>?</span>
</div>
<div class="result">
  ${
    arrayShuffle([exercise.answer, exercise.opt1, exercise.opt2, exercise.opt3])
      .map((option) => html`
        <button @click=${() => onClick(exercise, option)}>${option}</button>
      `)
  }
</div>
`;
