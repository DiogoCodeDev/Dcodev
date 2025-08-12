<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const openWhatsApp = () => {
  const phone = '5519983904078'
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web.')

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-gray-900/95 backdrop-blur-md transition-all duration-300"
    :class="{ 'bg-gray-900/95 shadow-2xl': isScrolled }">
    <div class="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
      <!-- Left: Navigation Links (Desktop) -->
      <div class="hidden gap-8 lg:flex">
        <a href="#" class="relative text-sm font-medium text-white transition-all duration-300 hover:text-green-400"
          :class="{ 'text-green-400': true }">
          Home
          <div class="absolute right-0 -bottom-2 left-0 h-0.5 bg-green-400"></div>
        </a>
        <a href="#"
          class="text-sm font-medium text-white transition-all duration-300 hover:text-green-400">Orçamento</a>
        <a href="#"
          class="text-sm font-medium text-white transition-all duration-300 hover:text-green-400">Templates</a>
        <a href="#" class="text-sm font-medium text-white transition-all duration-300 hover:text-green-400">Serviços</a>
      </div>

      <!-- Hamburger Menu (Mobile/Tablet) -->
      <button @click="toggleMobileMenu" class="flex h-8 w-8 flex-col items-center justify-center lg:hidden">
        <span class="h-0.5 w-6 bg-white"></span>
        <span class="mt-1.5 h-0.5 w-6 bg-white"></span>
        <span class="mt-1.5 h-0.5 w-6 bg-white"></span>
      </button>

      <!-- Center: Brand Name - Always Centered -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <img src="../assets/branding/dcodev.webp" alt="Decodev Logo" class="h-6 w-auto" />
      </div>

      <!-- Right: Social Media Icons -->
      <div class="flex hidden gap-3 lg:flex">
        <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
          target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:text-gray-900">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
          target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:text-gray-900">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
          target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:text-gray-900">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
          target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:text-gray-900">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 18.5c-.2.3-.5.4-.8.4-.1 0-.2 0-.3-.1l-2.1-1.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.1 1.1c-.1.1-.2.1-.3.1-.3 0-.6-.1-.8-.4-.2-.3-.2-.6-.1-.9l.4-2.4c0-.1 0-.2-.1-.3l-1.9-1.9c-.2-.2-.3-.5-.2-.8.1-.3.3-.5.6-.6l2.6-.4c.1 0 .2-.1.3-.2l1.4-2.8c.2-.3.5-.5.9-.5s.7.2.9.5l1.4 2.8c.1.1.2.2.3.2l2.6.4c.3.1.5.3.6.6.1.3 0 .6-.2.8l-1.9 1.9c-.1.1-.1.2-.1.3l.4 2.4c.1.3 0 .6-.1.9z" />
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
          target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:text-gray-900">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M22 7h-7V6c0-.5.5-1 1-1h5c.5 0 1 .5 1 1v1zm-7 4v1h7v-1h-7zm0 2v1h6v-1h-6zm0 2v1h7v-1h-7zm0 2v1h5v-1h-5zM2 6v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm2 0h16v16H4V6z" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen"
      class="absolute top-full right-0 left-0 border-b border-white/10 bg-gray-900 backdrop-blur-md lg:hidden">
      <div class="space-t-6 px-4 py-6">
        <a href="#"
          class="block border-b border-gray-700 py-4 text-lg font-medium text-white transition-colors hover:text-green-400">
          Home
        </a>
        <a href="#"
          class="block border-b border-gray-700 py-4 text-lg font-medium text-white transition-colors hover:text-green-400">
          Orçamento
        </a>
        <a href="#"
          class="block border-b border-gray-700 py-4 text-lg font-medium text-white transition-colors hover:text-green-400">
          Templates
        </a>
        <a href="#"
          class="block border-b border-gray-700 py-4 text-lg font-medium text-white transition-colors hover:text-green-400">
          Serviços
        </a>

        <!-- Social Media Icons in Mobile Menu -->
        <div class="border-t border-gray-700 pt-4">
          <p class="mb-3 text-sm text-gray-400">Redes Sociais</p>
          <div class="flex gap-5">
            <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
              target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-green-500 hover:text-gray-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
              target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-green-500 hover:text-gray-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
              target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-green-500 hover:text-gray-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
              target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-green-500 hover:text-gray-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 18.5c-.2.3-.5.4-.8.4-.1 0-.2 0-.3-.1l-2.1-1.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-2.1 1.1c-.1.1-.2.1-.3.1-.3 0-.6-.1-.8-.4-.2-.3-.2-.6-.1-.9l.4-2.4c0-.1 0-.2-.1-.3l-1.9-1.9c-.2-.2-.3-.5-.2-.8.1-.3.3-.5.6-.6l2.6-.4c.1 0 .2-.1.3-.2l1.4-2.8c.2-.3.5-.5.9-.5s.7.2.9.5l1.4 2.8c.1.1.2.2.3.2l2.6.4c.3.1.5.3.6.6.1.3 0 .6-.2.8l-1.9 1.9c-.1.1-.1.2-.1.3l.4 2.4c.1.3 0 .6-.1.9z" />
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5519983904078&text=Olá! Gostaria de saber mais sobre os serviços de desenvolvimento web."
              target="_blank" rel="noopener noreferrer" @click="openWhatsApp"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-green-500 hover:text-gray-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22 7h-7V6c0-.5.5-1 1-1h5c.5 0 1 .5 1 1v1zm-7 4v1h7v-1h-7zm0 2v1h6v-1h-6zm0 2v1h7v-1h-7zm0 2v1h5v-1h-5zM2 6v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm2 0h16v16H4V6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* No custom styles needed - all styles converted to Tailwind classes */
</style>
