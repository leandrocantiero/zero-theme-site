<template>
  <base-section id="about-our-product">
    <base-section-heading color="grey lighten-2" icon="mdi-vuetify" :title="title" />

    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SectionAboutOurProduct",

  props: {
    title: { type: String, default: "Nossos Produtos" }
  },

  data: () => ({
    cards: [
      {
        title: "Folha de pagamento",
        subtitle: "Área pública",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "01"
      },
      {
        title: "Contabilidade",
        subtitle: "Área pública",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "02"
      },
      {
        title: "Saúde",
        subtitle: "Área pública",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "03"
      },
      {
        title: "Arrecadação",
        subtitle: "Área pública",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "04"
      },
      {
        title: "Ensino",
        subtitle: "Área pública",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "05"
      },
      {
        title: "Secretaria",
        subtitle: "Área pública",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "06"
      },
      {
        title: "web financeiro",
        subtitle: "Área privada",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "01"
      },
      {
        title: "NF-e | NFC-e | MDF-e",
        subtitle: "Área privada",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "02"
      },
      {
        title: "Site",
        subtitle: "Área privada",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "03  "
      }
    ]
  })
};
</script>
