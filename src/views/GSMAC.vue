<template>
  <main class="pt-0">
    <!-- HERO -->
    <section class="relative bg-gradient-to-r from-[#191970] to-indigo-800 text-white">
      <div class="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl lg:text-6xl font-extrabold leading-tight">
            GSMAC Conference <span class="text-blue-300">2025</span>
          </h1>
          <p class="mt-5 text-white/80 text-lg max-w-xl">
            Conferința internațională anuală de business și academică.
          </p>
          <div class="mt-8">
            <a href="#register" class="h-11 px-6 rounded-full bg-white text-slate-900 font-semibold inline-flex items-center justify-center hover:bg-blue-100 transition">
              Înregistrează-te
            </a>
          </div>
        </div>
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden">
            <img src="" alt="GSMAC Conference" class="w-full h-full object-cover opacity-95" />
          </div>
        </div>
      </div>
    </section>

    <!-- CE ESTE GSMAC -->
    <section class="bg-slate-50 py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900">Ce este GSMAC?</h2>
        <p class="mt-6 text-slate-600 leading-relaxed">
          GSMAC este conferința anuală, organizată de Facultatea de Management și IT Griffiths din cadrul Universității Emanuel din Oradea
          în colaborare cu Asociația Cityside Education. Este dedicată provocării și împuternicirii oamenilor de business din România spre a
          adopta rolul de agenți ai schimbării și de a crea un mediu prosper.
        </p>
        <p class="mt-4 text-slate-600 leading-relaxed">
          Conferința reunește reprezentanți ai mediului business, societății civile, administrației publice și mediului academic pentru a crea soluții aplicabile.
          Include și sesiuni de cercetare academică, iar articolele sunt publicate cu Springer.
        </p>
      </div>
    </section>

    <!-- SPEAKERS -->
<section class="bg-white py-16 lg:py-24">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-800 text-center">Speakers</h2>
    <p class="text-center text-slate-500 mt-3">Session one</p>

    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Speaker 1 -->
      <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
        <img src="/imagini/gsmac/Catalina.jpg" alt="Catalina Crisan" class="w-full h-64 object-cover group-hover:scale-105 transition"/>
        <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 class="text-lg font-bold text-white">Catalina Crisan</h3>
          <p class="text-slate-200 text-sm">Social Entrepreneurship: perspectives and priorities</p>
        </div>
      </article>

      <!-- Speaker 2 -->
      <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
        <img src="" alt="Stefan Zweifel" class="w-full h-64 object-cover group-hover:scale-105 transition"/>
        <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 class="text-lg font-bold text-white">Stefan Zweifel</h3>
          <p class="text-slate-200 text-sm">Unemployment and underemployment: Immigration and entrepreneurship</p>
        </div>
      </article>

      <!-- Speaker 3 -->
      <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
        <img src="" alt="Lois Vaduva" class="w-full h-64 object-cover group-hover:scale-105 transition"/>
        <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 class="text-lg font-bold text-white">Lois Vaduva</h3>
          <p class="text-slate-200 text-sm">Music therapy: Promoting culture and solving social problems</p>
        </div>
      </article>

      <!-- Speaker 4 -->
      <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
        <img src="" alt="Philip Choban" class="w-full h-64 object-cover group-hover:scale-105 transition"/>
        <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 class="text-lg font-bold text-white">Philip Choban</h3>
          <p class="text-slate-200 text-sm">Digital medical entrepreneurship: The story of Telios</p>
        </div>
      </article>

      <!-- Speaker 5 -->
      <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
        <img src="" alt="Alexandrina Pauceanu" class="w-full h-64 object-cover group-hover:scale-105 transition"/>
        <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 class="text-lg font-bold text-white">Alexandrina Pauceanu</h3>
          <p class="text-slate-200 text-sm">Entrepreneurship and the diaspora: Global models and Romanian possibilities</p>
          <p class="text-slate-400 text-xs mt-1">Geneva Business School</p>
        </div>
      </article>

      <!-- Speaker 6 -->
      <article class="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative" v-inview>
        <img src="" alt="Robert Bogdanffy" class="w-full h-64 object-cover group-hover:scale-105 transition"/>
        <div class="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 class="text-lg font-bold text-white">Robert Bogdanffy</h3>
          <p class="text-slate-200 text-sm">Digital transformation: Harnessing technology for entrepreneurship and social improvement</p>
        </div>
      </article>
    </div>
  </div>
</section>


    <!-- ISTORIC -->
    <section class="max-w-5xl mx-auto px-6 py-16">
      <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 text-center">Istoric conferințe</h2>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <div class="p-5 bg-white rounded-xl shadow border border-slate-200 hover:shadow-lg transition">
          <p class="text-[#191970] font-bold">2022 – 21 ianuarie</p>
          <p class="text-slate-700">Realitatea post-pandemică – Noi provocări și oportunități de creștere</p>
        </div>
        <div class="p-5 bg-white rounded-xl shadow border border-slate-200 hover:shadow-lg transition">
          <p class="text-[#191970] font-bold">2020 – 18 septembrie</p>
          <p class="text-slate-700">Navigarea prin criză – Considerente de afaceri, tehnologie și etică</p>
        </div>
        <!-- continui la fel cu restul anilor -->
      </div>
    </section>

    <!-- REGISTER -->
    <section id="register" class="bg-slate-50 py-16">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 text-center">Register for GSMAC 2025</h2>
        <p class="mt-2 text-center text-slate-600">Completează formularul pentru participare</p>
        <form class="mt-10 space-y-6 bg-white p-8 rounded-2xl shadow-md border border-slate-200">
          <div class="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" class="h-12 px-4 border border-slate-300 rounded-xl w-full focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" />
            <input type="text" placeholder="Last Name" class="h-12 px-4 border border-slate-300 rounded-xl w-full focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" />
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email Address" class="h-12 px-4 border border-slate-300 rounded-xl w-full focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" />
            <input type="tel" placeholder="Phone" class="h-12 px-4 border border-slate-300 rounded-xl w-full focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" />
          </div>
          <label class="flex items-center gap-3 text-sm text-slate-600">
            <input type="checkbox" class="h-5 w-5 rounded-md border-slate-300 text-[#191970] focus:ring-[#191970]" />
            By submitting this form, you agree to our Terms & Conditions.
          </label>
          <button type="submit" class="w-full h-12 rounded-full bg-[#9b3e24] text-white font-semibold hover:opacity-95 transition">SUBMIT</button>
        </form>
      </div>
    </section>
  </main>
</template>


