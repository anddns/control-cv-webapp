<template>
  <the-sidebar />

  <div class="flex flex-col flex-1 w-screen h-full transition-all gap-y-6 pl-80">

    <slot name="navbar" />

    <div class="flex-1 w-full px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">

      <div class="space-y-6">

        <header class="items-start justify-between space-y-2 sm:flex sm:space-y-0 sm:space-x-4 sm:py-4">

          <div>

            <h1 class="text-2xl font-bold tracking-tight">
              <slot name="header-title"></slot>

            </h1>

          </div>

        </header>

        <slot name="content"></slot>

      </div>

    </div>

    <footer class="py-4 shrink-0">

      <div class="flex items-center justify-center">

        <a href="#" target="_blank" rel="noopener noreferrer"
          class="flex flex-col items-center text-center text-gray-300 transition hover:text-primary-500">

          <span class="flex items-center justify-center w-fit h-fit overflow-clip">

            <svg width="85" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.702 25.827c-1.906 0-3.472-.418-4.698-1.255C1.778 23.735.92 22.58.43 21.104c-.48-1.483-.56-3.19-.236-5.12.315-1.94.965-3.65 1.951-5.133.995-1.492 2.246-2.652 3.754-3.48 1.508-.838 3.194-1.256 5.058-1.256 1.55 0 2.871.286 3.965.858 1.102.563 1.923 1.363 2.461 2.398.547 1.028.758 2.23.634 3.605h-4.313c-.016-.92-.302-1.686-.857-2.3-.556-.621-1.368-.932-2.437-.932-.928 0-1.781.249-2.56.746-.779.489-1.437 1.193-1.976 2.113-.539.92-.912 2.022-1.119 3.306-.215 1.301-.211 2.42.013 3.356.232.928.65 1.645 1.255 2.15.613.497 1.388.746 2.324.746.663 0 1.28-.124 1.852-.373a4.454 4.454 0 0 0 1.504-1.106c.44-.48.783-1.065 1.032-1.753h4.3a8.942 8.942 0 0 1-1.815 3.592 9.018 9.018 0 0 1-3.206 2.436c-1.276.58-2.714.87-4.313.87ZM32.34 6.364l-.585 3.48H20.793l.572-3.48h10.974ZM24.82 1.79h4.5l-2.984 17.922c-.091.605-.074 1.07.05 1.392.132.315.344.53.634.647a2.76 2.76 0 0 0 1.006.174c.274 0 .53-.021.771-.062.24-.05.43-.087.572-.112l.199 3.517c-.274.083-.643.174-1.107.273-.455.1-1.002.158-1.64.175-1.144.024-2.138-.15-2.983-.523-.837-.38-1.45-.965-1.84-1.752-.38-.795-.468-1.79-.26-2.983L24.82 1.79Zm8.1 23.664 3.182-19.09h4.363l-.535 3.181h.2c.521-1.102 1.259-1.95 2.212-2.547.96-.605 1.988-.908 3.082-.908.257 0 .534.013.833.037.298.017.555.046.77.087l-.696 4.14c-.19-.067-.489-.125-.895-.175a8.175 8.175 0 0 0-1.18-.087c-.82 0-1.583.178-2.287.535a5.074 5.074 0 0 0-1.765 1.454 4.797 4.797 0 0 0-.932 2.15L37.42 25.454h-4.5ZM55.557 0 51.33 25.454h-4.5L51.057 0h4.5Z"
                fill="currentColor" />
              <path
                d="M60.557 11.314a4.4 4.4 0 0 1 4.4-4.4h8.2a4.4 4.4 0 0 1 4.4 4.4v8.2a4.4 4.4 0 0 1-4.4 4.4h-8.2a4.4 4.4 0 0 1-4.4-4.4v-8.2Z"
                stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
              <path
                d="M65.557 6.314a4.4 4.4 0 0 1 4.4-4.4h8.2a4.4 4.4 0 0 1 4.4 4.4v8.2a4.4 4.4 0 0 1-4.4 4.4h-8.2a4.4 4.4 0 0 1-4.4-4.4v-8.2Z"
                stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
            </svg>

          </span>

          <span>
            v1.0.0
          </span>

        </a>

      </div>

    </footer>

  </div>
</template>

<script setup>
import TheSidebar from '@/components/TheSidebar.vue';
</script>

<style lang="scss" scoped></style>
