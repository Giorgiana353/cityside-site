<template>
  <main class="pt-1">
    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-6 py-14 text-center">
        <h1 class="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">Startup-uri de <span class="text-[#191970]">succes</span> & proiecte în curs</h1>
        <p class="mt-4 text-slate-600 max-w-3xl mx-auto">Inițiative lansate cu implicarea Cityside Education sau a comunității noastre – idei care cresc în companii cu impact.</p>
      </div>
    </section>

    <!-- SUCCES -->
    <section class="bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <header class="flex items-end justify-between gap-4">
          <div>
            <h2 class="text-2xl lg:text-3xl font-extrabold text-slate-900">Startup‑uri de succes</h2>
            <p class="text-slate-600">Companii validate pe piață, cu povești puternice.</p>
          </div>
        </header>

        <div class="mt-8 grid md:grid-cols-2 gap-6 lg:gap-8">
          <article
            v-for="s in success"
            :key="s.name"
            class="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
            v-inview
          >
            <div class="relative h-56 bg-slate-100">
              <img :src="s.image" :alt="s.name" class="w-full h-full object-cover group-hover:scale-105 transition" />
              <span class="absolute left-4 top-4 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-[#191970] border border-[#191970]/20">Succes</span>
            </div>
            <div class="p-5 lg:p-6">
              <h3 class="text-xl font-bold text-slate-900">{{ s.name }}</h3>
              <p class="mt-2 text-slate-700 leading-relaxed">{{ s.desc }}</p>
              <div class="mt-4">
                <a :href="s.link" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Citește mai mult
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M10 7h7v7"/></svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- IN DEVELOPMENT -->
    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <header>
          <h2 class="text-2xl lg:text-3xl font-extrabold text-slate-900">Startup‑uri în curs de dezvoltare</h2>
          <p class="text-slate-600">Idei actuale pe care le sprijinim în faza de creștere.</p>
        </header>

        <div class="mt-8 grid md:grid-cols-2 gap-6 lg:gap-8">
          <article
            v-for="s in building"
            :key="s.name"
            class="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
            v-inview
          >
            <div class="relative h-56 bg-slate-100">
              <img :src="s.image" :alt="s.name" class="w-full h-full object-cover group-hover:scale-105 transition" />
              <span class="absolute left-4 top-4 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#191970]/10 text-[#191970] border border-[#191970]/20">În dezvoltare</span>
            </div>
            <div class="p-5 lg:p-6">
              <h3 class="text-xl font-bold text-slate-900">{{ s.name }}</h3>
              <p class="mt-2 text-slate-700 leading-relaxed">{{ s.desc }}</p>
              <div class="mt-4" v-if="s.link">
                <a :href="s.link" target="_blank" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191970] text-white text-sm font-semibold hover:opacity-90">
                  Citește mai mult
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
  name: 'Startups',
  data() {
    return {
      success: [
        {
          name: 'Școala Informală de IT',
          link: 'https://scoalainformala.ro/',
          image: '/imagini/startups/scoalainformala.jpg',
          desc: 'Școala Informală de IT este cea mai mare platformă din România care reunește profesioniști de top din industrie cu oameni talentați, conduși de dorința de a-și dezvolta abilitățile unice de IT. Asociația Cityside Education reprezentată prin Sebastian Văduva, împreună cu mai mulți parteneri din Cluj-Napoca au fondat această Școală în 2013. Ideea a venit după ce au avut loc mai multe sesiuni de training corporativ cu companii mari de IT care s-au plâns că au tot mai puțin timp să investească în cursuri tehnice „la ei acasă”... Școala s-a extins rapid de la Cluj-Napoca la București, Timișoara, Iași și chiar la Oradea, pe parcursul unui an și jumătate.'
        },
        {
          name: 'Oradea Tech Hub',
          link: 'https://start-up.ro/subiecte/oradea-tech-hub/',
          image: '/imagini/startups/oth.jpg',
          desc: 'Asociația Oradea Tech Hub este o organizație non-profit creată de un grup de entuziaști din domeniul tech pentru sprijinirea comunității locale. Obiectivul Asociației Oradea Tech Hub este de a sprijini și a dezvolta comunitatea locală din industriile creative și de tehnologie. Pentru ca acest obiectiv să fie atins, Oradea Tech Hub dezvoltă trei lucruri principale: - Spații de co-working pentru startup-uri și freelanceri și facilitarea networking-ului între aceștia - Organizarea de evenimente cu specific tech & creativ, meetups, etc. - Promovarea intereselor companiilor IT locale și reprezentarea acestora pe plan național (autorități locale, naționale, etc) și internațional'
        },
        {
          name: 'Sourcematch',
          link: 'https://www.sourcematch.team/',
          image: '/imagini/startups/sourcematch.jpg',
          desc: 'În 2011, în timp ce Sebastian Văduva era decanul Facultății de Management și IT Griffiths din cadrul Universității Emanuel din Oradea, a fost provocat de către un proprietar de afaceri american să creeze Stark Vantage, o companie specializată în administrarea IT, telemarketing, precum și finanțe și contabilitate pentru piața americană. A adunat opt absolvenți printre care și Bogdan Negru, care mai târziu a devenit CEO al companiei românești. Nivelul activității a crescut în mod constant în 2012, iar până în 2013 a luat numele Stark Europe, devenind sucursala europeană pentru Stark Talent, o companie lider de resurse umane și recrutare din Statele Unite. În 2017, compania a făcut rebranding la Sourcematch, iar Bogdan Negru s-a mutat în SUA pentru a spori vânzările companiei.'
        },
        {
          name: 'Păpuși și Povești Românești',
          link: 'https://papusipovestiromanesti.ro/',
          image: '/imagini/startups/ppr.jpg',
          desc: 'Păpuși și Povești Românești este un proiect educațional adresat copiilor români, în special fetelor. Scopul nostru este încurajarea copiii să citească, să se joace și să se identifice cu personaje și valori morale prin povești și păpuși captivante bazate pe istoria națională. Această inițiativă este derulată în parteneriat cu Asociația ONG ASA, specializată în reabilitarea femeilor prin diferite activități de auto-dezvoltare, inclusiv design vestimentar. Inițiative mai are și scopul de a sprijinii prin donații inițiativa de muzicoterapie din cadrul Universității Emanuel și al Asociației Cityside.'
        }
      ],
      building: [
        {
          name: 'Online teaching and mentoring – IMPACT',
          link: '',
          image: '/imagini/startups/impact.jpg',
          desc: 'Programul de studiu de tip mentorat IMPACT este un amestec de cunoștințe extins de la domeniul afacerilor până la teologie. Programul este personalizat în funcție de nevoile unice și circumstanțele fiecărui participant, iar informațiile sunt livrate într-un format multiplu (online, coaching-ul Skype și contexte de grup). Programul este personalizat pentru a fi de utilitate maximă practică și principiul biblic.'
        },
        {
          name: 'Elderly Care Tourism',
          link: '',
          image: '/imagini/startups/elderly.jpg',
          desc: 'Elderly care tourism s-a fondat pe baza unei nevoi reale: un număr tot mai mare de vârstnici care necesită îngrijire și asistență. Misiunea este să ofere îngrijire și recuperare, tratamente balneo-climaterice și îngrijire pe termen lung, păstrând independența și sentimentul de „acasă”.'
        },
        {
          name: 'Asociația Oamenilor de Afaceri Români din Diaspora',
          link: '',
          image: '/imagini/startups/aoard.jpg',
          desc: 'Asociația are ca obiectiv valorificarea potențialului oamenilor de afaceri români din Diaspora, prin schimb de know-how, promovarea unui mediu de afaceri favorabil și stimularea antreprenoriatului între Diaspora și România.'
        },
        {
          name: 'Anytech',
          link: '',
          image: '/imagini/startups/anytech.jpg',
          desc: 'Anytech oferă consultanță IT pentru IMM-uri și un soft BPM flexibil (tip platformă) ce combină beneficii ERP + CRM + automatizare procese și o comunicare eficientă între departamente. Include consultanță, hosting și training, punând accent pe adaptabilitate fără a modifica codul.'
        }
      ]
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
</style>
