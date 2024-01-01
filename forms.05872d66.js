function r(r){r.preventDefault(),r.target.classList.contains("forms-link")&&(console.log("hier"),window.location.href=`./form.html?form=${r.target.dataset.formid}`)}({formsList:document.querySelector(".forms-list"),formWrp:document.querySelector(".form-wrapper")}).formsList.addEventListener("click",r);
//# sourceMappingURL=forms.05872d66.js.map
