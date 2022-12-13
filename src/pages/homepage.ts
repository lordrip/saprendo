import { html, render } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import { Navigation } from '../utils/navigation';
import { Answer } from '../components/Answer';
import { Page1 } from './page1';
import { Page2 } from './page2';
import { Page3 } from './page3';

const navigationHandler = new Navigation(3);
let currentPlayer = 'Ricardo';
let currentOperationKey = 'sum1';

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
const renderAgain = () => {
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

const HomePage = (sucess: boolean) => {
  const pageClasses = { [`page${navigationHandler.getCurrentIndex()}`]: true };
  const prevButtonClasses = { 'visually-hidden': navigationHandler.isInitialPage() };
  const nextButtonClasses = { 'visually-hidden': navigationHandler.isLastPage() };

  return html`
    <ul class="background-rectangles">
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
    <div class="root">
      <h1>${navigationHandler.getCurrentIndex()} of ${navigationHandler.pageCount}</h1>

      <div class="page ${classMap(pageClasses)}">${getPage(navigationHandler.getCurrentIndex())}</div>

      <div class="navigation">
        <button class="prev ${classMap(prevButtonClasses)}" @click=${onBackClick}></button>
        <div style="flex:1;"></div>
        <button class="${classMap(nextButtonClasses)}" @click=${onNextClick}></button>
      </div>
    </div>

    ${sucess
        ? Answer(renderAgain)
        : ''}`;
};

export const renderApp = (success: boolean) => {
  render(HomePage(success), document.body);
};
