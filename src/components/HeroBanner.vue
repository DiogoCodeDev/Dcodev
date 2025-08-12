<script setup>
const openWhatsApp = () => {
  const phone = '5519983904078'
  const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para desenvolvimento de site.')

  // Detect if mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  if (isMobile) {
    // For mobile, try to open WhatsApp app directly
    window.location.href = `whatsapp://send?phone=${phone}&text=${message}`
  } else {
    // For desktop, open WhatsApp Web
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank')
  }
}
</script>
<template>
  <section class="moving-grid flex h-[42rem] items-center justify-between bg-gray-900 pt-16 lg:h-[36rem]" style="
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
    ">
    <div
      class="mx-auto grid w-full max-w-6xl grid-cols-1 items-center justify-evenly gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-0">
      <!-- Left Column: Main Heading -->
      <div class="flex flex-col justify-center text-center lg:text-left" data-aos="fade-right" data-aos-delay="100">
        <div class="mx-auto max-w-lg lg:mx-0">
          <p class="mb-4 text-lg font-normal text-gray-400" data-aos="fade-up" data-aos-delay="150">Olá, tudo bem?</p>
          <h1
            class="m-0 mb-5 font-sans text-4xl leading-tight font-bold text-white uppercase sm:text-5xl lg:text-6xl xl:text-7xl"
            data-aos="fade-up" data-aos-delay="200">
            Somos Dcodev
          </h1>
          <p class="font-regular m-0 mx-auto w-80 font-sans text-base leading-tight text-white opacity-90 sm:text-lg lg:w-full lg:text-xl"
            data-aos="fade-up" data-aos-delay="250">
            Melhores sites e estratégias para acelerar o crescimento
            <br class="hidden sm:block" />do seu negócio.
            <span class="rocket-shake ml-1 inline-block text-xl lg:text-2xl">🚀</span>
          </p>
        </div>
      </div>

      <!-- Right Column: Description and CTA -->
      <div class="mt-8 flex flex-col items-center gap-4 lg:mt-12 lg:items-end" data-aos="fade-left"
        data-aos-delay="200">
        <div class="relative w-full max-w-sm pl-6 lg:max-w-md xl:w-[26rem]" data-aos="fade-up" data-aos-delay="250">
          <div class="absolute top-2 left-0 h-2 w-2 rounded-full bg-green-400"></div>
          <p class="m-0 text-sm leading-relaxed font-normal text-gray-400 sm:text-base">
            Maior custo benefício em aplicações e Landing pages imersivas e funcionais.
          </p>
        </div>
        <div class="relative w-full max-w-sm pl-6 lg:max-w-md xl:w-[26rem]" data-aos="fade-up" data-aos-delay="300">
          <div class="absolute top-2 left-0 h-2 w-2 rounded-full bg-green-400"></div>
          <p class="m-0 text-sm leading-relaxed font-normal text-gray-400 sm:text-base">
            Soluções globais com site inteligente traduzido nos idiomas mais falados do mundo! 🇧🇷 🇺🇸
            🇪🇸
          </p>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de site."
          target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
          class="relative mt-6 h-14 w-full max-w-sm cursor-pointer rounded-xl bg-green-400 text-lg font-bold text-black uppercase duration-200 hover:opacity-90 sm:h-16 sm:text-xl lg:max-w-md xl:w-[26rem] flex items-center justify-center"
          data-aos="zoom-in" data-aos-delay="350">
          Quero meu site!
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.moving-grid {
  animation: gridMove 2s linear infinite;
}

.rocket-shake {
  animation: rocketShake 4s infinite;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 -50px;
  }
}

@keyframes rocketShake {

  0%,
  90%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  92% {
    transform: translateY(-2px) rotate(-2deg);
  }

  94% {
    transform: translateY(-1px) rotate(1deg);
  }

  96% {
    transform: translateY(-3px) rotate(-1deg);
  }

  98% {
    transform: translateY(-1px) rotate(2deg);
  }
}
</style>
