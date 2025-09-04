<template>
  <footer class="bg-[#003366] text-white py-12 px-6">
    <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
      <!-- coloana stanga -->
      <section class="flex flex-col gap-6">
        <h2 class="text-3xl font-extrabold">CITYSIDE EDUCATION</h2>
        <p class="text-gray-300 leading-relaxed">
          Cityside Education este o organizație apolitică, non-guvernamentală și non-profit, al cărei obiectiv principal este investirea în oameni și sprijinirea procesului de formare și informare a tinerei generații. Asociația își îndeplinește misiunea prin elaborarea de materiale educaționale, promovarea și diseminarea informațiilor relevante în rândul elevilor, studenților și cadrelor didactice, derularea de proiecte de cercetare, precum și prin organizarea de conferințe, prelegeri și evenimente cu caracter educațional.
        </p>

        <ul class="space-y-3">
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
            <span>Oradea, Bihor</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13 2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13Zm10-8H2l10 6 10-6Z"/></svg>
            <a href="mailto:info@cityside.ro" class="hover:underline">info@cityside.ro</a>
          </li>
        </ul>


        <div class="flex items-center gap-4 flex-wrap">
          <span class="text-gray-300">Rămâi conectat cu noi.</span>
          <nav class="flex gap-4">
            
            <a href="https://www.linkedin.com/in/sebastianvaduva/" aria-label="LinkedIn" class="w-9 h-9 flex items-center justify-center rounded-full border border-blue-700 bg-blue-800 hover:bg-blue-700">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.329-.026-3.039-1.852-3.039-1.853 0-2.136 1.447-2.136 2.943v5.665H9.351V9h3.414v1.561h.049c.476-.901 1.637-1.852 3.37-1.852 3.604 0 4.268 2.372 4.268 5.457v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM6.99 20.452H3.68V9h3.31v11.452Z"/></svg>
            </a>
            
            <a href="https://www.youtube.com/@sebastianvaduva" aria-label="YouTube" class="w-9 h-9 flex items-center justify-center rounded-full border border-blue-700 bg-blue-800 hover:bg-blue-700">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M19.615 3.184C21.403 3.688 22 5.58 22 7.52v8.96c0 1.94-.597 3.832-2.385 4.336C18.003 21.334 12 21.334 12 21.334s-6.003 0-7.615-.518C2.597 20.312 2 18.42 2 16.48V7.52c0-1.94.597-3.832 2.385-4.336C5.997 2.666 12 2.666 12 2.666s6.003 0 7.615.518ZM10 15.5l6-3.5-6-3.5v7Z"/></svg>
            </a>
          </nav>
        </div>
      </section>

      <!-- coloana dreapta -->
      <section>
        <div class="bg-white text-gray-900 border border-gray-200 rounded-xl p-6">
          <h2 class="text-3xl font-extrabold mb-4">CONTACTEAZĂ-NE!</h2>

          <form class="flex flex-col gap-4" @submit.prevent>
            <input type="text" placeholder="Nume" class="w-full h-12 rounded-lg bg-gray-100 border border-gray-300 px-4 placeholder-gray-500 focus:outline-none" />
            <input type="email" placeholder="Email" class="w-full h-12 rounded-lg bg-gray-100 border border-gray-300 px-4 placeholder-gray-500 focus:outline-none" />
            <textarea placeholder="Mesaj" rows="5" class="w-full rounded-lg bg-gray-100 border border-gray-300 px-4 py-2 placeholder-gray-500 focus:outline-none"></textarea>

            <label class="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" class="mt-1" />
              <span>Confirm că am citit și sunt de acord cu Termenii și Condițiile Cityside Education cu privire la datele personale.</span>
            </label>

            <button type="button" class="w-full h-14 rounded-full bg-blue-900 text-white font-bold tracking-wide cursor-not-allowed">TRIMITE</button>
          </form>
        </div>
      </section>
    </div>
  </footer>
</template>


