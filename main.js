const app = Vue.createApp({
    data() {
        return {
            titulo: 'Mi primer VueJs básico',
            cantidad: 1500,
            enlaceYoutube: 'https://www.youtube.com/bluuweb',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(){
            if(this.cantidad <= 0) {
                alert('Saldo 0');
                this.desactivar = true;
                return;
            }
            this.cantidad = this.cantidad - 200
        }
    }
}).mount('#app');