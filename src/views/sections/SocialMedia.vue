<template>
  <v-theme-provider dark>
    <base-section id="social" class="accent text-center" space="56">
      <v-btn icon class="mb-8 mx-5" href="https://twitter.com/vuetifyjs" target="_blank" large>
        <base-icon>mdi-twitter</base-icon>
      </v-btn>
      <v-btn icon class="mb-8 mx-5" href="https://twitter.com/vuetifyjs" target="_blank" large>
        <base-icon>mdi-facebook</base-icon>
      </v-btn>
      <v-btn icon class="mb-8 mx-5" href="https://twitter.com/vuetifyjs" target="_blank" large>
        <base-icon>mdi-instagram</base-icon>
      </v-btn>

      <base-section-heading
        color="transparent"
        title="Midias sociais"
      >Siga-nos nas redes sociais e fique por dentro das notícias, atualizações e eventos da empresa.</base-section-heading>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: "SectionNews",

  provide: {
    heading: { align: "center" }
  }
};
</script>
