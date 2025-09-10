<template>
  <main class="pt-0">
    <!-- HERO TITLE -->
    <section class="bg-white py-16 lg:py-20">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl lg:text-6xl font-extrabold text-[#191970]">BUSINESS DAYS</h1>
      </div>
    </section>

    <!-- CONTENT + IMAGES -->
    <section class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Text -->
      <div class="text-slate-700 leading-relaxed space-y-4">
        <p>
          Business Days este o platformă de socializare pentru oamenii de afaceri și întreprinzători români.
          Scopul acestui eveniment este crearea unei culturi antreprenoriale sănătoase și durabile în România.
        </p>
        <p>
          Primul eveniment Business Days a fost organizat în 2010. Evenimentul are loc în fiecare an, în 4 orașe din România:
          Iași, Cluj-Napoca, București și Timișoara. Aceste evenimente urmăresc să stimuleze mediul de afaceri să fie mai
          dinamic prin inspirație, experiență și oportunități.
        </p>
        <p>
          Sebastian Văduva a fost invitat ca vorbitor de la prima lor ediție. Profesorii Facultății de Management și IT Griffiths
          din cadrul Universității Emanuel din Oradea sunt invitați ca vorbitori, iar studenții fac parte din echipa de
          organizatori ca voluntari de la înființare.
        </p>
        <div class="mt-6">
          <a href="https://www.businessdays.ro/" target="_blank"
             class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#191970] text-white font-semibold hover:opacity-90 transition">
            Vezi website Business Days
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- IMAGE SLIDER + LOGO -->
      <div class="relative w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-white">
        <div class="relative h-[400px]">
          <transition-group name="fade" tag="div">
            <img v-for="(img, i) in images" :key="i" v-show="current === i"
                 :src="img" class="absolute inset-0 w-full h-full object-cover"/>
          </transition-group>
        </div>

        <!-- Controls -->
        <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          <button v-for="(img, i) in images" :key="i" @click="current = i"
                  :class="['w-3 h-3 rounded-full transition',
                          current === i ? 'bg-[#191970]' : 'bg-white/60 hover:bg-white']">
          </button>
        </div>

        <!-- LOGO Business Days -->
        <div class="p-6 flex justify-center border-t border-slate-200 bg-white">
          <img src="/imagini/partner_business_days.jpg" alt="Business Days Logo" class="h-12 object-contain"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "BusinessDays",
  data() {
    return {
      current: 0,
      images: [
        "/imagini/businessdays/1.jpg",
        "/imagini/businessdays/2.jpg",
        "/imagini/businessdays/3.jpg",
        "/imagini/businessdays/4.jpg",
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.current = (this.current + 1) % this.images.length;
    }, 4000); // schimbă imaginea la fiecare 4 secunde
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
