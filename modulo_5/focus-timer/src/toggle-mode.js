let darkMode = true;
const buttonToggle = document.querySelector('.mode');

buttonToggle.addEventListener('click', (event) => {
  const mode = darkMode ? 'light' : 'dark';

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`;
  document.documentElement.classList.toggle('light', darkMode);
  darkMode = !darkMode;

}
)