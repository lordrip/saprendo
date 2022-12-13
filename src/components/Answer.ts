import { html } from 'lit-html';

export const Answer = (renderAgain) => html`<div class="answer">
  <div class="check text-md">
    <div class="checkmark-circle">
      <div class="background"></div>
      <div class="checkmark draw"></div>
    </div>
    <span>Good job!</span>
  </div>
  <button class="again text-md" @click=${renderAgain}>
    <span class="restart">&#x21bb;</span>
    <span>Play again</span>
  </button>
</div>`;
