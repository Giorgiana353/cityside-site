<template>
  <div>
    <Navbar :navLinks="navLinks" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      navLinks: [
        { name: "Acasă", path: "/" },
        { name: "Despre noi", path: "/despre-noi" },
        { name: "Scurt istoric", path: "/scurt-istoric" },
        { name: "Evenimente", path: "/evenimente" },
        { name: "Proiecte", path: "/proiecte" },
        { name: "Startup-uri", path: "/startup-uri" },
        { name: "Donează", path: "/doneaza" },
        { name: "Studii academice", path: "/academic" },
      ],
    };
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
