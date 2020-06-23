<template>
  <v-theme-provider dark>
    <base-section id="contact-us" class="primary" space="40">
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="TEM ALGUMA DÚVIDA? ENTRE EM CONTATO"
            />

            <base-body space="0">
              <span
                class="white--text"
              >Entre em contato por e-mail, telefone ou agende uma visita presencial, ficaremos felizes em recebe-lo!</span>
            </base-body>
          </v-col>

          <v-col cols="12" md="2">
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              large
              outlined
              @click="$router.push({ name: 'Contato' })"
            >Contate-nos</base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: "SectionContactUs"
};
</script>
