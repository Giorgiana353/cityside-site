<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
    <h1 class="text-6xl font-extrabold text-[#191970]">404</h1>
    <p class="mt-4 text-lg text-gray-600">Pagina nu a fost găsită.</p>
    <router-link
      to="/"
      class="mt-6 inline-block bg-[#191970] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
    >
      Înapoi la Acasă
    </router-link>
  </main>
</template>

<script>
export default {
  name: "NotFound",
};
</script>