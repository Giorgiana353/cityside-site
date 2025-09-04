<template>
  <main class="pt-0">
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-2 py-10 lg:py-12 text-center">
        <p class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#191970]/10 text-[#191970] border border-[#191970]/20">
          Academic
        </p>
        <h1 class="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Publicații <span class="text-[#191970]">academice</span>
        </h1>
      </div>
    </section>

    <section>
      <div class="max-w-8xl mx-auto px-2 py-8 lg:py-12 grid lg:grid-cols-[260px_1fr] gap-6">
        <aside class="hidden lg:block">
          <div class="sticky top-24 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p class="text-sm font-semibold text-slate-500 mb-3">Cuprins</p>
            <nav class="space-y-1">
              <a
                v-for="(i, idx) in toc"
                :key="i.id"
                :href="`#${i.id}`"
                class="block px-3 py-2 rounded-lg text-sm transition"
                :class="activeId === i.id ? 'bg-[#191970]/10 text-[#191970] font-semibold' : 'text-slate-700 hover:bg-slate-50'"
              >
                {{ idx + 1 }}. {{ i.label }}
              </a>
            </nav>
          </div>
        </aside>

        <div class="space-y-8">
          <!-- 1. Navigating Through the Crisis -->
          <article id="crisis" ref="sections" class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="h-40 bg-gradient-to-r from-[#191970]/10 to-slate-100 border-b border-slate-200 grid place-items-center">
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-[#191970]/20 text-[#191970] bg-[#191970]/5">
                Editura Springer
              </span>
            </div>
            <div class="p-6 lg:p-7">
              <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">
                Navigating Through the Crisis – A special Issue on the Covid-19 Crises Vol 1,2
              </h2>
              <p class="mt-3 text-slate-700">
                <strong>Editori/Autori</strong><br>
                Fotea, Silvia L., Fotea, Ioan Ș., Văduva, Sebastian (Eds.)
              </p>
              <div class="mt-4">
                <a href="https://link.springer.com/book/10.1007/978-3-030-82755-7" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Vezi cartea
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 2. Challenges and Opportunities -->
          <article id="challenges" ref="sections" class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="h-40 bg-gradient-to-r from-[#191970]/10 to-slate-100 border-b border-slate-200 grid place-items-center">
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-[#191970]/20 text-[#191970] bg-[#191970]/5">Editura Springer</span>
            </div>
            <div class="p-6 lg:p-7">
              <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">
                Challenges and Opportunities to Develop Organizations Through Creativity, Technology and Ethics
              </h2>
              <p class="mt-3 text-slate-700">
                <strong>Editori/Autori</strong><br>
                Fotea, Silvia L., Fotea, Ioan Ș., Văduva, Sebastian (Eds.)
              </p>
              <div class="mt-4">
                <a href="https://link.springer.com/book/10.1007/978-3-030-43449-6" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Vezi cartea
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 3. Applied Ethics -->
          <article id="applied-ethics" ref="sections" class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="h-40 bg-gradient-to-r from-[#191970]/10 to-slate-100 border-b border-slate-200 grid place-items-center">
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-[#191970]/20 text-[#191970] bg-[#191970]/5">Editura Springer</span>
            </div>
            <div class="p-6 lg:p-7">
              <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">
                Applied Ethics for Entrepreneurial Success: Recommendations for the Developing World
              </h2>
              <p class="mt-3 text-slate-700">
                <strong>Editori/Autori</strong><br>
                Văduva, Sebastian, Fotea, Ioan Ș., Fotea, Silvia L., Wilt Randolph (Eds.)
              </p>
              <div class="mt-4">
                <a href="https://link.springer.com/book/10.1007/978-3-030-17215-2" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Vezi cartea
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 4. Solutions for Business -->
          <article id="solutions" ref="sections" class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="h-40 bg-gradient-to-r from-[#191970]/10 to-slate-100 border-b border-slate-200 grid place-items-center">
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-[#191970]/20 text-[#191970] bg-[#191970]/5">Editura Springer</span>
            </div>
            <div class="p-6 lg:p-7">
              <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">
                Solutions for Business, Culture and Religion in Easter Europe and Beyond
              </h2>
              <p class="mt-3 text-slate-700">
                <strong>Editori/Autori</strong><br>
                Văduva, Sebastian, Fotea, Ioan Ș., Thomas Andrew R. (Eds.)
              </p>
              <div class="mt-4">
                <a href="https://link.springer.com/book/10.1007/978-3-319-63369-5" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Vezi cartea
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 5. Civil Society -->
          <article id="civil-society" ref="sections" class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="h-40 bg-gradient-to-r from-[#191970]/10 to-slate-100 border-b border-slate-200 grid place-items-center">
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-[#191970]/20 text-[#191970] bg-[#191970]/5">Editura Springer</span>
            </div>
            <div class="p-6 lg:p-7">
              <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">
                Civil Society: The Engine for Economic and Social Well-Being
              </h2>
              <p class="mt-3 text-slate-700">
                <strong>Editori/Autori</strong><br>
                Văduva, Sebastian A., Wilt, Randolph, Fotea, Ioan, Văduva, Lois P. (Eds.)
              </p>
              <div class="mt-4">
                <a href="https://link.springer.com/book/10.1007/978-3-319-89872-8" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Vezi cartea
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 6. Development, Growth and Finance -->
          <article id="development" ref="sections" class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="h-40 bg-gradient-to-r from-[#191970]/10 to-slate-100 border-b border-slate-200 grid place-items-center">
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-[#191970]/20 text-[#191970] bg-[#191970]/5">Editura Springer</span>
            </div>
            <div class="p-6 lg:p-7">
              <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">
                Development, Growth and Finance of Organizations from an Estern European Context
              </h2>
              <p class="mt-3 text-slate-700">
                <strong>Editori/Autori</strong><br>
                Văduva, Sebastian, Fotea, Ioan S., Thomas, Andrew R. (Eds.)
              </p>
              <div class="mt-4">
                <a href="https://link.springer.com/book/10.1007/978-3-319-54454-0" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Vezi cartea
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 7. Journal -->
          <article id="journal" ref="sections" class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="h-40 bg-gradient-to-r from-[#191970]/10 to-slate-100 border-b border-slate-200 grid place-items-center">
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-[#191970]/20 text-[#191970] bg-[#191970]/5">Editura Emerald</span>
            </div>
            <div class="p-6 lg:p-7">
              <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">
                Journal of Ethics, Entrepreneurship and Technology: Volume 1 Issue 1
              </h2>
              <p class="mt-3 text-slate-700">
                <strong>Editori</strong><br>
                Văduva, Sebastian, Țundrea, Emanuel
              </p>
              <div class="mt-4">
                <a href="https://www.emerald.com/insight/publication/issn/2633-7436/vol/1/iss/1" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Vezi jurnalul
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- 8. Trăsăturile și tentațiile oamenilor de succes -->
          <article id="trasaturi-succes" ref="sections" class="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="h-40 bg-gradient-to-r from-[#191970]/10 to-slate-100 border-b border-slate-200 grid place-items-center">
              <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-[#191970]/20 text-[#191970] bg-[#191970]/5">Editura Scriptum</span>
            </div>
            <div class="p-6 lg:p-7">
              <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">
                Trăsăturile și tentațiile oamenilor de succes
              </h2>
              <p class="mt-3 text-slate-700">
                <strong>Autor</strong><br>
                Sebastian Văduva
              </p>
              <p class="mt-2 text-slate-700">Editura Scriptum, Oradea</p>
              <div class="mt-4">
                <a href="https://www.libris.ro/trasaturile-si-tentatiile-oamenilor-de-succes-EVR978-630-6536-31-3--p42309645.html" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Detalii carte
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Academic',
  data() {
    return {
      activeId: null,
      toc: [
        { id: 'crisis', label: 'Navigating Through the Crisis' },
        { id: 'challenges', label: 'Challenges and Opportunities' },
        { id: 'applied-ethics', label: 'Applied Ethics' },
        { id: 'solutions', label: 'Solutions for Business' },
        { id: 'civil-society', label: 'Civil Society' },
        { id: 'development', label: 'Development, Growth and Finance' },
        { id: 'journal', label: 'JEET – Vol. 1, Iss. 1' },
        { id: 'trasaturi-succes', label: 'Trăsăturile și tentațiile oamenilor de succes' }
      ]
    }
  },
  mounted() {
    const options = { root: null, threshold: 0.4 }
    this._io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) this.activeId = e.target.id })
    }, options)
    this.$nextTick(() => {
      const list = this.$refs.sections
      if (list && list.length) list.forEach((el) => this._io.observe(el))
    })
  },
  beforeUnmount() {
    if (this._io) this._io.disconnect()
  },
  directives: {
    inview: {
      mounted(el) {
        el.classList.add('opacity-0', 'translate-y-6')
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              el.classList.add('transition', 'duration-700', 'ease-out')
              el.classList.remove('opacity-0', 'translate-y-6')
              el.classList.add('opacity-100', 'translate-y-0')
              io.unobserve(el)
            }
          })
        }, { threshold: 0.15 })
        io.observe(el)
      }
    }
  }
}
</script>

<style scoped>

.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-y-6 { transform: translateY(1.5rem); }
.translate-y-0 { transform: translateY(0); }
</style>
