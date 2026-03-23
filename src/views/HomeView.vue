<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ServicesHighlightCards from '@/components/ServicesHighlightCards.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <div>
    <HeroBanner />
    <!-- Faixa branca (#FFFFFF) com cantos superiores arredondados sobre o hero -->
    <div
      class="relative z-10 -mt-32 overflow-hidden rounded-t-[1.5rem] rounded-b-2xl bg-[#FFFFFF] lg:-mt-12 lg:rounded-t-[2.25rem] lg:rounded-b-[2rem]"
    >
      <div
        class="px-4 pt-12 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pt-20 lg:pb-14 xl:px-10"
        data-aos="fade-up"
      >
        <div class="mx-auto max-w-6xl">
          <ServicesHighlightCards />
        </div>
      </div>
      <ServicesSection />
    </div>
    <!-- Fora do overflow-hidden para o bloco da citação ir até a borda da tela no mobile -->
    <ContactSection />
  </div>
</template>
