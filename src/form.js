'use strict';

import { refs } from './js/reference/refs';
import { formTemplates } from './js/templates/formsTemplates';
import { pdfTemplates } from './js/templates/pdfTemplates';

export function getFormId() {
  const params = new URLSearchParams(window.location.search);

  const formId = params.get('form');

  return formId;
}

export function oneFormControl() {
  const formId = getFormId();

  renderOneForm(formId);
  refs.btnFormWrp.addEventListener('click', onCreatePDFClick);
}

const values = {
  name: '',
  date: '',
  dateFrom: '',
  dateTo: '',
};
oneFormControl();

export function renderOneForm(formId) {
  refs.formWrp.innerHTML = formTemplates[formId]
    ? formTemplates[formId]
    : `<p style="text-align:center">Sorry.We do not have this form</p>`;
}

export function onCreatePDFClick(e) {
  if (e.target.classList.contains('toPDF')) {
    const pdfTemplate = document.getElementById('pdfTempl');
    const formId = getFormId();
    const opt = {
      // margin: 1,
      filename: formId,
      // image: { type: 'jpeg', quality: 0.98 },
      // html2canvas: { scale: 2 },
      // jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(pdfTemplate).save();
  } else if (e.target.classList.contains('check')) {
    console.log('in check');
    const oneForm = document.getElementById('form');
    checkInputValue(oneForm);
    renderPreview();
    refs.formBtn.classList.replace('check', 'toPDF');
    refs.formBtn.textContent = 'to PDF';
  }

  // const { jsPDF } = window.jspdf;

  // doc.text('Hello world!', 10, 10);
  // doc.save('a4.pdf');
}

function checkInputValue(form) {
  console.log('form', form);
  // console.log(form.elements.name.value);
  values.name = form?.elements?.name?.value;
  values.date = form?.elements?.date?.value;
  values.dateFrom = form?.elements?.dateFrom?.value;
  values.dateTo = form?.elements?.dateTo?.value;
  // console.log('dateFrom', dateFrom);

  console.log('values', values);
}
export function renderPreview() {
  const id = getFormId();
  const template = pdfTemplates[id];

  const filledTemplate = template.replace(
    /\$([A-Za-z_]+)\$/g,
    (match, placeholder) => {
      if (values.hasOwnProperty(placeholder)) {
        return values[placeholder];
      }
      return match;
    }
  );

  refs.formWrp.innerHTML = filledTemplate;
}
