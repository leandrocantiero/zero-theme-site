<template>
  <base-section id="features" class="secondary">
    <v-responsive class="mx-auto" max-width="1350">
      <v-container fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card.title" cols="12" sm="4" md="3">
            <base-info-card align="center" dark v-bind="card" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
export default {
  name: "SectionFeatures",

  data: () => ({
    cards: [
      {
        icon: "mdi-scale-balance",
        title: "Legislação",
        text:
          "Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas."
      },
      {
        icon: "mdi-file-certificate-outline",
        title: "Experiência",
        text:
          "Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas."
      },
      {
        icon: "mdi-cash",
        title: "Preço justo",
        text:
          "Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas."
      },
      {
        icon: "mdi-cogs",
        title: "Suporte",
        text:
          "Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas."
      }
    ]
  })
};
</script>
