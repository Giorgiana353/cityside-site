<template>
  <main class="pt-1">
    <section class="bg-white">
      <div class="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 class="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">Fii parte din <span class="text-[#191970]">impact</span></h1>
        <p class="mt-4 text-slate-600 max-w-3xl mx-auto">Susține proiectele educaționale, sociale și de cercetare Cityside Education. Orice contribuție contează.</p>
      </div>
    </section>

    <section class="bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 py-10 lg:py-16 grid lg:grid-cols-[1fr_380px] gap-8">
        <form @submit.prevent="submit" class="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 lg:p-8 space-y-8">
          <div>
            <label class="block text-sm font-medium text-slate-700">Suma</label>
            <div class="mt-3 flex rounded-xl border border-slate-300 focus-within:border-[#191970] focus-within:ring-1 focus-within:ring-[#191970] overflow-hidden">
              <input v-model.number="custom" type="number" min="1" step="1" placeholder="Ex: 250" class="h-11 w-full px-3 outline-none" />
            </div>
            <p class="mt-2 text-xs text-slate-500">Suma selectată: <strong>EURO</strong></p>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700">Frecvență</label>
            <div class="mt-3 inline-flex rounded-xl border border-slate-300 overflow-hidden">
              <button type="button" class="px-4 h-10 text-sm font-medium" :class="frequency==='once' ? 'bg-[#191970] text-white' : 'bg-white text-slate-700'" @click="frequency='once'">O singură dată</button>
              <button type="button" class="px-4 h-10 text-sm font-medium border-l border-slate-300" :class="frequency==='monthly' ? 'bg-[#191970] text-white' : 'bg-white text-slate-700'" @click="frequency='monthly'">Lunar</button>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Prenume</label>
              <input v-model.trim="form.firstName" type="text" class="w-full h-11 rounded-xl border border-slate-300 px-3 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="Prenume" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Nume</label>
              <input v-model.trim="form.lastName" type="text" class="w-full h-11 rounded-xl border border-slate-300 px-3 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="Nume" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Email</label>
              <input v-model.trim="form.email" type="email" class="w-full h-11 rounded-xl border border-slate-300 px-3 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="email@exemplu.ro" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Telefon</label>
              <input v-model.trim="form.phone" type="tel" class="w-full h-11 rounded-xl border border-slate-300 px-3 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="07xx xxx xxx" />
            </div>
            <div class="md:col-span-2 space-y-2">
              <label class="block text-sm font-medium text-slate-700">Scopul donației</label>
              <textarea v-model.trim="form.purpose" rows="3" class="w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="Ex: Burse studenți, QuoVadis, cercetare, etc."></textarea>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700">Metodă de plată</label>
            <div class="mt-3 grid sm:grid-cols-2 gap-3">
              <label class="flex items-center gap-3 p-4 rounded-xl border cursor-pointer" :class="method==='card' ? 'border-[#191970] bg-[#191970]/5' : 'border-slate-300 hover:border-[#191970]/40'">
                <input type="radio" name="method" value="card" class="hidden" v-model="method" />
                <span class="w-9 h-9 grid place-items-center rounded-lg bg-[#191970]/10 text-[#191970]"><svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><path d="M3 6h18a1 1 0 0 1 1 1v3H2V7a1 1 0 0 1 1-1Zm-1 6h20v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5Zm3 3h5v2H5v-2Z"/></svg></span>
                <div>
                  <p class="text-sm font-semibold text-slate-800">Card</p>
                  <p class="text-xs text-slate-500">Visa, Mastercard</p>
                </div>
              </label>

              <label class="flex items-center gap-3 p-4 rounded-xl border cursor-pointer" :class="method==='bank' ? 'border-[#191970] bg-[#191970]/5' : 'border-slate-300 hover:border-[#191970]/40'">
                <input type="radio" name="method" value="bank" class="hidden" v-model="method" />
                <span class="w-9 h-9 grid place-items-center rounded-lg bg-[#191970]/10 text-[#191970]"><svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><path d="M3 9.5 12 4l9 5.5v1H3v-1Zm0 3.5h18v6H3v-6Zm3 1.5h3V18H6v-3.5Z"/></svg></span>
                <div>
                  <p class="text-sm font-semibold text-slate-800">Transfer bancar</p>
                  <p class="text-xs text-slate-500">Vezi detalii cont după trimitere</p>
                </div>
              </label>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <label class="flex items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" v-model="anonymous" class="h-5 w-5 rounded-md border-slate-300 text-[#191970] focus:ring-[#191970]" />
              Vreau să rămân anonim(ă)
            </label>
            <label class="flex items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" v-model="agree" class="h-5 w-5 rounded-md border-slate-300 text-[#191970] focus:ring-[#191970]" />
              Confirm că am citit și sunt de acord cu Termenii & Politica de confidențialitate
            </label>
          </div>

          <div class="pt-2">
            <button type="submit" class="w-full h-12 rounded-full bg-[#9b3e24] text-white font-semibold hover:opacity-95 transition disabled:opacity-50" :disabled="!canSubmit">
              DONEAZĂ
            </button>
            <p class="mt-3 text-xs text-slate-500">Trimiterea formularului nu procesează plata; vei primi instrucțiuni în funcție de metoda selectată.</p>
          </div>
        </form>

        <!-- SUMMARY -->
        <aside class="h-fit sticky top-24 rounded-2xl bg-white border border-slate-200 shadow-sm p-6 lg:p-7 space-y-5">
          <h3 class="text-lg font-bold text-slate-900">Rezumat donație</h3>
          <div class="flex justify-between text-sm"><span>Suma</span><span class="font-semibold">{{ displayAmount }}</span></div>
          <div class="flex justify-between text-sm"><span>Frecvență</span><span class="font-semibold">{{ frequency === 'once' ? 'O singură dată' : 'Lunar' }}</span></div>
          <div class="flex justify-between text-sm"><span>Metodă</span><span class="font-semibold">{{ method === 'card' ? 'Card' : 'Transfer bancar' }}</span></div>
          <hr class="my-3">
          <p class="text-xs text-slate-500">Taxele de procesare pot fi reținute de procesatorul de plăți. Pentru transfer bancar îți trimitem IBAN-ul după trimitere.</p>
        </aside>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Donate',
  data() {
    return {
      custom: null,
      currency: 'RON',
      frequency: 'once',
      method: 'card',
      anonymous: false,
      agree: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        purpose: ''
      }
    }
  },
  computed: {
    displayAmount() {
      const value = this.custom && this.custom > 0 ? this.custom : 0
      return `${value} ${this.currency}`
    },
    canSubmit() {
      const value = this.custom && this.custom > 0 ? this.custom : 0
      return this.agree && value > 0 && this.form.firstName && this.form.lastName && this.form.email
    }
  },
  methods: {
    submit() {
      const value = this.custom && this.custom > 0 ? this.custom : 0
      const payload = {
        amount: value,
        currency: this.currency,
        frequency: this.frequency,
        method: this.method,
        anonymous: this.anonymous,
        ...this.form
      }
      console.log('Donation payload (demo only):', payload)
      alert('Îți mulțumim! Formularul a fost trimis. (Demo – nu are procesare de plată)')
    }
  }
}
</script>

