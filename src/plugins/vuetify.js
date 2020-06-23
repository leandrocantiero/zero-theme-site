// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import {
  VCol,
  VRow,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        // primary: '#9c27b0',  // roxo
        primary: '#4caf50',  // verde
        // primary: '#42a5f6',     //azul
        secondary: '#050b1f',
        danger: '#f44336',
        success: '#4caf50',
        accent: '#204165',
      },
      dark: {},
    },
  },
})
