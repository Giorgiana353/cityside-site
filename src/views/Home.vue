<template>
  <main class="pt-0">
    <section class="relative overflow-hidden bg-gradient-to-b from-[#191970] to-slate-900 text-white">
      <div class="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl lg:text-6xl font-extrabold leading-tight">
            Investim în oameni. <span class="text-blue-300">Construim viitorul.</span>
          </h1>
          <p class="mt-5 text-white/80 text-lg max-w-xl">
            Evenimente, proiecte și cercetare pentru elevi, studenți și profesioniști. Alătură-te comunității Cityside Education.
          </p>
          <div class="mt-8 flex gap-4">
            <RouterLink to="/evenimente" class="h-11 px-6 rounded-full bg-white text-slate-900 font-semibold inline-flex items-center justify-center hover:bg-blue-100 transition">Vezi evenimente</RouterLink>
            <RouterLink to="/doneaza" class="h-11 px-6 rounded-full bg-blue-500/20 text-white border border-white/30 font-semibold inline-flex items-center justify-center hover:bg-blue-400/30 transition">Donează</RouterLink>
          </div>
        </div>
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-2xl overflow-hidden">
            <img src="" alt="Community" class="w-full h-full object-cover opacity-90" />
          </div>
          <div class="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-blue-400/20 blur-2xl"></div>
          <div class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-indigo-400/20 blur-2xl"></div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-16 lg:py-24">
      <h2 class="text-3xl lg:text-5xl font-extrabold text-slate-800 text-center tracking-tight">ACTIVITATE</h2>
      <p class="text-center text-slate-500 mt-3">Zonele în care producem impact</p>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="item in activity"
          :key="item.key"
          class="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition will-change-transform"
          v-inview
        >
          <div class="h-24 grid place-items-center">
            <svg v-if="item.icon==='briefcase'" viewBox="0 0 24 24" class="w-16 h-16 text-slate-700 group-hover:text-[#191970] transition" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"/><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 12h7m4 0h7"/></svg>
            <svg v-else-if="item.icon==='handshake'" viewBox="0 0 24 24" class="w-16 h-16 text-slate-700 group-hover:text-[#191970] transition" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8l5-3 4 4 4-4 5 3"/><path d="M8 15l4 4 4-4"/><path d="M2 10l6 6"/><path d="M22 10l-6 6"/></svg>
            <svg v-else-if="item.icon==='rocket'" viewBox="0 0 24 24" class="w-16 h-16 text-slate-700 group-hover:text-[#191970] transition" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c3 0 7 4 7 7 0 6-7 13-7 13S5 15 5 9c0-3 4-7 7-7Z"/><path d="M9 14l-3 3M15 14l3 3"/><circle cx="12" cy="9" r="2"/></svg>
            <svg v-else viewBox="0 0 24 24" class="w-16 h-16 text-slate-700 group-hover:text-[#191970] transition" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l10 5-10 5L2 8l10-5Z"/><path d="M6 10v5c3 2 9 2 12 0v-5"/></svg>
          </div>
          <h3 class="mt-6 text-2xl font-semibold text-[#1f3350] text-center tracking-wide">{{ item.title }}</h3>
          <p class="mt-4 text-slate-600 text-center">{{ item.desc }}</p>
          <div class="mt-6 flex justify-center">
            <RouterLink :to="item.to" class="text-[#191970] font-semibold hover:underline">Află mai mult →</RouterLink>
          </div>
        </article>
      </div>
    </section>

    <!-- NOUTĂȚI -->
    <section class="bg-slate-50 py-16 lg:py-20">
      <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div class="order-2 lg:order-1" v-inview>
          <span class="text-sm font-semibold tracking-wider text-blue-700">NOUTĂȚI</span>
          <h2 class="mt-2 text-3xl lg:text-4xl font-extrabold text-slate-900">Noua carte a lui Sebastian Văduva</h2>
          <p class="mt-4 text-slate-600">.....</p>
          <div class="mt-6 flex gap-3">
            <a href="https://www.libris.ro/trasaturile-si-tentatiile-oamenilor-de-succes-EVR978-630-6536-31-3--p42309645.html" class="h-11 px-5 rounded-full bg-[#191970] text-white font-semibold inline-flex items-center justify-center hover:opacity-90 transition">Detalii</a>
            <RouterLink to="/academic" class="h-11 px-5 rounded-full border border-slate-300 text-slate-700 font-semibold inline-flex items-center justify-center hover:bg-white transition">Studii academice</RouterLink>
          </div>
        </div>
        <div class="order-1 lg:order-2" v-inview>
          <div class="relative max-w-md mx-auto">
            <div class="rounded-2xl bg-white shadow-2xl p-6 border border-slate-200">
              <img src="" alt="Coperta carte Sebastian Văduva" class="w-48 mx-auto drop-shadow-lg" />
              <div class="mt-5">
                <h3 class="text-xl font-bold text-slate-900">Trăsăturile și tentațiile oamenilor de succes <span class="block">....</span></h3>
                <p class="mt-2 text-sm text-slate-600">Editor/Autor: '''''Sebastian Văduva</p>
              </div>
            </div>
            <div class="absolute -z-10 -bottom-6 -right-6 w-40 h-40 rounded-full bg-blue-200 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- STUDII ACADEMICE -->
    <section class="max-w-6xl mx-auto px-6 py-16 lg:py-24">
      <h2 class="text-3xl lg:text-5xl font-extrabold text-slate-800 text-center tracking-tight">STUDII ACADEMICE</h2>
      <p class="text-center text-slate-500 mt-3">Publicații, volume și proiecte de cercetare</p>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="book in books" :key="book.id" class="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition" v-inview>
          <div class="flex items-start gap-6">
            <img :src="book.cover" :alt="`Coperta ${book.title}`" class="w-24 drop-shadow-md" />
            <div>
              <h3 class="text-lg font-bold text-slate-900">{{ book.title }}</h3>
              <p class="mt-2 text-sm text-slate-600"><span class="font-semibold">Editori/Autori:</span> {{ book.authors }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ book.publisher }}</p>
            </div>
          </div>
          <div class="mt-6">
            <a :href="book.link" class="inline-flex h-10 px-5 items-center justify-center rounded-full bg-amber-700 text-white font-semibold hover:bg-amber-600 transition">Detalii</a>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
const activity = [
  { key: 'business', title: 'BUSINESS', desc: 'Organizăm evenimente și conferințe de business', icon: 'briefcase', to: '/evenimente/business' },
  { key: 'social', title: 'SOCIAL', desc: 'Sprijinim proiecte și inițiative sociale', icon: 'handshake', to: '/evenimente/sociale' },
  { key: 'startup', title: 'STARTUP', desc: 'Susținem idei creative și tineri întreprinzători', icon: 'rocket', to: '/startup-uri' },
  { key: 'academic', title: 'ACADEMIC', desc: 'Publicăm cercetări și alte lucrări academice', icon: 'academic', to: '/academic' },
];

const books = [
  { id: 1, title: 'Business Ethics and Leadership from an Eastern European, Transdisciplinary Context', authors: 'Văduva, Sebastian; Fotea, Ioan S.; Thomas, Andrew R. (Eds.)', publisher: 'Editura Springer', cover: '', link: 'https://link.springer.com/book/10.1007/978-3-319-45186-2' },
  { id: 2, title: 'The Changing Business Landscape of Romania: Lessons for and from Transition Economies', authors: 'Thomas, Andrew R.; Pop, Nicolae AL.; Bratianu, Constantin (Eds.)', publisher: 'Editura Springer', cover: '', link: 'https://link.springer.com/book/10.1007/978-1-4614-6865-3' },
  { id: 3, title: 'Entrepreneurship & Innovation in Eastern Europe', authors: 'Sebastian Văduva et al.', publisher: 'Editura Springer', cover: '', link: 'https://link.springer.com/chapter/10.1007/978-3-031-59858-6_5' },
];

const inview = {
  mounted(el) {
    el.classList.add('opacity-0','translate-y-6');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('transition','duration-700','ease-out');
          el.classList.remove('opacity-0','translate-y-6');
          el.classList.add('opacity-100','translate-y-0');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
  }
};
</script>

<style scoped>
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-y-6 { transform: translateY(1.5rem); }
.translate-y-0 { transform: translateY(0); }
</style>
