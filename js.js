const app = {
    data() {
        return {
            respuesta: '',
            sabor: '',
            tipo: '',
            bolitas: 1,
            listaHelados: [],
        }
    },
    methods: {
        guardarHelado() {
            this.listaHelados.push({
                sabor: this.sabor,
                tipo: this.tipo,
                bolitas: this.bolitas
            });
            this.sabor = '';
            this.tipo = '';
            this.bolitas = 1;
        }
    }
}

Vue.createApp(app).mount('#app');
