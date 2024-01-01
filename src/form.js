'use strict';
import { refs } from './js/reference/refs';
import { formTemplates } from './js/forms/formsTemplates';

export function getFormId() {
  const params = new URLSearchParams(window.location.search);

  const formId = params.get('form');
  // console.log('formId', formId);
  return formId;
}

export function oneFormControl() {
  const formId = getFormId();
  renderOneForm(formId);
}
oneFormControl();
export function renderOneForm(formId) {
  // const markup = formTemplates[formId];
  // refs.formWrp.innerHTML = markup;
  refs.formWrp.innerHTML = formTemplates[formId]
    ? formTemplates[formId]
    : `<p style="text-align:center">Sorry.We do not have this form</p>`;
}
