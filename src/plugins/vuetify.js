import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.teal.darken3,
                secondary: colors.lightGreen.lighten3,
                accent: colors.blue.darken3,
            },
        },
    }
});
