'use strict';
export function getFormId() {
  const params = new URLSearchParams(window.location.search);

  const formId = params.get('form');
  return formId;
  //console.log('formId', id);
}

export function oneFormControl() {
  const formId = getFormId();
  renderOneForm(formId);
}
oneFormControl();
export function renderOneForm(formId) {
  console.log('in oneFormRender');
}
