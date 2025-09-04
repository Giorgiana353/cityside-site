<template>
  <header class="w-full h-12 bg-[#003366] fixed top-0 left-0 z-50">
    <div class="h-full px-4 flex items-center gap-3">
      <button
        @click="isOpen = !isOpen"
        class="shrink-0 mr-1 focus:outline-none"
        aria-label="Meniu"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="w-20 shrink-0">
        <img src="/imagini/site_logo_cityside.png" alt="Logo" />
      </div>

      <form class="flex-1 flex justify-center" @submit.prevent="onSearch">
        <div class="w-full max-w-md relative">
          <input
            v-model.trim="query"
            type="search"
            placeholder="Caută..."
            class="w-full h-9 rounded-full bg-white/95 text-gray-900 placeholder-gray-500 pl-10 pr-10 outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Căutare"
          />
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M21 20.29 16.72 16a8 8 0 1 0-1.41 1.41L20.29 21 21 20.29ZM4 10a6 6 0 1 1 6 6 6 6 0 0 1-6-6Z"/></svg>
          </span>
          <button type="submit" class="absolute right-1 top-1/2 -translate-y-1/2 px-3 h-7 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500">Caută</button>
        </div>
      </form>

      <button
        @click="toggleLang"
        class="shrink-0 ml-2 h-8 px-3 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/20"
        :aria-label="`Schimbă limba. Limba curentă: ${currentLang}`"
      >
        {{ currentLang }}
      </button>
    </div>

    <transition name="slide">
      <nav
        v-if="isOpen"
        class="fixed top-0 left-0 w-64 h-full bg-[#004080] shadow-lg flex flex-col px-6 py-8 space-y-4 z-[60] overflow-y-auto"
      >
        <button
          @click="isOpen = false"
          class="self-end mb-4 focus:outline-none"
          aria-label="Închide meniul"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <router-link to="/" class="hover:text-blue-300 font-semibold text-white" @click="closeMenu">Acasă</router-link>
        <router-link to="/despre-noi" class="hover:text-blue-300 font-semibold text-white" @click="closeMenu">Despre noi</router-link>
        <router-link to="/scurt-istoric" class="hover:text-blue-300 font-semibold text-white" @click="closeMenu">Scurt istoric</router-link>

        <div>
          <button @click="toggleDropdown('evenimente')" class="w-full text-left font-semibold text-white hover:text-blue-300 flex justify-between items-center">
            Evenimente
            <span>{{ openDropdown === 'evenimente' ? '-' : '+' }}</span>
          </button>
          <div v-if="openDropdown === 'evenimente'" class="ml-4 mt-2 flex flex-col space-y-2">
            <router-link to="/evenimente/business" class="text-white hover:text-blue-300" @click="closeMenu">Business</router-link>
            <router-link to="/evenimente/sociale" class="text-white hover:text-blue-300" @click="closeMenu">Sociale</router-link>
          </div>
        </div>

        <div>
          <button @click="toggleDropdown('proiecte')" class="w-full text-left font-semibold text-white hover:text-blue-300 flex justify-between items-center">
            Proiecte
            <span>{{ openDropdown === 'proiecte' ? '-' : '+' }}</span>
          </button>
          <div v-if="openDropdown === 'proiecte'" class="ml-4 mt-2 flex flex-col space-y-2">
            <router-link to="/proiecte/educationale" class="text-white hover:text-blue-300" @click="closeMenu">Educaționale</router-link>
            <router-link to="/proiecte/sociale" class="text-white hover:text-blue-300" @click="closeMenu">Sociale</router-link>
          </div>
        </div>

        <router-link to="/startup-uri" class="hover:text-blue-300 font-semibold text-white" @click="closeMenu">Startup-uri</router-link>
        <router-link to="/doneaza" class="hover:text-blue-300 font-semibold text-white" @click="closeMenu">Donează</router-link>
      </nav>
    </transition>
  </header>

  <div class="h-12"></div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
      openDropdown: null,
      currentLang: localStorage.getItem('lang') || 'RO',
      query: '',
    };
  },
  methods: {
    toggleDropdown(menu) {
      this.openDropdown = this.openDropdown === menu ? null : menu;
    },
    closeMenu() {
      this.isOpen = false;
      this.openDropdown = null;
    },
    toggleLang() {
      this.currentLang = this.currentLang === 'RO' ? 'EN' : 'RO';
      localStorage.setItem('lang', this.currentLang);
      this.$emit('lang-change', this.currentLang); 
    },
    onSearch() {
      if (!this.query) return;
      this.$router.push({ path: '/cautare', query: { q: this.query } });
      this.query = '';
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active { transition: transform 0.25s ease, opacity 0.25s ease; }
.slide-enter-from { transform: translateX(-100%); opacity: 0; }
.slide-enter-to { transform: translateX(0); opacity: 1; }
.slide-leave-from { transform: translateX(0); opacity: 1; }
.slide-leave-to { transform: translateX(-100%); opacity: 0; }
</style>
