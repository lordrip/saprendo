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
  <p class="mt-1 text-lg">Who do you want to be today?</p>

  <select class="mt-2 text-md" .value=${currentPlayer} @change=${domEventHandler(onChangePlayer)}>
    <option disabled selected value="">Who are you today?</option>
    ${players.map((player) => html`<option ?selected=${player===currentPlayer}>${player}</option>`)}
  </select>

  <p class="mt-1 text-lg">or let's pick randomly</p>

  <button class="text-lg" @click=${()=> onRandomClick(onChangePlayer)}>Random</button>`;
