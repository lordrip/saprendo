import { html, render } from 'lit-html';
import { Navigation } from '../utils/navigation';
import { Page1 } from './page1';
import { Page2 } from './page2';
import { Page3 } from './page3';

const navigationHandler = new Navigation();
let currentPlayer = '';
let currentOperationKey;

const onChangePlayer = (user: string) => {
  currentPlayer = user;
  renderApp(false);
};
const onChangeOperationKey = (operationKey: string) => {
  currentOperationKey = operationKey;
  renderApp(false);
};
const onBackClick = () => {
  navigationHandler.back();
  renderApp(false);
};
const onNextClick = () => {
  navigationHandler.next();
  renderApp(false);
};
const test = () => {
  renderApp(false);
}

const getPage = (page: number) => {
  switch (page) {
    case 2:
      return Page2(currentPlayer, onChangeOperationKey);
    case 3:
      return Page3(currentOperationKey);

    default:
      return Page1(currentPlayer, onChangePlayer);
  }
}

const getBackButton = () =>
!navigationHandler.isInitialPage()
 ? html`
  <button class="prev" @click=${onBackClick}>
  </button>`
 : html`
  <div class="empty">
  </div>`;

const getNextButton = () =>
!navigationHandler.isLastPage()
 ? html`
 <button @click=${onNextClick}>
 </button>`
 : html`
 <div class="empty">
 </div>`;

const HomePage = (sucess) => html`
<div class="root">
  <div class="page">${getPage(navigationHandler.getCurrentIndex())}</div>
  <div class="navigation">
    ${getBackButton()}
    ${getNextButton()}
  </div>
</div>
<div class="bg">
  <ul class="rectangles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
${sucess
? html`<div class="t">
  <div class="check">
    <div class="checkmark-circle">
      <div class="background"></div>
      <div class="checkmark draw"></div>
    </div>
    <span>Good job!</span>
  </div>
  <button class="again" @click=${test}>
    <span class="restart">&#x21bb;</span>
    <span>Play again</span>
  </button>
  </div>`
: ''}
`;

export const renderApp = (success) => {
  render(HomePage(success), document.body);
};
