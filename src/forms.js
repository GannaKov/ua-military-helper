'use strict';
import { refs } from './js/reference/refs';

export function addlistener() {
  refs.formsList.addEventListener('click', onformsListClick);
}
addlistener();

export function onformsListClick(e) {
  e.preventDefault();
  //console.log(e.target.dataset.formid);
  if (e.target.classList.contains('forms-link')) {
    console.log('hier');
    window.location.href = `./form.html?form=${e.target.dataset.formid}`;
  }
}
