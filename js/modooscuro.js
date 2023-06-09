const body = document.body;
const darkmode = document.getElementById('darkmode');

darkmode.addEventListener('click', () => {
  body.classList.toggle('dark');
});
