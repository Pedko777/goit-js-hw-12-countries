import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import { renderCountriesList, renderCard } from './markup.js';

defaultModules.set(PNotifyMobile, {});

const basisUrl = 'https://restcountries.eu/rest/v2/name/';
const result = document.querySelector('.result');

export const fetchCountries = inputValue => {
  fetch(`${basisUrl}${inputValue}`)
    .then(response => {
      // console.log(response.status);
      if (response.status < 400) {
        return response.json();
      } 
    })
    .then(data => {
      if(!data) return;
      result.innerHTML = '';
      if (data.length > 10) {
        const myAlert = alert({
          text: 'Too many matches found. Please enter a more specific query!',
          type: 'error',
          width: '700px',
          animation: 'fade',
          shadow: true,
          closerHover: true,
          delay: 2000,
        });
        // error('Too many matches found. Please enter a more specific query!');
        // console.log('сильно много совпадений');
      }
      if (data.length < 10 && data.length > 2) {
        // console.log(renderCountriesList(data));
        renderCountriesList(data);
        // console.log('рисуем список до 10 обьектов');
      }
      if (data.length === 1) {
        // console.log('только 1 обьект')
        renderCard(data[0]);
      }
    })

};
