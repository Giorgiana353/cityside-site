<template>
  <main class="pt-0">
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-2 py-10 lg:py-12 text-center">
        <h1 class="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          EVENIMENTE <span class="text-[#191970]">SOCIALE</span>
        </h1>
        <p class="mt-4 text-slate-600 max-w-3xl mx-auto">
          Inițiative prin care promovăm integritatea, educația, cultura și binele comunității.
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
          <!-- 1. Summitul de Integritate pentru Prosperitate -->
          <article id="summit" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/summitul-de-integritate" class="block">
              <img src="" alt="Summitul de Integritate" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">1</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">SUMMITUL DE INTEGRITATE PENTRU PROSPERITATE</h2>
              </header>
              <div class="px-6 py-5 space-y-4">
                <p class="text-slate-700">Summitul de Integritate pentru Prosperitate unește viziunea Transparency International cu cea a partenerilor pentru creșterea conștientizării fenomenului de corupție, aplaudând inițiativele antreprenoriale și încurajând dezvoltarea mediului de afaceri din România.</p>
                <p class="text-slate-700">Într-o societate confruntată cu crize de valori, summitul urmărește promovarea unui model de antreprenoriat social integru, oferind exemple și soluții de bune practici pentru victimele și martorii corupției.</p>
                <p class="text-slate-700">Seria de evenimente abordează teme legate de corupție și integritate în domeniul economic, educațional și bancar, cu scopul de a oferi soluții practice pentru un mediu de afaceri sustenabil și etic.</p>
                <h3 class="font-bold text-slate-900">VIZIUNEA</h3>
                <p class="text-slate-700">Determinarea oamenilor de afaceri să conștientizeze beneficiile unui comportament etic, să acționeze și să devină factori motivanți pentru un mediu de afaceri sănătos, etic și sustenabil.</p>
                <h3 class="font-bold text-slate-900">OBIECTIVE</h3>
                <ul class="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Creșterea interesului pentru integritate</li>
                  <li>Diminuarea corupției</li>
                  <li>Modele de afaceri sănătoase</li>
                  <li>Networking</li>
                </ul>
              </div>
            </RouterLink>
          </article>

          <!-- 2. Teaching as a Mission / Romanian Academic Network -->
          <article id="teaching-as-a-mission" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/teaching-as-a-mission" class="block">
              <img src="" alt="Teaching as a Mission" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">2</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">TEACHING AS A MISSION</h2>
              </header>
              <div class="px-6 py-5 space-y-4">
                <p class="text-slate-700">Romanian Academic Network este grupul evanghelicilor – doctoranzi, cercetători și cadre didactice – activi în mediul academic din România. Ne concentrăm pe influența universității și pe dezvoltarea unor cadre didactice excelente, cu perspectivă creștină și dedicare în slujire.</p>
                <h3 class="font-bold text-slate-900">VIZIUNEA</h3>
                <ul class="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Promovarea excelenței în predare și cercetare în rândul universitarilor evanghelici.</li>
                  <li>Răspuns la problemele europene actuale și la nevoile comunității evanghelice.</li>
                  <li>Pregătirea universitarilor pentru a comunica convingător perspectiva creștină într-un cadru pluralist.</li>
                  <li>Afirmația valorii strategice a educației ca vocație și misiune.</li>
                  <li>Implicare în biserică și societate cu discernământ și cunoaștere.</li>
                  <li>Prezentarea chemării de profesor tinerilor evanghelici.</li>
                  <li>Formarea de grupuri de cercetare și susținere reciprocă (ex. ResearchGate).</li>
                  <li>Susținere reciprocă în rugăciune.</li>
                </ul>
                <h3 class="font-bold text-slate-900">OBIECTIVE</h3>
                <p class="text-slate-700">Încurajarea, conectarea și echiparea universitarilor în patru domenii critice:</p>
                <ul class="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Calitatea cercetării și a predării</li>
                  <li>Concepția despre lume și viață</li>
                  <li>Discipline spirituale și zel pentru Cristos</li>
                  <li>Părtășia prin mentorare și colaborare</li>
                </ul>
                <h3 class="font-bold text-slate-900">TEME ABORDATE</h3>
                <ul class="list-disc pl-6 text-slate-700 space-y-1">
                  <li>Cum să fii om de știință și evanghelist în același timp</li>
                  <li>Finanțarea și valorificarea lucrărilor de cercetare</li>
                  <li>Scrierea unui articol academic</li>
                  <li>Echilibru între viața de familie și cea academică</li>
                  <li>Implicare în biserica locală</li>
                  <li>Integrarea valorilor creștine în orice domeniu academic</li>
                </ul>
              </div>
            </RouterLink>
          </article>

          <!-- 3. Quo Vadis Juvenis? -->
          <article id="quo-vadis" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/quo-vadis-juvenis" class="block">
              <img src="" alt="Quo Vadis Juvenis" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">3</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">QUO VADIS JUVENIS?</h2>
              </header>
              <div class="px-6 py-5 space-y-4">
                <p class="text-slate-700">Program de orientare în carieră pentru tineri (16–25 ani), creat de Universitatea Emanuel în colaborare cu Cityside Education – punte între educație și piața muncii.</p>
                <p class="text-slate-700">Evenimentele oferă informare, ghidare și dezvoltare personală, promovând un caracter integru bazat pe principii iudeo‑creștine și ajutând tinerii să-și identifice chemarea.</p>
                <p class="text-slate-700">Seria Quo Vadis a avut loc în mai multe orașe din România, precum Oradea, Arad și Timișoara.</p>
              </div>
            </RouterLink>
          </article>

          <!-- 4. Conferința Pastorală -->
          <article id="conferinta-pastorala" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/conferinta-pastorala" class="block">
              <img src="" alt="Conferința Pastorală" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">4</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">CONFERINȚA PASTORALĂ</h2>
              </header>
              <div class="px-6 py-5 space-y-4">
                <p class="text-slate-700">Conferință anuală găzduită de Universitatea Emanuel, axată pe consacrare și pasiune în slujire, cu sesiuni despre predicare, etică, consiliere și pastorală, oportunități de închinare, mentorare și relaționare.</p>
                <p class="text-slate-700">Resurse valoroase și invitați cu experiență – pentru lucrători implicați în slujire.</p>
              </div>
            </RouterLink>
          </article>

          <!-- 5. Concertul „Patimile Domnului” -->
          <article id="patimile-domnului" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <RouterLink to="/evenimente/concert-patimile-domnului" class="block">
              <img src="" alt="Concertul Patimile Domnului" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">5</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">CONCERTUL „PATIMILE DOMNULUI”</h2>
              </header>
              <div class="px-6 py-5 space-y-4">
                <p class="text-slate-700">Oratoriul „Patimile și Învierea Domnului”, compus de Paul Constantinescu, proclamă Evanghelia prin muzică românească de calitate. Eveniment susținut de Orchestra Simfonică CONSONANTIS și coruri din mai multe centre culturale.</p>
                <p class="text-slate-700">Un prilej de închinare și mărturie publică, cu impact spiritual și cultural.</p>
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
  name: 'Social',
  data() {
    return {
      activeId: null,
      toc: [
        { id: 'summit', label: 'Summitul de Integritate pentru Prosperitate' },
        { id: 'teaching-as-a-mission', label: 'Teaching as a Mission' },
        { id: 'quo-vadis', label: 'Quo Vadis Juvenis?' },
        { id: 'conferinta-pastorala', label: 'Conferința Pastorală' },
        { id: 'patimile-domnului', label: 'Concertul „Patimile Domnului”' }
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
