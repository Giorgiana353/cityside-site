<template>
  <main class="pt-0">

    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-2 py-10 lg:py-12 text-center">
        <h1 class="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          EVENIMENTE <span class="text-[#191970]">BUSINESS</span>
        </h1>
        <p class="mt-4 text-slate-600 max-w-3xl mx-auto">
          Platforme prin care conectăm mediul academic, antreprenorial și comunitatea locală.
        </p>
      </div>
    </section>

    <section>
      <div class="max-w-8xl mx-auto px-2 py-8 lg:py-12 grid lg:grid-cols-[260px_1fr] gap-6">
        <aside class="hidden lg:block">
          <div class="sticky top-24 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p class="text-sm font-semibold text-slate-500 mb-3">Cuprins</p>
            <nav class="space-y-1">
              <a v-for="(i, idx) in toc" :key="i.id" :href="`#${i.id}`"
                 class="block px-3 py-2 rounded-lg text-sm transition"
                 :class="activeId===i.id ? 'bg-[#191970]/10 text-[#191970] font-semibold' : 'text-slate-700 hover:bg-slate-50'">
                {{ idx+1 }}. {{ i.label }}
              </a>
            </nav>
          </div>
        </aside>

        <div class="space-y-8">
          <!-- GSMAC -->
          <article id="gsmac" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/gsmac" class="block">
              <img src="" alt="GSMAC" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">1</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">CONFERINȚA ACADEMICĂ GSMAC</h2>
              </header>
              <div class="px-6 py-5">
                <p class="text-slate-700 leading-relaxed">
                  Conferință anuală organizată de Facultatea de Management și IT Griffiths din cadrul Universității Emanuel din Oradea în colaborare cu Asociația Cityside Education, conferință în care cunoștințele și practica despre business sunt aduse împreună într-un cadru business pentru România.
                </p>
              </div>
            </RouterLink>
          </article>

          <!-- Business Days -->
          <article id="business-days" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/business-days" class="block">
              <img src="" alt="Business Days" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">2</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">BUSINESS DAYS</h2>
              </header>
              <div class="px-6 py-5 space-y-4">
                <p class="text-slate-700">Business Days este o platformă de socializare pentru oamenii de afaceri și întreprinzători români. Scopul acestui eveniment este crearea unei culturi antreprenoriale sănătoase și durabile în România.</p>
                <p class="text-slate-700">Primul eveniment Business Days a fost organizat în 2010. Evenimentul are loc în fiecare an, în 4 orașe din România: Iași, Cluj-Napoca, București și Timișoara. Aceste evenimente urmăresc să stimuleze mediul de afaceri să fie mai dinamic prin inspirație, experiență și oportunități.</p>
                <p class="text-slate-700">Sebastian Văduva a fost invitat ca vorbitor de la prima lor ediție. Profesorii Facultății de Management și IT Griffiths sunt invitați ca vorbitori, iar studenții fac parte din echipa de organizatori ca voluntari.</p>
              </div>
            </RouterLink>
          </article>

          <!-- Caravana Informaticii -->
          <article id="caravana" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/caravana-informaticii" class="block">
              <img src="" alt="Caravana Informaticii" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">3</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">CARAVANA INFORMATICII</h2>
              </header>
              <div class="px-6 py-5 space-y-4">
                <p class="text-slate-700">Caravana Informaticii este parte a unei serii de evenimente dedicate pregătirii companiilor de IT și a studenților din domeniu, și de conștientizare a societății pentru a face față provocărilor din sectorul tehnologic.</p>
                <p class="text-slate-700">Scopul proiectului este de a încuraja mediul economic românesc și de a susține povestea sa unică de succes. Industria IT&C este una în care românii au avut și au un cuvânt de spus la nivel global.</p>
              </div>
            </RouterLink>
          </article>

          <!-- iStart -->
          <article id="istart" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/istart" class="block">
              <img src="" alt="iStart" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">4</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">COMPETIȚIA DE PLANURI DE AFACERI ISTART</h2>
              </header>
              <div class="px-6 py-5 space-y-4">
                <p class="text-slate-700">În fiecare an Facultatea de Management și IT Griffiths, în parteneriat cu Asociația Cityside Education organizează competiția iStart cu scopul de a susține și accelera antreprenorialul și creativitatea.</p>
                <h3 class="font-bold text-slate-900">OBIECTIVE</h3>
                <ul class="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Educarea viitorilor antreprenori;</li>
                  <li>Pregătirea pentru oportunități de carieră;</li>
                  <li>Valorificarea resurselor Griffiths School of Management.</li>
                </ul>
              </div>
            </RouterLink>
          </article>

          <!-- Masterclass -->
          <article id="masterclass" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/masterclass" class="block">
              <img src="" alt="Masterclass" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">5</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">MASTERCLASS</h2>
              </header>
              <div class="px-6 py-5">
                <p class="text-slate-700">Prelegeri deschise, dedicate celor interesați să învețe de la oameni de business cu experiență cum pot să devină și ei oameni de afaceri de succes.</p>
              </div>
            </RouterLink>
          </article>

          <!-- Oradea Leadership Breakfast -->
          <article id="olb" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/oradea-leadership-breakfast" class="block">
              <img src="" alt="Oradea Leadership Breakfast" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">6</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">ORADEA LEADERSHIP BREAKFAST</h2>
              </header>
              <div class="px-6 py-5">
                <p class="text-slate-700">O întâlnire la micul dejun cu oameni de afaceri, manageri și profesioniști locali sub forma de table discussions.</p>
              </div>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Business',
  data() {
    return {
      activeId: null,
      toc: [
        { id: 'gsmac', label: 'Conferința academică GSMAC' },
        { id: 'business-days', label: 'Business Days' },
        { id: 'caravana', label: 'Caravana Informaticii' },
        { id: 'istart', label: 'Competiția iStart' },
        { id: 'masterclass', label: 'Masterclass' },
        { id: 'olb', label: 'Oradea Leadership Breakfast' }
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
  beforeUnmount() { if (this._io) this._io.disconnect() },
  directives: {
    inview: {
      mounted(el) {
        el.classList.add('opacity-0','translate-y-6')
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              el.classList.add('transition','duration-700','ease-out')
              el.classList.remove('opacity-0','translate-y-6')
              el.classList.add('opacity-100','translate-y-0')
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
