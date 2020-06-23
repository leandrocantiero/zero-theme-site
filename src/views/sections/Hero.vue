<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive class="d-flex align-center" height="100%" max-width="700" width="100%">
          <base-heading title="BEM-VINDO A CAMPAG INFORMÁTICA" />

          <base-body>A mais de 20 anos no mercado de tecnologia fornecendo as melhores soluções para a sua empresa.</base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn @click="$vuetify.goTo('#features')">Explore</base-btn>

            <span class="font-weight-bold ml-6 mr-1 my-4">ou</span>

            <base-btn @click="$router.push('price')" :ripple="false" class="pa-1" height="auto" text>Começe agora</base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  name: "SectionHero",

  provide: {
    theme: { isDark: true }
  },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    }
  }
};
</script>
