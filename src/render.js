const starSvg = `<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
</svg>`;

const renderList = (list) => {
  const container = document.querySelector('.list ul');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<li>NO SCORES YET</li>';
    return;
  }

  list
    .sort((a, b) => b.score - a.score)
    .forEach((score, index) => {
      const li = document.createElement('li');
      if (index < 3) {
        li.innerHTML = starSvg;
      }
      li.innerHTML += `${score.user}: ${score.score}`;
      li.id = index;

      container.append(li);
    });
};

export default renderList;
