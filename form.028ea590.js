const t={formsList:document.querySelector(".forms-list"),formWrp:document.querySelector(".form-wrapper")},e={a1:'<form class="form">\n        <h1 class="form-title">Title</h1>\n        <input class="form-input" type="text" placeholder="Name Surname" />\n        <p class="form-text">\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n        </p>\n        <input class="form-input" type="date" />\n        <p class="form-text">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem\n          sit et expedita, dicta dignissimos similique repellendus nam ducimus.\n        </p>\n      </form>',a2:'<form class="form">\n        <h1 class="form-title">Title</h1>\n          <p class="form-text">\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n        </p>\n        <input class="form-input" type="text" placeholder="Name Surname" />\n        <p class="form-text">from</p> <input class="form-input" type="date" />\n        <p class="form-text">to</p> <input class="form-input" type="date" />\n        <p class="form-text">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem\n          sit et expedita, dicta dignissimos similique repellendus nam ducimus.\n        </p>\n      </form>'};var i;i=new URLSearchParams(window.location.search).get("form"),t.formWrp.innerHTML=e[i]?e[i]:'<p style="text-align:center">Sorry.We do not have this form</p>';
//# sourceMappingURL=form.028ea590.js.map
