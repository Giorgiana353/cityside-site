<template>
  <main class="pt-0">
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-2 py-10 lg:py-12 text-center">
        <h1 class="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Proiecte <span class="text-[#191970]">educaționale</span>
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
          <!-- THE GRIFFITHS JOURNAL-->
          <article id="journal" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="block">
              <img src="" alt="The Griffiths Journal of Ethics, Entrepreneurship and Technology" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">1</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">THE GRIFFITHS JOURNAL OF ETHICS, ENTREPRENUERSHIP AND TECHNOLOGY</h2>
              </header>
              <div class="px-6 py-5 space-y-4 prose prose-slate max-w-none">
                <p>
                  The 21st century is, and will continue to be an age of knowledge, while information will be the global currency through which value is created.  Regardless of all its shortcomings, the western style educational system, underpinned by a Judeo-Christian ideology, is still the best instrument for human progress and talent development.  Central to this education system is the peer reviewed academic journal which provide theoreticians and practitioners alike with an outlet for their discoveries.  It further fosters  communities of discoveries, while stimulating rigorous debate and objective research for the betterment of the global society.
                </p>
                <p>
                  In the 2019/2020 academic year, The Griffiths School of Management and IT within Emanuel University of Oradea in collaboration with Cityside Education would like to launch its own peer reviewed academic journal on the topics of ethics, entrepreneurship and technology.  It is our belief that these areas will be essential platforms of debate in the upcoming age, particularly for the international, values-driven community.  The prestigious international platform Emerald publishing has agreed to partner with us in this quest, giving a voice to value-driven academic scholars through the world.  Would would please join this community?
                </p>
                <p>
                  The first volume of the journal can be accessed on Emerald.
                </p>
              </div>
            </div>
          </article>

          <!-- OSNABRÜCK -->
          <article id="osnabruck" ref="sections" class="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden" v-inview>
            <div class="block">
              <img src="" alt="Osnabrück" class="w-full h-64 object-cover"/>
              <header class="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
                <span class="w-10 h-10 rounded-lg bg-[#191970] text-white grid place-items-center text-sm font-bold">2</span>
                <h2 class="text-xl lg:text-2xl font-extrabold text-slate-900">OSNABRÜCK</h2>
              </header>
              <div class="px-6 py-5 space-y-4 prose prose-slate max-w-none">
                <p>
                  Moștenirea de secole, ca și națiune înrobită, se regăsește încă în cultura, mentalitatea, spiritul și situația țării noastre. Din păcate, ﬁecare generație de tineri români va continua să se confrunte cu aceeași cultură dacă aceasta nu este schimbată. Asociația Cityside Education își asumă provocarea de a contribui la această schimbare a culturii crezând cu tărie că viitorul României depinde de educaţia celor care o formează, a generației de mâine și de aceea face tot posibilul ca studenții săi să ﬁe foarte bine echipați și pregătiți pentru a putea schimba fața și soarta României.  
                </p>
                <p>
                  Universitatea Emanuel din Oradea participă anual la un schimb de experiență și interacțiune cu reprezentanți ai 11 societăți civile din Osnabrück, Germania, la invitația domnului Wolfgang Schenk. În acest proiect de studiu al culturii antreprenorial-sociale germane în cadrul organizațiilor non-profit din Osnabrück vor fi implicați studenți de la Facultatea de Management Griffiths a Universității Emanuel din Oradea, care vor ﬁ expuşi la practici profesionale din cadrul unor ONG-uri de succes din Germania recunoscute pentru calitatea serviciilor și soluțiile inovatoare pe care le dezvoltă în rezolvarea problemelor sociale. Acest schimb de experiență este o oportunitate unică pentru reprezentanții României de mâine pentru a asimila practici eﬁciente pe care să le implementeze în organizaţiile din România, în care sunt sau vor ﬁ implicați.
                </p>
                <p class="font-semibold">Beneﬁciile proiectului:</p>
                <ul class="list-disc pl-6">
                  <li>Expunerea și asimilarea de bune practici din societatea civilă germană;</li>
                  <li>Networking și crearea de contacte în spațiul german;</li>
                  <li>Interacțiune și schimb intercultural.</li>
                </ul>
                <p class="font-semibold">Scopul proiectului:</p>
                <p>
                  Studierea culturii antreprenorial-sociale germane prin vizita studenților în cadrul organizațiilor non-profit din Osnabrück, Germania.
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
  name: 'ProjectsEducational',
  data() {
    return {
      activeId: null,
      toc: [
        { id: 'journal', label: 'The Griffiths Journal of Ethics, Entrepreneurship and Technology' },
        { id: 'osnabruck', label: 'Osnabrück' }
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
