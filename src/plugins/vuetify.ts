/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const theme = {
  dark: false,
  colors: {
    background: "#FFF6F4",
    surface: "#FFFFFF",
    primary: "#F86F03",
    "primary-darken-1": "#3700B3",
    secondary: "#525FE1",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'theme',
    themes: {
      theme,
    },
  },
});
