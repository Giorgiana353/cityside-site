<template>
  <main class="pt-1">
    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-6 py-10 text-center">
        <h1 class="text-3xl lg:text-4xl font-extrabold text-slate-900">Evenimente</h1>
        <p class="mt-2 text-slate-600">Alege o categorie:</p>

        <div class="mt-6 flex justify-center gap-4">
          <RouterLink
            to="/evenimente/business"
            class="px-6 h-11 rounded-full font-semibold flex items-center justify-center border transition"
            :class="$route.path.includes('business')
              ? 'bg-[#191970] text-white border-[#191970]'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'"
          >
            Business
          </RouterLink>

          <RouterLink
            to="/evenimente/sociale"
            class="px-6 h-11 rounded-full font-semibold flex items-center justify-center border transition"
            :class="$route.path.includes('sociale')
              ? 'bg-[#191970] text-white border-[#191970]'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'"
          >
            Sociale
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <RouterView />
      </div>
    </section>
  </main>
</template>
