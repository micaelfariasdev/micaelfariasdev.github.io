let trilho = document.getElementById('trilho');
let body = localStorage.getItem('darkmode');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'inactive');
}

// Verifica o estado do darkmode ao carregar a página
if (body === 'active') {
  enableDarkmode();
} else {
  disableDarkmode();
}

// Alterna entre os modos de tema
trilho.addEventListener('click', () => {
  if (document.body.classList.contains('darkmode')) {
    trilho.classList.toggle('dark');
    disableDarkmode();
  } else {
    trilho.classList.toggle('dark');
    enableDarkmode();
  }
})

