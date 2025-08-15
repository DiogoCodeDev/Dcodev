<template>
  <section
    class="moving-grid bg-gray-900 px-4 py-20 lg:px-8"
    style="
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
    "
  >
    <div class="mx-auto max-w-6xl">
      <!-- Top Section: Contact & Statistics -->
      <div class="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2" data-aos="fade-up">
        <!-- Left: Contact Section -->
        <div class="space-y-6 text-center lg:text-start" data-aos="fade-right" data-aos-delay="100">
          <div>
            <blockquote
              class="mb-6 text-2xl leading-tight font-bold text-white uppercase lg:text-3xl"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Velocidade na entrega
            </blockquote>
            <p
              class="leading-relaxed text-gray-400 lg:w-[32rem]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Serviço que oferece fácil acesso e condições de contato ágeis, com preços estruturados
              para atender desde pequenos empreendedores até grandes empresas.
            </p>
          </div>

          <!-- Statistics -->
          <div
            class="stats-container mb-8 grid grid-cols-2 gap-8 lg:mb-0 lg:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div data-aos="zoom-in" data-aos-delay="300">
              <div class="mb-2 text-4xl font-bold text-green-400 lg:text-5xl">
                {{ experienceCount }}
              </div>
              <p class="text-sm text-gray-400">Anos de Experiência</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="350">
              <div class="mb-2 text-4xl font-bold text-green-400 lg:text-5xl">
                {{ clientsCount }}
              </div>
              <p class="text-sm text-gray-400">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>

        <!-- Right: Creativity Quote & Statistics -->
        <div class="space-y-6" data-aos="fade-up" data-aos-delay="150">
          <a
            href="https://mpowersound.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <img
              class="mx-auto -mt-4 h-64 cursor-pointer transition-transform duration-300 hover:scale-105 lg:h-80"
              src="../assets/branding/mockup-mpowersound.png"
              alt="MPowerSound Mockup"
            />
          </a>
        </div>
      </div>

      <!-- Bottom Section: Service Cards -->
      <div
        class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          class="group relative overflow-hidden rounded-xl bg-gray-800 p-6 transition-colors hover:bg-gray-700 lg:p-8"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div class="relative z-10">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-white lg:text-2xl">Product Designer</h3>
            <p class="text-sm text-white/80">4 Projetos</p>
          </div>
        </div>

        <div
          class="group relative overflow-hidden rounded-xl bg-gray-800 p-6 transition-colors hover:bg-gray-700 lg:p-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="relative z-10">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700 transition-colors group-hover:bg-gray-600"
            >
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-white lg:text-2xl">Branding Designer</h3>
            <p class="text-sm text-gray-400">4 Projetos</p>
          </div>
        </div>

        <div
          class="group relative overflow-hidden rounded-xl bg-gray-800 p-6 transition-colors hover:bg-gray-700 lg:p-8"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <div class="relative z-10">
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700 transition-colors group-hover:bg-gray-600"
            >
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-white lg:text-2xl">Full Stack Developer</h3>
            <p class="text-sm text-gray-400">+20 Projetos</p>
          </div>
        </div>
      </div>

      <a
        href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Vi a mega promoção no site e gostaria de saber mais sobre os serviços de desenvolvimento web."
        target="_blank"
        rel="noopener noreferrer"
        @click="openWhatsApp"
        class="block grid cursor-pointer grid-cols-1 gap-12 rounded-xl bg-green-600/40 duration-300 hover:scale-105 lg:grid-cols-2"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <!-- Left: Contact Section -->
        <div class="space-y-6 p-8">
          <div>
            <h2 class="mb-4 text-3xl font-bold text-white uppercase lg:text-3xl">Mega Promoção</h2>
            <p class="leading-relaxed text-white">
              Ao fechar negócio conosco, você garante armazenamento e hospedagem em nosso domínio
              sem custo adicional.
            </p>
          </div>
          <div
            class="inline-flex items-center gap-2 text-lg font-medium text-green-600 transition-colors hover:text-green-500"
          >
            (19) 98390-4078
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phone = '5519983904078'
const message = encodeURIComponent(
  'Olá! Vi a mega promoção no site e gostaria de saber mais sobre os serviços de desenvolvimento web.',
)

// Counter refs
const experienceCount = ref(0)
const clientsCount = ref(0)
let isAnimating = false

// Detect if mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent,
)

const openWhatsApp = () => {
  if (isMobile) {
    // For mobile, try to open WhatsApp app directly
    window.location.href = `whatsapp://send?phone=${phone}&text=${message}`
  } else {
    // For desktop, open WhatsApp Web
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank')
  }
}

// Counter animation function
const animateCounter = (target, ref) => {
  const duration = 2000 // 2 seconds
  const steps = 60
  const increment = target / steps
  const stepDuration = duration / steps

  let current = 0
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    ref.value = Math.floor(current)
  }, stepDuration)
}

// Intersection Observer for counter animation
onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimating) {
          isAnimating = true

          // Reset counters
          experienceCount.value = 0
          clientsCount.value = 0

          // Start animations
          setTimeout(() => animateCounter(4, experienceCount), 10)
          setTimeout(() => {
            animateCounter(2, clientsCount)
            // Reset animation flag after both animations complete
            setTimeout(() => {
              isAnimating = false
            }, 1000)
          }, 100)
        }
      })
    },
    { threshold: 0.5 },
  )

  // Observe the statistics container
  const statsContainer = document.querySelector('.stats-container')
  if (statsContainer) {
    observer.observe(statsContainer)
  }
})
</script>

<style scoped>
.moving-grid {
  animation: gridMove 2s linear infinite;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 -50px;
  }
}
</style>
