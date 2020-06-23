<template>
  <v-theme-provider dark>
    <base-section id="info-alt" class="grey darken-4">
      <v-responsive class="mx-auto" max-width="1400">
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="3">
              <base-info />
            </v-col>

            <v-col cols="12" md="3">
              <base-info-card title="Contato" />

              <base-business-contact dense />
            </v-col>

            <v-col cols="12" md="3">
              <info-features />
            </v-col>

            <v-col cols="12" md="3">
              <instagram />
            </v-col>
          </v-row>

          <v-btn icon large absolute top right="0" @click="$vuetify.goTo('#features')">
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: "SectionBusinessInfo",

  components: {
    InfoFeatures: () => import("@/components/InfoFeatures"),
    Instagram: () => import("@/components/Instagram")
  }
};
</script>

<style lang="sass">
#info-alt a
  text-decoration: none
</style>
