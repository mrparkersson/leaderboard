const api =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/U9fdTWru6crHtqEinnkv/scores/';

const postScore = async (score) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });

  const { result } = await response.json();
  return result;
};

const getScore = async () => {
  const response = await fetch(api);
  const { result } = await response.json();
  return result;
};

export { postScore, getScore };
