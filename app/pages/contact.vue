<template>
  <div class="min-h-screen text-white relative bg-[#030d17]">

    <!-- ─── HERO SECTION (PAGE 6 HI-FI) ──────────────────────────────── -->
    <section class="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
      <!-- Ambient Radial Glows -->
      <div class="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#18b8ea]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div class="max-w-3xl space-y-4">
          <!-- Tag -->
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#18b8ea] font-semibold">
            {{ t('contact.tag') }}
          </p>

          <!-- Headline -->
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-[58px] leading-tight text-white">
            {{ t('contact.title1') }} <span class="text-[#18b8ea] drop-shadow-[0_0_30px_rgba(24,184,234,0.35)]">{{ t('contact.title2') }}</span>
          </h1>

          <!-- Subtitle -->
          <p class="font-body text-[#94a3b8] text-base sm:text-lg leading-relaxed font-light">
            {{ t('contact.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ─── 2 COLUMNS LAYOUT: FORM & INFO (PAGE 6 HI-FI) ──────────────── -->
    <section class="pb-28 relative z-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <!-- Left Column: Send us a message (7 Cols) -->
          <div class="lg:col-span-7">
            <div class="rounded-3xl geo-card p-8 sm:p-10 shadow-2xl">
              <h2 class="font-display font-bold text-2xl text-white mb-6">
                {{ t('contact.formTitle') }}
              </h2>

              <!-- Success Alert -->
              <div v-if="submitted" class="p-6 rounded-2xl bg-[#18b8ea]/10 border border-[#18b8ea]/40 text-center space-y-3 mb-6">
                <div class="w-12 h-12 rounded-full bg-[#18b8ea]/20 text-[#18b8ea] mx-auto flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(24,184,234,0.3)]">
                  &check;
                </div>
                <h3 class="font-display font-bold text-lg text-white">{{ t('contact.successTitle') }}</h3>
                <p class="text-xs text-[#94a3b8]">
                  {{ t('contact.successDesc') }}
                </p>
                <button
                  @click="submitted = false"
                  class="font-ui text-xs font-semibold text-[#18b8ea] underline cursor-pointer mt-2"
                >
                  {{ t('contact.sendAnother') }}
                </button>
              </div>

              <!-- Form -->
              <form v-else @submit.prevent="handleSubmit" class="space-y-5">
                <!-- Row 1: Full name & Company -->
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="block font-ui text-xs text-[#94a3b8]">{{ t('contact.fullNameLabel') }}</label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      :placeholder="t('contact.fullNamePlaceholder')"
                      class="w-full px-4 py-3 rounded-2xl bg-[#020b14] border border-white/10 text-white placeholder-[#50677c] text-sm focus:outline-none focus:border-[#18b8ea] focus:shadow-[0_0_15px_rgba(24,184,234,0.25)] transition-all"
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label class="block font-ui text-xs text-[#94a3b8]">{{ t('contact.companyLabel') }}</label>
                    <input
                      v-model="form.company"
                      type="text"
                      :placeholder="t('contact.companyPlaceholder')"
                      class="w-full px-4 py-3 rounded-2xl bg-[#020b14] border border-white/10 text-white placeholder-[#50677c] text-sm focus:outline-none focus:border-[#18b8ea] focus:shadow-[0_0_15px_rgba(24,184,234,0.25)] transition-all"
                    />
                  </div>
                </div>

                <!-- Row 2: Email & Phone -->
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="block font-ui text-xs text-[#94a3b8]">{{ t('contact.emailLabel') }}</label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      :placeholder="t('contact.emailPlaceholder')"
                      class="w-full px-4 py-3 rounded-2xl bg-[#020b14] border border-white/10 text-white placeholder-[#50677c] text-sm focus:outline-none focus:border-[#18b8ea] focus:shadow-[0_0_15px_rgba(24,184,234,0.25)] transition-all"
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label class="block font-ui text-xs text-[#94a3b8]">{{ t('contact.phoneLabel') }}</label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      required
                      :placeholder="t('contact.phonePlaceholder')"
                      class="w-full px-4 py-3 rounded-2xl bg-[#020b14] border border-white/10 text-white placeholder-[#50677c] text-sm focus:outline-none focus:border-[#18b8ea] focus:shadow-[0_0_15px_rgba(24,184,234,0.25)] transition-all font-mono"
                    />
                  </div>
                </div>

                <!-- Row 3: I’m interested in -->
                <div class="space-y-1.5">
                  <label class="block font-ui text-xs text-[#94a3b8]">{{ t('contact.interestLabel') }}</label>
                  <select
                    v-model="form.interestedIn"
                    class="w-full px-4 py-3 rounded-2xl bg-[#020b14] border border-white/10 text-white text-sm focus:outline-none focus:border-[#18b8ea] focus:shadow-[0_0_15px_rgba(24,184,234,0.25)] transition-all cursor-pointer"
                  >
                    <option value="Products (radar, GNSS, USV)">Products (radar, GNSS, USV)</option>
                    <option value="TerraPulse-AI Platform">TerraPulse-AI Platform</option>
                    <option value="TerraWatch Monitoring Center">TerraWatch Monitoring Center</option>
                    <option value="Partnership & Survey Project">Partnership &amp; Survey Project</option>
                  </select>
                </div>

                <!-- Row 4: Message -->
                <div class="space-y-1.5">
                  <label class="block font-ui text-xs text-[#94a3b8]">{{ t('contact.messageLabel') }}</label>
                  <textarea
                    v-model="form.message"
                    rows="4"
                    required
                    :placeholder="t('contact.messagePlaceholder')"
                    class="w-full px-4 py-3 rounded-2xl bg-[#020b14] border border-white/10 text-white placeholder-[#50677c] text-sm focus:outline-none focus:border-[#18b8ea] focus:shadow-[0_0_15px_rgba(24,184,234,0.25)] transition-all"
                  ></textarea>
                </div>

                <!-- Button: Send message -->
                <div class="pt-2">
                  <button
                    type="submit"
                    :disabled="loading"
                    class="btn-geo-primary cursor-pointer disabled:opacity-50"
                  >
                    <span v-if="loading">{{ t('contact.submittingBtn') }}</span>
                    <span v-else>{{ t('contact.submitBtn') }}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Right Column: Info Cards & Maps Embed (5 Cols) -->
          <div class="lg:col-span-5 space-y-4">

            <!-- Card 1: CONTACT PERSON -->
            <div class="p-6 sm:p-7 rounded-3xl geo-card flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span class="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748b] font-semibold mb-1">CONTACT PERSON</span>
                <a href="tel:08139840986" class="font-display font-bold text-xl text-white hover:text-[#18b8ea] transition-colors block">
                  0813 9840 986
                </a>
                <span class="font-body text-xs text-[#94a3b8]">Call or WhatsApp</span>
              </div>
            </div>

            <!-- Card 2: EMAIL -->
            <div class="p-6 sm:p-7 rounded-3xl geo-card flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span class="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748b] font-semibold mb-1">EMAIL</span>
                <a href="mailto:info.TGI@terrabytegeosystem.com" class="font-mono text-sm sm:text-base font-semibold text-white hover:text-[#18b8ea] transition-colors block break-all">
                  info.TGI@terrabytegeosystem.com
                </a>
              </div>
            </div>

            <!-- Card 3: OFFICE -->
            <div class="p-6 sm:p-7 rounded-3xl geo-card flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-[#18b8ea]/10 border border-[#18b8ea]/25 flex items-center justify-center text-[#18b8ea] flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span class="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748b] font-semibold mb-1">OFFICE</span>
                <p class="font-body text-sm text-white leading-relaxed">
                  Jl. Raya Semplak No.52, Semplak, Bogor, Indonesia
                </p>
              </div>
            </div>

            <!-- Card 4: GOOGLE MAPS EMBED CONTAINER -->
            <div class="rounded-3xl overflow-hidden geo-card shadow-lg h-64 relative border border-white/10">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.662283088267!2d106.7580649758784!3d-6.564249993429115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4fae8590ef5%3A0x6b772cbe9b73ad67!2sJl.%20Raya%20Semplak%20No.52%2C%20Semplak%2C%20Kec.%20Bogor%20Bar.%2C%20Kota%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                class="w-full h-full border-0 filter contrast-125 brightness-90 grayscale-[25%]"
                allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const loading = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  interestedIn: 'Products (radar, GNSS, USV)',
  message: ''
})

const handleSubmit = async () => {
  loading.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        fullName: form.name,
        companyName: form.company,
        email: form.email,
        phone: form.phone,
        inquiryCategory: form.interestedIn,
        message: form.message
      }
    })
    submitted.value = true
  } catch (err) {
    submitted.value = true
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Contact Us — Let’s read the ground together | Terrabyte',
  meta: [
    {
      name: 'description',
      content: 'Questions about products, TerraPulse-AI or a project? Send us a message and our team will get back to you.'
    }
  ]
})
</script>
