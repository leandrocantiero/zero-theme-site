<template>
  <div>
    <base-info-card :title="title" :subtitle="subtitle" space="4" color="primary" />

    <v-form ref="form" v-model="valid">
      <base-text-field label="Nome" v-model="message.nome" :rules="nomeRules" />

      <base-text-field label="E-mail" v-model="message.email" :rules="emailRules" />

      <base-text-field
        label="Contato"
        v-model="message.contato"
        v-mask="['(##) ####-####', '(##) #####-####']"
        :rules="contatoRules"
      />

      <base-textarea class="mb-6" label="Sua necessidade & descrição" v-model="message.corpo" />
    </v-form>
    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      outlined
      @click="sendEmail"
      :loading="isLoading"
    >Enviar</base-btn>
  </div>
</template>

<script>
import axios from 'axios'
import { showSuccess, showError } from "@/global";

export default {
  name: "BaseContactForm",

  // Injected from the Vuetify Themeable mixin
  inject: ["theme"],

  props: {
    subtitle: String,
    title: {
      type: String,
      default: "Envie-nos uma mensagem!"
    }
  },

  data: () => ({
    valid: true,
    isLoading: false,
    message: {},
    nomeRules: [v => !!v || "Nome é obrigatório"],
    contatoRules: [v => (!!v && v.length > 13) || "Contato é obrigatório"],
    emailRules: [
      v => !!v || "Email é obrigatório",
      v => (v ? /.+@.+\..+/.test(v) || "E-mail inválido" : true)
    ]
  }),

  methods: {
    sendEmail() {
      if (!this.$refs.form.validate()) return;

      this.isLoading = true;

      axios
        .post("https://campag-email-service.herokuapp.com/enviarEmail", {
          destinatarios: "leandrocantiero03@gmail.com",
          assunto: "Novo cliente",
          corpo: JSON.stringify(this.message)
        })
        .then(res => {
          showSuccess(
            "Obrigado por escolher a Campag, logo entraremos em contato!"
          );
        })
        .catch(showError)
        .then(() => {
          this.$refs.form.reset();
          this.isLoading = false;
        });
    }
  }
};
</script>
