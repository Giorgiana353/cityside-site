<template>
  <main class="pt-1">
    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-6 py-16 lg:py-20 text-center">
        <h1 class="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          De la misiune <span class="text-[#191970]">la impact</span>
        </h1>
        <p class="mt-5 text-slate-600 max-w-3xl mx-auto">
          Reperele care au modelat Cityside Education – proiecte, conferințe, inițiative și oameni.
        </p>
      </div>
    </section>

    <section class="relative bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-10">
 
        <aside class="hidden lg:block">
          <div class="sticky top-24">
            <div class="rail-scroll space-y-2 pr-1">
              <button
                v-for="(e, idx) in events" :key="e.year"
                @click="scrollTo(idx)"
                class="w-full text-left px-4 py-2 rounded-xl border text-sm transition"
                :class="currentIndex===idx ? 'bg-[#191970] text-white border-[#191970]' : 'bg-white text-slate-700 border-slate-200 hover:border-[#191970]/40'"
                :aria-current="currentIndex===idx ? 'true' : 'false'"
              >
                {{ e.year }}
              </button>
            </div>
          </div>
        </aside>

        <ol class="relative border-s border-slate-200 lg:border-none">
          <li
            v-for="(e, idx) in events"
            :key="e.year"
            :ref="setItemRef"
            class="relative pl-10 lg:pl-0 py-10 first:pt-0 last:pb-0"
          >
            <span class="lg:hidden absolute left-0 top-12 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#191970]"></span>

            <div class="mb-5 lg:mb-8" v-inview>
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#191970]/10 text-[#191970] border border-[#191970]/20">
                {{ e.year }}
              </span>
            </div>

            <!-- Card -->
            <div class="grid lg:grid-cols-2 gap-8 items-stretch" v-inview>
              <div :class="idx % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'">
                <div class="h-full rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
                  <h3 class="text-2xl font-bold text-slate-900">{{ e.title }}</h3>
                  <div class="prose prose-slate max-w-none mt-4">
                    <p v-for="(p, i) in e.paragraphs" :key="i" class="text-slate-700 leading-relaxed">{{ p }}</p>
                    <ul v-if="e.bullets && e.bullets.length" class="mt-4 list-disc pl-6 text-slate-700">
                      <li v-for="(b, i) in e.bullets" :key="i">{{ b }}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div :class="idx % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'">
                <div class="relative rounded-2xl overflow-hidden border border-slate-200 bg-white group">
                  <img :src="e.image" :alt="`Foto ${e.year}`" class="w-full h-72 lg:h-full object-cover group-hover:scale-105 transition"/>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 class="text-2xl lg:text-3xl font-extrabold text-slate-900">Continuăm povestea împreună</h2>
        <p class="mt-3 text-slate-600">Implică-te în proiectele Cityside Education sau descoperă evenimentele următoare.</p>
        <div class="mt-6 flex justify-center gap-4">
          <RouterLink to="/proiecte" class="h-11 px-6 rounded-full bg-[#191970] text-white font-semibold inline-flex items-center justify-center hover:opacity-90 transition">Vezi proiecte</RouterLink>
          <RouterLink to="/evenimente" class="h-11 px-6 rounded-full border border-slate-300 text-slate-700 font-semibold inline-flex items-center justify-center hover:bg-slate-50 transition">Evenimente</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      currentIndex: 0,
      itemRefs: [],
      events: [
        { year: '1994', title: 'Începuturile – Countryside Missions', paragraphs: [
          'Asociația și-a început activitatea sub denumirea de Countryside Missions, o organizație fondată în Statele Unite ale Americii, dedicată misiunilor creștine, cu scopul de a răspândi Evanghelia lui Isus Cristos și de a forma ucenici prin diverse inițiative educaționale și de mentorare.',
          'De-a lungul anilor, asociația a reușit să mobilizeze și să aducă împreună sute de tineri implicați în proiecte misionare desfășurate în comunități defavorizate în țară și străinătate: Oltenia, Dobrogea, Bulgaria, Ucraina, Republica Moldova, Turcia și Albania.'
        ], image: '/imagini/history/1994.jpg' },
        { year: '2010', title: 'Conferințe, iStart și QuoVadis', paragraphs: [
          'În mai are loc prima ediție a Conferinței Academice Anuale a Facultății de Management Griffiths (GSMAC), cu tema „Criza – un stimulent pentru inovare”. Tot în această lună, pe 15 mai, se desfășoară prima conferință QuoVadis, un program de orientare în carieră pentru liceeni.',
          'Se lansează prima ediție a Competiției de Planuri de Afaceri iStart, cu obiectivul de a susține spiritul antreprenorial și creativitatea tinerilor, în colaborare cu Facultatea de Management și IT Griffiths din cadrul Universității Emanuel din Oradea.'
        ], image: '/imagini/history/2010.jpg' },
        { year: '2011', title: 'Conferințe GSMAC, iStart și Business Days', paragraphs: [
          'În 6 mai are loc a doua ediție a Conferinței Academice Anuale GSMAC – „Vremea schimbării: pregătirea pentru revenire”.',
          'Pe 3 iunie are loc a doua ediție iStart.',
          'În noiembrie se desfășoară prima ediție Business Days, cu profesorii Griffiths ca vorbitori și studenții voluntari în organizare.'
        ], image: '/imagini/history/2011.jpg' },
        { year: '2012', title: 'Cityside Education – înregistrare oficială', paragraphs: [
          'Asociația Cityside Education este oficial înregistrată și își continuă colaborarea cu Facultatea de Management și IT Griffiths (Universitatea Emanuel din Oradea) și compania Soluții Avansate.',
          'Pe 17 mai are loc a treia ediție GSMAC – „Locul României în Economia Globală”.',
          'Pe 1 iunie are loc a treia ediție iStart.'
        ], image: '/imagini/history/2012.jpg' },
        { year: '2013', title: 'Școala Informală de IT și un an plin de evenimente', paragraphs: [
          'Se fondează Școala Informală de IT – cea mai mare platformă educațională din România care conectează profesioniști din industrie cu persoane motivate să intre în IT.',
        ], bullets: [
          '13 aprilie – Business Days – Timișoara',
          '24 aprilie – QuoVadis – Training de orientare în carieră',
          '21 mai – Conferința GSMAC – „Dezvoltarea spiritului antreprenorial și a creativității în mediul de afaceri din România”',
          '3 iunie – Competiția iStart',
          '25–26 septembrie – Business Days – Cluj-Napoca',
          '10–11 decembrie – Business Days – București'
        ], image: '/imagini/history/2013.jpg' },
        { year: '2014', title: 'Osnabrück, Germania & Summitul de Integritate', paragraphs: [
          'Primul schimb de experiență la Osnabrück pentru studenții Griffiths, două săptămâni dedicate unei culturi antreprenorial-sociale în ONG-uri locale – devenit apoi un program anual.',
          'În noiembrie, Cityside Education co-organizează Summitul de Integritate pentru Prosperitate, în parteneriat cu Transparency International România, Rotary Club și Universitatea Emanuel din Oradea (evenimente în: București, Bistrița, Timișoara, Zalău, Sibiu, Arad).'
        ], bullets: [
          '3 aprilie – Business Days – Timișoara',
          '10–12 aprilie – QuoVadis – training de orientare în carieră',
          '15 mai – GSMAC – „Etica afacerilor și leadershipului într-un context transdisciplinar”',
          '5 iunie – Competiția iStart',
          '9–10 iulie – Business Days – Cluj-Napoca',
          '20 noiembrie – Summitul de Integritate – București',
          '27 noiembrie – Summitul de Integritate – Bistrița'
        ], image: '/imagini/history/2014.jpg' },
        { year: '2015', title: 'Masterclass & Conferința Pastorală', paragraphs: [
          'Se lansează prelegerile Masterclass pentru studenții de master Griffiths și public; susținute de lideri de business din țară și străinătate.',
          'În 21–24 octombrie are loc prima Conferință Pastorală, în parteneriat cu Universitatea Emanuel din Oradea și Cityside Education.'
        ], bullets: [
          '22–23 ianuarie – Oradea – Summitul de Integritate pentru Prosperitate',
          '26–28 aprilie – QuoVadis – Training de orientare în carieră',
          '22 aprilie – Timișoara – Summitul de Integritate',
          '7 mai – GSMAC – „Dezvoltarea, Finanțarea și Creșterea Organizațiilor”',
          '8 mai – iStart',
          '7 octombrie – Zalău – Summitul de Integritate',
          '8–9 decembrie – Business Days – București',
          '11–12 decembrie – Masterclass – Adrian Cioroianu – „Managementul Marketingului în IT”',
          '11–12 decembrie – Masterclass – Leadership & Management cu Mario Brühlman'
        ], image: '/imagini/history/2015.jpg' },
        { year: '2016', title: 'An de consolidare: iStart, QuoVadis, GSMAC, Business Days', bullets: [
          '3 martie – Competiția iStart',
          '15 martie – Summitul de Integritate – Arad',
          '15 martie – QuoVadis – Arad',
          '18–19 martie – Masterclass – Jason Fisher – „Economia Internetului într-o societate digitală”',
          '21–22 aprilie – QuoVadis',
          '12 mai – GSMAC – „Dezvoltarea Talentului, Creșterea Organizațiilor și Crearea unui Viitor”',
          '16 iunie – Business Days – Iași',
          '16 septembrie – Masterclass – Adrian Ziderman – „Ethical Issues in Academic Publishing”',
          '5 octombrie – Summitul de Integritate – Târgu Mureș',
          '19–20 octombrie – Business Days – București',
          '29 octombrie – Masterclass – Dr. Varujan Pambuccian – „Economia Internetului 1”',
          '25 noiembrie – Summitul de Integritate – Brașov',
          '7 decembrie – Summitul de Integritate – Bistrița',
          '9 decembrie – Summitul de Integritate – București',
          '15 decembrie – Business Days – Cluj-Napoca'
        ], paragraphs: [], image: '/imagini/history/2016.jpg' },
        { year: '2017', title: 'Romanian Academic Network', paragraphs: [
          'În 22 septembrie este organizat primul eveniment Romanian Academic Network – o comunitate a doctoranzilor, cercetătorilor și cadrelor didactice evanghelice din România, axată pe excelență academică și perspectivă creștină în mediul universitar.'
        ], bullets: [
          '21 aprilie – Masterclass – Dr. Varujan Pambuccian – „Economia Internetului 2”',
          '20 aprilie – iStart',
          '20–22 aprilie – QuoVadis',
          '27 aprilie – Business Days – Oradea',
          '29 aprilie – Concertul de Paști „Patimile și Învierea Domnului”',
          '11 mai – GSMAC – „Bunăstarea societății civile, economice și sociale”',
          '6 iulie – Business Days – Cluj-Napoca',
          '17 octombrie – Masterclass – Dr. Robert Hisrich – „Entrepreneurship in Tech”',
          '25–26 octombrie – Oradea Leadership Breakfast'
        ], image: '/imagini/history/2017.jpg' },
        { year: '2018', title: 'Armonii pentru copii în îngrijire paliativă', paragraphs: [
          'Pe 29 ianuarie este lansat proiectul „Armonii pentru copii în îngrijire paliativă” – terapie prin muzică dedicată copiilor cu boli cronice progresive, în colaborare cu secția de muzică a Universității Emanuel din Oradea.',
          'Este organizat concertul vocal-simfonic „Patimile și Învierea Domnului” de Paul Constantinescu (Orchestra CONSONANTIS, coruri din Oradea, Cluj, București).'
        ], bullets: [
          '13 aprilie – Masterclass – „Marketing și vânzări online”',
          '20–22 aprilie – QuoVadis',
          '29 aprilie – Concertul „Patimile și Învierea Domnului” – dirijor Emanuel Bălăcescu',
          '10–11 mai – GSMAC – „Antreprenoriat și Etică în Afaceri: Viitorul și Beneficiile Informaticii Românești”',
          '4 iulie – Business Days – Cluj-Napoca'
        ], image: '/imagini/history/2018.jpg' },
        { year: '2019', title: 'GSMAC – Creativitate, tehnologie și etică', bullets: ['20 septembrie – GSMAC – „Provocări și oportunități de dezvoltare a organizațiilor prin creativitate, tehnologie și etică”'], paragraphs: [], image: '/imagini/history/2019.jpg' },
        { year: '2020', title: 'GSMAC – Navigarea prin criză', bullets: ['18 septembrie – GSMAC – „Navigarea prin criză: considerente de afaceri, tehnologie și etică”'], paragraphs: [], image: '/imagini/history/2020.jpg' },
        { year: '2021', title: 'Artă pentru speranță – fundraising', paragraphs: [
          'În decembrie, organizăm o strângere de fonduri pentru muzicoterapie la Universitatea Emanuel. Delia Negruț și nepoata ei, Evelina Văduva, realizează 55 de picturi abstracte vândute integral în cadrul unei expoziții caritabile – fondurile susțin copiii cu boli grave.'
        ], bullets: ['Decembrie – Expoziție de pictură abstractă și minimalistă'], image: '/imagini/history/2021.jpg' },
        { year: '2022', title: 'Realitate post-pandemică', bullets: ['21 ianuarie – GSMAC – „Realitate post‑pandemică. Noi provocări și oportunități de creștere”'], paragraphs: [], image: '/imagini/history/2022.jpg' },
        { year: '2023', title: 'Mobilizarea diasporei care se întoarce', bullets: [
          '26 ianuarie – GSMAC – „Creating jobs for the so‑called ‘useless’ generation: mobilizing the returning diaspora”',
          '6–8 aprilie – QuoVadis – Training de orientare în carieră'
        ], paragraphs: [], image: '/imagini/history/2023.jpg' },
        { year: '2024', title: 'QuoVadis continuă', bullets: ['25–27 aprilie – QuoVadis – Training de orientare în carieră'], paragraphs: [], image: '/imagini/history/2024.jpg' },
        { year: '2025', title: 'Noua carte a lui Sebastian Văduva', paragraphs: [
          'În aprilie, profesorul și antreprenorul Sebastian Văduva lansează „Trăsăturile și tentațiile oamenilor de succes” – o carte esențială pentru a naviga drumul către performanță fără a compromite integritatea personală.'
        ], bullets: ['24–27 aprilie – QuoVadis – Training de orientare în carieră', 'Aprilie – Lansarea cărții „Trăsăturile și tentațiile oamenilor de succes”'], image: '/imagini/history/2025.jpg' }
      ]
    }
  },
  mounted() {
    const options = { root: null, rootMargin: '0px', threshold: 0.4 }
    this._io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idx = Number((entry.target).getAttribute('data-index'))
        if (entry.isIntersecting) this.currentIndex = idx
      })
    }, options)
    this.$nextTick(() => {
      this.itemRefs.forEach((el, idx) => { if (el) { el.setAttribute('data-index', idx); this._io.observe(el) } })
    })
  },
  beforeUnmount() { if (this._io) this._io.disconnect() },
  methods: {
    setItemRef(el) { if (el) this.itemRefs.push(el) },
    scrollTo(idx) {
      const el = this.itemRefs[idx]
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  },
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

.rail-scroll { max-height: calc(100vh - 7rem); overflow-y: auto; }
.rail-scroll::-webkit-scrollbar { width: 6px; }
.rail-scroll::-webkit-scrollbar-thumb { background-color: rgb(203 213 225); border-radius: 9999px; }
</style>
