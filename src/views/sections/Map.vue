<template>
  <base-section id="map" space="0">
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.2296211361027!2d-51.404081561609246!3d-22.117219184687272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc40e8aa63c80f1f!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Centro%20Medicina!5e0!3m2!1spt-BR!2sbr!4v1590764408325!5m2!1spt-BR!2sbr"
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
    />
  </base-section>
</template>

<script>
export default {
  name: "SectionMap",

  provide: {
    heading: { align: "center" }
  }
};
</script>
