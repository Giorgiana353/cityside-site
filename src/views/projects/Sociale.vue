<template>
  <main class="pt-0">
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-2 py-10 lg:py-12 text-center">
        <h1 class="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Proiecte <span class="text-[#191970]">sociale</span>
        </h1>
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
          <!-- 1. Expoziție de pictură -->
          <article id="expozitie" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="block">
              <img src="" alt="Expoziție de pictură – abstractă și minimalistă" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">1</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">EXPOZIȚIE DE PICTURĂ<br class="hidden sm:block"/> ABSTRACTĂ ȘI MINIMALISTĂ</h2>
              </header>
              <div class="px-6 py-5 space-y-4 prose prose-slate max-w-none">
                <p>
                  În 2021, luna decembrie am avut ocazia să organizăm o strângere de fonduri cu totul specială. Din dorința de a ajuta proiectul de muzicoterapie al Universității Emanuel din Oradea, prin care sute de copii diagnosticați cu boli grave au parte de ajutor emoțional și spiritual, Delia Negruț și Evelina Văduva au decis să-și doneze timpul și talentul prin organizarea unei expoziții de pictură abstractă.
                </p>
                <p>
                  Delia Negruț, împreună cu nepoata ei Evelina au realizat 55 de picturi, acestea urmând să se vândă la expoziție, iar fondurile strânse să se folosească în cadrul proiectului de muzicoterapie al Universității Emanuel. Toate picturile s-au vândut în cadrul evenimentului care a avut loc. Suntem recunoscători pentru implicarea celor două în dezvoltarea proiectului și pentru toți donatorii care au făcut din acest eveniment unul memorabil.
                </p>
                <p>
                  Mai jos puteți vizualiza câteva dintre picturile vândute la eveniment.
                </p>
              </div>
            </div>
          </article>

          <!-- 2. Muzicoterapie -->
          <article id="muzicoterapie" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="block">
              <img src="" alt="Muzicoterapie" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">2</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">MUZICOTERATIE</h2>
              </header>
              <div class="px-6 py-5 space-y-4 prose prose-slate max-w-none">
                <p>
                  Secția de muzică a Universității Emanuel din Oradea a lansat în 29 ianuarie 2018 proiectul „Armonii pentru copii în îngrijire paliativă”, finanțat de Fundația pentru Comunitate prin „Programul MOL pentru sănătatea copiilor”, deoarece în România nu există programe specializate pentru instruirea studenților în muzicoterapie. Acest proiect vizează punerea în practică a terapiei prin muzică. Cadrele didactice și studenții lucrează cu copii care suferă de boli cronice progresive, iar terapia este focalizată pe reducerea anxietății și a fricii, precum și pe îmbunătățirea calității vieții.
                </p>
                <p class="font-semibold">SESIUNILE DE TERAPIE MUZICALĂ ÎȘI PROPUN:</p>
                <ul class="list-disc pl-6">
                  <li>Să reducă anxietatea copiilor cu boli terminale în ceea ce privește procedurile medicale și starea lor de sănătate;</li>
                  <li>Să ajute copiii, prin muzică, să nu se focalizeze pe durere;</li>
                  <li>Să ajute copiii care au dizabilități în a-și accepta și depăși situația;</li>
                  <li>Să încurajeze socializarea prin intermediul jocurilor muzicale de grup;</li>
                  <li>Să învețe copiii muzică, cu ajutorul instrumentelor (chitară, keyboard, clopoței);</li>
                  <li>Să ofere confort psihic copiilor care sunt agitați din cauza bolii;</li>
                  <li>Să ofere stimulare auditivă, pentru a induce o stare de liniște și pace;</li>
                  <li>Să ofere sprijin spiritual familiei, în vederea acceptării și depășirii situației.</li>
                </ul>
              </div>
            </div>
          </article>

          <!-- 3. Misiunea Countryside -->
          <article id="countryside" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="block">
              <img src="/imagini/proiecte/Countryside.jpg" alt="Misiunea Countryside" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">3</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">MISIUNEA COUNTRYSIDE</h2>
              </header>
              <div class="px-6 py-5 space-y-4 prose prose-slate max-w-none">
                <p>
                  Misiunea Countryside este o organizaţie misionară care susţine o filozofie de viaţă bazată pe slujire. În cadrul organizatiei, accentul cade pe modelare şi creştere spirituală, ucenicie şi mentorare.
                </p>
                <p>
                  Misiunea Countryside are o activitate misionară în parteneriat cu Universitatea Emanuel din Oradea prin implicarea studenţilor în cadrul Misiunii Countryside în ţară şi străinătate.
                </p>
                <p>
                  Misionarii sunt oamenii pe care Dumnezeu îi cheamă pentru o lucrare specială de propovăduire a Evangheliei, dar un stil de viaţă misionar este o perspectivă asupra vieţii pe care Dumnezeu o cere de la fiecare credincios şi această perspectivă este răspândită de către Misiunea Countryside.
                </p>
                <p>
                  Viziunea care înglobează organizatia Countryside merge dincolo de răspândirea Evangheliei. Interesul pentru a-i ajuta pe participanţi să-şi contureze un stil de viaţă misionar, indiferent de cultură, vârstă sau profesia lor defineşte Misiunea Countryside.
                </p>
              </div>
            </div>
          </article>

          <!-- 4. Ukraine Relief Project -->
          <article id="ukraine" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="block">
              <img src="" alt="Ukraine Relief Project" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">4</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">UKRAINE RELIEF PROJECT</h2>
              </header>
              <div class="px-6 py-5 space-y-4 prose prose-slate max-w-none">
                <p>
                  Ukraine Relief Project: helping war refugees in their own land.
                </p>
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
  name: 'ProjectsSocial',
  data() {
    return {
      activeId: null,
      toc: [
        { id: 'expozitie', label: 'Expoziție de pictură – abstractă și minimalistă' },
        { id: 'muzicoterapie', label: 'Muzicoterapie' },
        { id: 'countryside', label: 'Misiunea Countryside' },
        { id: 'ukraine', label: 'Ukraine Relief Project' }
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
