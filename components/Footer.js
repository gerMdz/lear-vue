app.component('footer-banco', {
    props: ['valor', 'fecha'],
    template: `
      <div class="bg-dark py-3 mt-2 text-white">
      <h3>
        {{ texto }} - {{ valor }}
      </h3>
      <p>{{ fecha}}</p>
      </div>
    `,
    data() {
        return {
            texto: 'Pie de página del sitio dinámico un pco',
        }
    }
})