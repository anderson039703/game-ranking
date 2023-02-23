console.clear();

const team = [
{
  rank: 1,
  name: 'Samuel Lima',
  handle: 'samuellima',
  img: 'https://github.com/samuellima99.png',
  kudos: 36,
  sent: 31 },
{
  rank: 2,
  name: 'Paulo Casemiro',
  handle: 'paulocasemiro',
  img: 'https://github.com/paulo280799.png',
  kudos: 31,
  sent: 21 },
{
  rank: 3,
  name: 'Anderson Pinheiro',
  handle: 'andersonpinheiro',
  img: 'https://github.com/anderson039703.png',
  kudos: 24,
  sent: 7 },
{
  rank: 4,
  name: 'Paulo Cesar',
  handle: 'paulocasar',
  img: 'https://github.com/Pchenrique.png',
  kudos: 22,
  sent: 4 },
{
  rank: 5,
  name: 'Fernando Araújo',
  handle: 'fernandoaraujo',
  img: 'https://github.com/ferdinandbr.png',
  kudos: 18,
  sent: 16 },
{
  rank: 6,
  name: 'Davi Aquino',
  handle: 'daviaquino',
  img: 'https://github.com/daviaquino87.png',
  kudos: 16,
  sent: 6 }];



const randomEmoji = () => {
  const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
  let randomNumber = Math.floor(Math.random() * emojis.length);
  return emojis[randomNumber];
};

team.forEach(member => {
  let newRow = document.createElement('li');
  newRow.classList = 'c-list__item';
  newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="https://instagram.com/${member.handle}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong> ${randomEmoji()}
				</div>
			</div>
		</div>
	`;
  if (member.rank === 1) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
    newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
  } else if (member.rank === 2) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--teal');
    newRow.querySelector('.c-kudos').classList.add('u-text--teal');
  } else if (member.rank === 3) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--orange');
    newRow.querySelector('.c-kudos').classList.add('u-text--orange');
  }
  list.appendChild(newRow);
});

// Find Winner from sent kudos by sorting the drivers in the team array
let sortedTeam = team.sort((a, b) => b.kudos - a.kudos);
let winner = sortedTeam[2];

// Render winner card
const winnerCard = document.getElementById('winner');
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">Top ranking da semana</div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
	<span class="u-text--teal u-text--small">${winner.name}</span>
`;