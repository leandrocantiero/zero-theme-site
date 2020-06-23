<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card :title="title" color="primary">
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider v-if="i + 1 !== business.length" :key="`divider-${i}`" class="my-2" />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: "BaseBusinessContact",

  props: {
    dark: Boolean,
    dense: Boolean,
    title: String
  },

  data: () => ({
    business: [
      {
        icon: "mdi-map-marker-outline",
        title: "Endereço",
        text:
          "Av. Washington Luiz, 2536 - Pres. Prudente - SP, 19023-450"
      },
      {
        icon: "mdi-cellphone",
        title: "Contato",
        text: "(18) 3221-3546 - Campag informática<br>(18) 99104-2964 - Claudivelto Ferraz<br>(18) 99748-7353 - Leandro Cantiero"
      },
      {
        icon: "mdi-email",
        title: "E-mail",
        text: "campag@stetnet.com.br<br>veltocfc@hotmail.com<br>leandrocantiero@hotmail.com"
      }
    ]
  })
};
</script>
