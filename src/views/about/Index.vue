<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "About",

  metaInfo: { title: "Sobre" },

  extends: View,

  mixins: [
    LoadSections([
      "hero-alt",
      "about-our-product",
      "contact-us",
      "theme-features",
      "affiliates",
      "newsletter",
      "info"
    ])
  ],

  props: {
    id: {
      type: String,
      default: "about"
    }
  }
};
</script>
