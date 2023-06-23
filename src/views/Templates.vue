<template>
    <authenticated-layout>

        <template #navbar>

            <the-navbar>

                <template #breadcrumb>

                    <li>

                        <a href="#" class="text-gray-300">
                            Modelos
                        </a>

                    </li>

                    <li class="text-gray-400">/</li>

                    <li>

                        <a href="#" class="text-gray-400">
                            Lista
                        </a>

                    </li>

                </template>

            </the-navbar>

        </template>

        <template #header-title>
            Modelos
        </template>

        <template #content>

            <section>

                <div class="mx-auto max-w-7xl">

                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

                        <document-card></document-card>

                        <document-card></document-card>

                        <document-card></document-card>

                        <document-card></document-card>

                        <document-card></document-card>

                        <document-card></document-card>

                    </div>

                </div>

            </section>

        </template>
    </authenticated-layout>
</template>

<script setup>
import DocumentCard from 'components/DocumentCard.vue';
import AuthenticatedLayout from 'layouts/AuthenticatedLayout.vue';
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<style lang="scss" scoped></style>