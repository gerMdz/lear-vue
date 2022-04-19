const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi primer VueJs básico',
            cantidad: 1500,
            enlaceYoutube: 'https://www.youtube.com/bluuweb',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques']
        }
    }
}).mount('#app');