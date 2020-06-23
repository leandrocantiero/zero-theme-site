<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        pace="6"
      >Entre em contato por e-mail, telefone ou agende uma visita presencial, ficaremos felizes em recebe-lo!</base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: "BaseBusinessInfo",

  props: {
    dark: Boolean,
    title: {
      type: String,
      default: "MANTENHA CONTATO CONOSCO"
    }
  },

  data: () => ({
    business: [
      {
        icon: "mdi-map-marker-outline",
        title: "Address",
        text: "8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137"
      },
      {
        icon: "mdi-cellphone",
        title: "Phone",
        text: "01 (800) 433 744<br>01 (800) 433 633"
      },
      {
        icon: "mdi-email",
        title: "Email",
        text: "john@vuetifyjs.com<br>heather@vuetifyjs.com"
      }
    ]
  })
};
</script>
