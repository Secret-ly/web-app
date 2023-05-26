import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin(({ vueApp }) => {
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md3,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
  });

  vueApp.use(vuetify);
});