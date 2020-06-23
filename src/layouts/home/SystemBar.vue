<template>
  <v-system-bar v-if="model" app color="#262626" class="px-4" dark height="58">

    <v-spacer />

    <v-btn
      class="text-capitalize subtitle-2 mr-6"
      color="success"
      href="https://store.vuetifyjs.com/product/zero-theme-free?ref=vtyd-system-bar"
      min-width="112"
    >Começe grátis</v-btn>

    <v-btn
      class="text-capitalize subtitle-2 font-weight-bold"
      color="white"
      light
      href="https://store.vuetifyjs.com/product/zero-theme-pro/?ref=vtyd-system-bar"
      min-width="112"
    >Pacote diamante</v-btn>

    <v-divider class="ml-6 mr-3" vertical />

    <v-btn class="text-capitalize grey--text mr-n2 mr-sm-n1" small text @click="model = false">
      <v-icon color="white" :left="$vuetify.breakpoint.smAndUp">mdi-close</v-icon>

      <span class="hidden-xs-only">Dispensar</span>
    </v-btn>
  </v-system-bar>
</template>

<script>
export default {
  name: "HomeSystemBar",

  data: () => ({
    model: true
  })
};
</script>
