<template>
<main class="pt-20 px-6 max-w-6xl mx-auto">
<h1 class="text-2xl font-bold text-slate-800">Căutare</h1>
<p class="mt-2 text-gray-600">Rezultate pentru: <strong>{{ $route.query.q }}</strong></p>
</main>
</template>


<script>
export default { name: 'Search' }
</script>