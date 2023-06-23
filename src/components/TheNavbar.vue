<template>
    <header class="sticky top-0 z-10 flex items-center w-full h-16 bg-gray-800 border-b border-gray-700 shrink-0">

        <div class="flex items-center w-full px-8">

            <div class="flex items-center justify-between flex-1">

                <div class="flex-1">

                    <ul class="flex items-center gap-4 text-sm font-medium text-white">
                        <slot name="breadcrumb" />

                    </ul>

                </div>

                <div class="ml-4 cursor-pointer">

                    <button class="block" type="button">

                        <div
                            class="w-10 h-10 bg-gray-900 bg-center bg-cover rounded-full bg-[url('https://ui-avatars.com/api/?name=D+U&color=FFFFFF&background=111827')]">
                        </div>

                    </button>

                </div>

            </div>

        </div>

    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>