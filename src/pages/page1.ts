import { html } from 'lit-html';
import { domEventHandler } from '../utils';
import players from '../assets/players.json';

const getRandomUser = () => {
  const index = Math.floor(Math.random() * players.length);
  return players[index];
};

const onRandomClick = (handler) => {
  const randomUser = getRandomUser();
  handler(randomUser);
}

export const Page1 = (currentPlayer: string, onChangePlayer: (user: string) => void) => html`
<h1>1 of 3</h1>
<p>Who are you today?</p>
<div class="player">
  <select .value=${currentPlayer} @change=${domEventHandler(onChangePlayer)}>
    <option disabled selected></option>
    ${players.map((player) => html`<option ?selected=${player === currentPlayer}>${player}</option>`)}
  </select>
  <button @click=${() => onRandomClick(onChangePlayer)}>Random</button>
</div>
`;
