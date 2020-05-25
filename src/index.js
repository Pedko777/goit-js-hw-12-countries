import './styles.css';
import { fetchCountries } from './fetchCountries.js';
import lodash from 'lodash';
import '@pnotify/core/dist/BrightTheme.css';

const input = document.querySelector('.searchInput');

input.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(input.value);
  },500),
);

