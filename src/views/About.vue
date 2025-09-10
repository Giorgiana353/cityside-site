<template>
  <main class="pt-1">
    <section class="bg-white">
      <div class="max-w-6xl mx-auto px-6 py-16 lg:py-24 text-center">
        <h1 class="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Despre <span class="text-[#191970]">Cityside</span>
        </h1>
        <p class="mt-5 text-slate-600 max-w-3xl mx-auto">
          Asociația Cityside Education a fost fondată în anul 1994 în Statele Unite ale Americii, având ca scop răspândirea veștii bune a Evangheliei cu ajutorul inițiativelor educaționale și de mentorare în România. De-a lungul timpului, aceste inițiative s-au diversificat, acoperind tot mai multe domenii. Printre acestea se numără sprijinirea tinerilor în luarea unor decizii potrivite pentru cariera lor și susținerea dezvoltării personale și profesionale a studenților.
        </p>
        <p class="mt-5 text-slate-600 max-w-3xl mx-auto">
          În prezent, activitatea asociației se desfășoară pe trei direcții principale: educațională, socială și de business. Principalii beneficiari ai inițiativelor noastre sunt studenții Universității Emanuel din Oradea. Credem cu tărie în puterea educației bazate pe principii etice și în impactul pe care profesorii îl pot avea în formarea tinerilor. De aceea, investim constant în studenți și în dezvoltarea generațiilor viitoare.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink to="/proiecte" class="h-11 px-6 rounded-full bg-[#191970] text-white font-semibold inline-flex items-center justify-center hover:opacity-90 transition">Proiectele noastre</RouterLink>
          <RouterLink to="/evenimente" class="h-11 px-6 rounded-full border border-slate-300 text-slate-700 font-semibold inline-flex items-center justify-center hover:bg-slate-50 transition">Evenimente</RouterLink>
        </div>

        <!-- media card -->
        <div class="relative mt-14">
          <div class="max-w-5xl mx-auto rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
            <img src="" alt="Comunitate Cityside" class="w-full h-[360px] object-cover"/>
          </div>
          <div class="absolute inset-x-0 -bottom-8 max-w-3xl mx-auto grid grid-cols-3 gap-4">
            <div class="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
              <p class="text-xs text-slate-500">Ani de activitate</p>
              <p class="text-2xl font-extrabold text-[#191970]">15+</p>
            </div>
            <div class="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
              <p class="text-xs text-slate-500">Proiecte derulate</p>
              <p class="text-2xl font-extrabold text-[#191970]">100+</p>
            </div>
            <div class="rounded-xl bg-white border border-slate-200 p-4 shadow-sm">
              <p class="text-xs text-slate-500">Studenți & tineri</p>
              <p class="text-2xl font-extrabold text-[#191970]">1.000+</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISIUNE / VALORI -->
    <section class="relative bg-slate-50 pt-16 pb-8 lg:pt-24 lg:pb-14">
      <div class="max-w-6xl mx-auto px-6">
        <div class="max-w-3xl mx-auto">
          <ol class="relative border-s border-slate-200">
            <li v-for="(f, i) in features" :key="f.title" class="relative pl-10 py-8 group" v-inview>
              <span class="absolute -left-[11px] top-8 w-6 h-6 rounded-full grid place-items-center bg-white border border-slate-300 shadow-sm text-[#191970]">
                <component :is="f.icon" class="w-3.5 h-3.5"/>
              </span>
              <h3 class="text-xl font-bold text-slate-900">{{ f.title }}</h3>
              <p class="mt-2 text-slate-600">{{ f.desc }}</p>
              <div class="mt-4 h-1 w-16 bg-[#191970]/20 rounded-full group-hover:w-24 transition-all"></div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- ECHIPA -->
    <section class="bg-white py-16 lg:py-24">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl lg:text-5xl font-extrabold text-slate-800 text-center">ECHIPA</h2>
        <p class="text-center text-slate-500 mt-3">Oameni dedicați educației și cercetării</p>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Fiecare membru scris manual -->
          <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
            <img src="/imagini/echipa/sebastian-vaduva.jpeg" alt="Dr. Sebastian Văduva MBA" class="w-full h-full object-cover group-hover:scale-105 transition"/>
            <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 class="text-lg font-bold text-white">Dr. Sebastian Văduva MBA</h3>
              <p class="text-slate-200">Membru fondator | Președinte</p>
            </div>
          </article>

          <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
            <img src="/imagini/echipa/ioan-fotea.jpeg" alt="Dr. Ioan Fotea" class="w-full h-full object-cover group-hover:scale-105 transition"/>
            <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 class="text-lg font-bold text-white">Dr. Ioan Fotea</h3>
              <p class="text-slate-200">Membru fondator | Coordonator proiect</p>
            </div>
          </article>

          <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
            <img src="/imagini/echipa/emanuel-tundrea.jpeg" alt="Dr. Emanuel Țundrea" class="w-full h-full object-cover group-hover:scale-105 transition"/>
            <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 class="text-lg font-bold text-white">Dr. Emanuel Țundrea</h3>
              <p class="text-slate-200">Membru fondator | Coordonator proiect</p>
            </div>
          </article>

          <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
            <img src="/imagini/echipa/silvia-fotea.jpeg" alt="Dr. Silvia Fotea" class="w-full h-full object-cover group-hover:scale-105 transition"/>
            <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 class="text-lg font-bold text-white">Dr. Silvia Fotea</h3>
              <p class="text-slate-200">Coordonator proiect</p>
            </div>
          </article>

          <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
            <img src="/imagini/echipa/miriam-pacurar.jpeg" alt="Miriam Păcurar" class="w-full h-full object-cover group-hover:scale-105 transition"/>
            <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 class="text-lg font-bold text-white">Miriam Păcurar</h3>
              <p class="text-slate-200">Marketing assistant</p>
            </div>
          </article>

          <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
            <img src="/imagini/echipa/melisa-benchis.jpeg" alt="Melisa Benchiș" class="w-full h-full object-cover group-hover:scale-105 transition"/>
            <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 class="text-lg font-bold text-white">Melisa Benchiș</h3>
              <p class="text-slate-200">Writing assistant</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- PARTENERI -->
    <section class="max-w-6xl mx-auto px-6 py-14">
      <h2 class="text-3xl lg:text-5xl font-extrabold text-slate-800 text-center">PARTENERI</h2>
      <div class="mt-10 relative">
        <div class="overflow-hidden group">
          <ul class="flex gap-16 animate-marquee [--duration:35s] group-hover:[animation-play-state:paused]">
            <li v-for="(p, idx) in partnersDoubled" :key="idx" class="shrink-0 opacity-80 hover:opacity-100 transition">
              <img :src="p.logo" :alt="p.name" class="h-14 md:h-20 object-contain" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      features: [
        { title: 'Misiune', desc: 'Investim în oameni și contribuim la dezvoltarea și informarea generației tinere prin educație și mentorare.', icon: 'IconTarget' },
        { title: 'Impact', desc: 'Proiecte de cercetare, conferințe și evenimente care dezvoltă abilități și creează oportunități reale.', icon: 'IconGrowth' },
        { title: 'Valori', desc: 'Etică, excelență și colaborare – principiile care ne ghidează fiecare inițiativă.', icon: 'IconCompass' },
      ],
      partners: [
        { name: 'INBAM', logo: '/imagini/parteneri/INBAM.jpg' },
        { name: 'Griffiths School of Management', logo: '/imagini/parteneri/GSM.jpg' },
        { name: 'COPE', logo: '/imagini/parteneri/COPE.jpg' },
        { name: 'Soluții Avansate', logo: '/imagini/parteneri/SolutiiAvansate.jpg' },
      ],
    }
  },
  computed: {
    partnersDoubled() { return [...this.partners, ...this.partners] },
  },
  components: {
    IconTarget: {
      template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M20 12h2M2 12h2M12 2v2M12 20v2"/></svg>'
    },
    IconGrowth: {
      template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 20h18"/><path d="M7 16l3-3 3 3 4-4 3 3"/><path d="M7 10V4M12 12V4M17 9V4"/></svg>'
    },
    IconCompass: {
      template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M14 10l-4 1-1 4 4-1 1-4Z"/></svg>'
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
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.animate-marquee { animation: marquee var(--duration, 28s) linear infinite; width: max-content; }

.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.translate-y-6 { transform: translateY(1.5rem); }
.translate-y-0 { transform: translateY(0); }
</style>
