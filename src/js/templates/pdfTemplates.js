export const pdfTemplates = {
  a1: `<form class="form">
        <h1 class="form-title">Title</h1>
        <input class="form-input" type="text" placeholder="Name Surname" />
        <p class="form-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <input class="form-input" type="date" />
        <p class="form-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sit et expedita, dicta dignissimos similique repellendus nam ducimus.
        </p>
      </form>`,
  a2: `
      <div class="preview" id="pdfTempl">
        <h1 class="preview-title">Title</h1>
        <p class="preview-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <span class="name-value">$name$</span>
        </p>

        <p class="preview-text">
          from <span class="dateFrom-value">$dateFrom$</span>
        </p>

        <p class="preview-text">
          to <span class="dateFrom-value">$dateTo$</span>
        </p>

        <p class="preview-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sit et expedita, dicta dignissimos similique repellendus nam ducimus.
        </p>
      </div>
    `,
};
