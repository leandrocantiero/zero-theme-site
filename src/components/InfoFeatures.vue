<template>
  <base-info-card title="Features">
    <div
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text body-1 d-block text-none tag"
      href="#"
      v-html="`&rsaquo; ${feature}`"
      @click="$vuetify.goTo('#features')"
    />
  </base-info-card>
</template>

<script>
export default {
  name: "SectionFeaturesAlt",

  data: () => ({
    features: ["Legislação", "Experiência", "Preço justo", "Suporte"]
  })
};
</script>

<style>

.tag:hover {
  cursor: pointer;
}
</style>
