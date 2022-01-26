import './style.css';

import { getScore, postScore } from './api.js';
import renderList from './render.js';

const refreshBtn = document.querySelector('.refresh button');
const form = document.querySelector('form');

refreshBtn.addEventListener('click', async () => {
  const list = await getScore();

  renderList(list);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const score = {
    user: form.elements.username.value.trim(),
    score: form.elements.score.value.trim(),
  };

  form.reset();

  await postScore(score);
});
