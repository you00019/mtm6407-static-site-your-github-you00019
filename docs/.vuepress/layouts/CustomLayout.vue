<template>
  <div class="container">
    <header>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <!-- <RouterLink to="/guide" class="nav-link">About</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink> -->
    </header>
    <main>
      <Content />
    </main>
    <footer>
      <p>&copy; {{ currentYear }} My VuePress Site</p>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HelloVue from "../components/HelloVue.vue";
import { Content } from "@vuepress/client";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: { HelloVue, Content, RouterLink },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style scoped>
.container {
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  object-fit: cover;
  width: 100%;
}

h3 {
  text-align: center;
  display: grid;
  justify-content: center;
}

header {
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
}

.home-link {
  margin-right: auto;
  color: #2c3e50;
  text-decoration: none;
}

h1,
footer {
  text-align: center;
}
</style>
