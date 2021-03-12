import itemsTemplate from '../templates/country-style.hbs';
import countryWrapper from '../templates/country-wrapper.hbs';
import {alert, defaultModules, PNotifyMobile} from '../index';

var debounce = require('lodash.debounce');

const inputRef = document.querySelector('.seach-country');
const clearSeachRef = document.querySelector('.wrapper-tamplate'); 

//прослушиватель на инпут + debounce
inputRef.addEventListener('input', debounce(() => {
    if (clearSeachRef) {
        clearClassList ();
    };
    const searchQuery = inputRef.value;
 // запуск функции с разными исходами выполнения   
    fetchCountries(searchQuery)
    .then(renderCountry)
    .catch(error => console.log(error));
    }, 500));
    
// функция со значением с инпута делает запрос на сервер и возвращает результат 
function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
    return response.json();
  })
}

// функция получает результат и по разным условиям выполняет разметку по шаблонам
function renderCountry(country) {
    if (country.length >= 10) {
        defaultModules.set(PNotifyMobile, {});
        alert({
            text: 'Too many matches found. Please enter a more specific query!'
         });
         if(defaultModules.set(PNotifyMobile, {})) {
             return;
         }
   }
   if(country.length === 1) {
       const markupFull = countryWrapper(country);
       clearSeachRef.insertAdjacentHTML('afterbegin', markupFull);
   }
    else {
        const markup = itemsTemplate(country);
        clearSeachRef.insertAdjacentHTML('afterbegin', markup);        
    }
};
  
//функция очищает див от разметки шаблонов
function clearClassList ()  {
    clearSeachRef.innerHTML = '';
}