<template>
    <aside
        class="fixed inset-y-0 left-0 z-20 flex flex-col h-screen max-w-sm overflow-hidden transition-all bg-gray-800 border-r border-gray-700 shadow-2xl w-80">

        <header
            class="relative flex items-center justify-center w-full h-16 space-x-2 shrink-0 before:contents-[''] before:absolute before:bottom-0 before:w-full before:h-px before:bg-gradient-to-r before:from-primary-500/20 before:via-primary-500 before:to-primary-500/20">

            <div class="flex items-center justify-between w-full px-4">

                <a href="#" class="flex items-center text-white w-fit overflow-clip h-fit">

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

                </a>

                <button type="button"
                    class="flex items-center justify-center w-10 h-10 transition rounded-full shrink-0 hover:bg-gray-500/5 focus:bg-gray-500/10">

                    <span class="flex flex-shrink-0 w-6 h-6 fill-primary-500">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" />
                        </svg>

                    </span>

                </button>

            </div>

        </header>

        <nav class="flex flex-col flex-1 py-6 overflow-x-auto ">

            <ul class="px-6 space-y-6">

                <li>

                    <ul class="-mx-3 space-y-1 text-sm">

                        <li class="overflow-hidden">

                            <router-link :to="{ name: 'user-profile' }"
                                class="flex items-center justify-center gap-3 px-3 py-2 font-medium text-white transition rounded-lg bg-primary-500">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>


                                <div class="flex flex-1">

                                    <span>
                                        Perfil
                                    </span>

                                </div>

                            </router-link>

                        </li>

                    </ul>

                </li>

                <li>

                    <div class="-mr-6 border-t border-gray-700"></div>

                </li>

                <li>

                    <button class="flex items-center justify-between w-full">

                        <div class="flex items-center gap-4 text-gray-300">

                            <p class="flex-1 text-xs font-bold tracking-wider uppercase">Documentos</p>

                        </div>

                        <svg class="w-3 h-3 text-gray-600 transition -rotate-180 dark:text-gray-300"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>

                    </button>

                    <ul class="mt-2 -mx-3 space-y-1 text-sm">

                        <li class="overflow-hidden">

                            <router-link :to="{ name: 'templates' }"
                                class="flex items-center justify-center gap-3 px-3 py-2 font-medium text-gray-300 transition rounded-lg focus:bg-gray-500/5 hover:bg-gray-700">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>

                                <div class="flex flex-1">

                                    <span>
                                        Modelos
                                    </span>

                                </div>

                            </router-link>

                        </li>

                        <li class="overflow-hidden">

                            <router-link :to="{ name: 'curriculum-vitae' }"
                                class="flex items-center justify-center gap-3 px-3 py-2 font-medium text-gray-300 transition rounded-lg focus:bg-gray-500/5 hover:bg-gray-700">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>

                                <div class="flex flex-1">

                                    <span>
                                        Currículos
                                    </span>

                                </div>

                            </router-link>

                        </li>

                    </ul>

                </li>

                <!-- <li>

                    <button class="flex items-center justify-between w-full">

                        <div class="flex items-center gap-4 text-gray-300">

                            <p class="flex-1 text-xs font-bold tracking-wider uppercase">Informações</p>

                        </div>

                        <svg class="w-3 h-3 text-gray-600 transition -rotate-180 dark:text-gray-300"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>

                    </button>

                    <ul class="mt-2 -mx-3 space-y-1 text-sm">

                        <li class="overflow-hidden">

                            <router-link :to="{ name: 'user-profile' }"
                                class="flex items-center justify-center gap-3 px-3 py-2 font-medium text-gray-300 transition rounded-lg focus:bg-gray-500/5 hover:bg-gray-700">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>

                                <div class="flex flex-1">

                                    <span>
                                        Usuário
                                    </span>

                                </div>

                            </router-link>

                        </li>

                    </ul>

                </li> -->

            </ul>

        </nav>

    </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>