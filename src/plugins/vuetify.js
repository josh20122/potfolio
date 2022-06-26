import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#171c32',
                secondary: '#252c48',
                info: '#4c84ff',
                wait: '#ffffff',
                error: '#4c84ff',
                secondary2: '#acaeb9',
                back: '#27365a',
            },
        },
    },
});
