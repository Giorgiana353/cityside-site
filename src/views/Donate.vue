<!-- File: src/views/Donate.vue -->
<template>
  <main class="pt-1">
    <!-- HERO -->
    <section class="bg-white">
      <div class="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 class="mt-3 text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Be part of the <span class="text-[#191970]">impact</span>
        </h1>
        <p class="mt-4 text-slate-600 max-w-3xl mx-auto">
          Support Cityside Education’s educational, social and research projects. Every contribution counts.
        </p>
      </div>
    </section>

    <!-- FORM WRAPPER -->
    <section class="bg-slate-50">
      <div class="max-w-6xl mx-auto px-6 py-10 lg:py-16 grid lg:grid-cols-[1fr_380px] gap-8">
        <!-- FORM -->
        <form @submit.prevent="submit" class="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 lg:p-8 space-y-8">
          <!-- Amount -->
          <div>
            <label class="block text-sm font-medium text-slate-700">Amount</label>
            <div class="mt-3 flex rounded-xl border border-slate-300 focus-within:border-[#191970] focus-within:ring-1 focus-within:ring-[#191970] overflow-hidden">
              <input v-model.number="custom" type="number" min="1" step="1" placeholder="e.g. 250" class="h-11 w-full px-3 outline-none" />
            </div>
            <p class="mt-2 text-xs text-slate-500">Selected currency: <strong>{{ currency }}</strong></p>
          </div>

          <!-- Frequency -->
          <div>
            <label class="block text-sm font-medium text-slate-700">Frequency</label>
            <div class="mt-3 inline-flex rounded-xl border border-slate-300 overflow-hidden">
              <button type="button" class="px-4 h-10 text-sm font-medium" :class="frequency==='once' ? 'bg-[#191970] text-white' : 'bg-white text-slate-700'" @click="frequency='once'">One-time</button>
              <button type="button" class="px-4 h-10 text-sm font-medium border-l border-slate-300" :class="frequency==='monthly' ? 'bg-[#191970] text-white' : 'bg-white text-slate-700'" @click="frequency='monthly'">Monthly</button>
            </div>
          </div>

          <!-- Details -->
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">First name</label>
              <input v-model.trim="form.firstName" type="text" class="w-full h-11 rounded-xl border border-slate-300 px-3 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="First name" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Last name</label>
              <input v-model.trim="form.lastName" type="text" class="w-full h-11 rounded-xl border border-slate-300 px-3 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="Last name" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Email</label>
              <input v-model.trim="form.email" type="email" class="w-full h-11 rounded-xl border border-slate-300 px-3 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="email@example.com" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Phone</label>
              <input v-model.trim="form.phone" type="tel" class="w-full h-11 rounded-xl border border-slate-300 px-3 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="+40 7xx xxx xxx" />
            </div>
            <div class="md:col-span-2 space-y-2">
              <label class="block text-sm font-medium text-slate-700">Donation purpose</label>
              <textarea v-model.trim="form.purpose" rows="3" class="w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#191970] focus:ring-1 focus:ring-[#191970]" placeholder="E.g. Scholarships, QuoVadis, research, etc."></textarea>
            </div>
          </div>

          <!-- Payment method (UI only) -->
          <div>
            <label class="block text-sm font-medium text-slate-700">Payment method</label>
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
                  <p class="text-sm font-semibold text-slate-800">Bank transfer</p>
                  <p class="text-xs text-slate-500">Account details shown after submission</p>
                </div>
              </label>
            </div>
          </div>

          <!-- Options -->
          <div class="grid sm:grid-cols-2 gap-4">
            <label class="flex items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" v-model="anonymous" class="h-5 w-5 rounded-md border-slate-300 text-[#191970] focus:ring-[#191970]" />
              I want to remain anonymous
            </label>
            <label class="flex items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" v-model="agree" class="h-5 w-5 rounded-md border-slate-300 text-[#191970] focus:ring-[#191970]" />
              I confirm I have read and agree to the Terms & Privacy Policy
            </label>
          </div>

          <!-- Submit -->
          <div class="pt-2">
            <button type="submit" class="w-full h-12 rounded-full bg-[#9b3e24] text-white font-semibold hover:opacity-95 transition disabled:opacity-50" :disabled="!canSubmit">
              DONATE
            </button>
            <p class="mt-3 text-xs text-slate-500">
              Submitting the form does not process a payment; you’ll receive instructions based on the selected method.
            </p>
          </div>
        </form>

        <!-- SUMMARY -->
        <aside class="h-fit sticky top-24 rounded-2xl bg-white border border-slate-200 shadow-sm p-6 lg:p-7 space-y-5">
          <h3 class="text-lg font-bold text-slate-900">Donation summary</h3>
          <div class="flex justify-between text-sm"><span>Amount</span><span class="font-semibold">{{ displayAmount }}</span></div>
          <div class="flex justify-between text-sm"><span>Frequency</span><span class="font-semibold">{{ frequency === 'once' ? 'One-time' : 'Monthly' }}</span></div>
          <div class="flex justify-between text-sm"><span>Method</span><span class="font-semibold">{{ method === 'card' ? 'Card' : 'Bank transfer' }}</span></div>
          <hr class="my-3">
          <p class="text-xs text-slate-500">
            Processing fees may be retained by the payment processor. For bank transfers we’ll send you the IBAN after submission.
          </p>
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
      currency: 'EUR',
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
      alert('Thank you! The form was sent. (Demo – no payment processing)')
    }
  }
}
</script>
