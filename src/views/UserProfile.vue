<template>
    <authenticated-layout>

        <template #navbar>

            <the-navbar>

                <template #breadcrumb>

                    <li>

                        <a href="#" class="text-gray-300">
                            Informações
                        </a>

                    </li>

                    <li class="text-gray-400">/</li>

                    <li>

                        <a href="#" class="text-gray-400">
                            Usuário
                        </a>

                    </li>

                </template>

            </the-navbar>

        </template>

        <template #header-title>
            Usuário
        </template>

        <template #content>

            <div class="flex flex-col w-full gap-6 mb-6">

                <section class="bg-gray-800 border border-gray-200/20 rounded-xl">

                    <div class="max-w-4xl px-4 py-8 mx-auto lg:py-16">

                        <form action="#">

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">

                                <div class="w-full">

                                    <label for="first-name" class="block mb-2 text-sm font-medium text-white">
                                        Nome
                                    </label>

                                    <input type="text" name="first-name" id="first-name"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Seu nome" required="">

                                </div>

                                <div class="w-full">

                                    <label for="second-name" class="block mb-2 text-sm font-medium text-white">
                                        Sobrenome
                                    </label>

                                    <input type="text" name="second-name" id="second-name"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Seu sobrenome" required="">

                                </div>

                                <div class="w-full">

                                    <label for="headline" class="block mb-2 text-sm font-medium text-white">
                                        Título
                                    </label>

                                    <input type="text" name="headline" id="headline"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Sua profissão" required="">

                                </div>

                                <div class="w-full">

                                    <label for="postal-code" class="block mb-2 text-sm font-medium text-white">
                                        CEP
                                    </label>

                                    <input type="text" name="postal-code" id="postal-code"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="00000-000" required="">

                                </div>

                                <div class="w-full">

                                    <label for="landline-phone" class="block mb-2 text-sm font-medium text-white">
                                        Telefone
                                    </label>

                                    <input type="text" name="landline-phone" id="landline-phone"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="+55 (00) 0000-0000" required="">

                                </div>

                                <div class="w-full">

                                    <label for="mobile-phone" class="block mb-2 text-sm font-medium text-white">
                                        Celular
                                    </label>

                                    <input type="text" name="mobile-phone" id="mobile-phone"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="+55 (00) 9 0000-0000" required="">

                                </div>

                                <div class="w-full">

                                    <label for="city" class="block mb-2 text-sm font-medium text-white">
                                        Cidade
                                    </label>

                                    <input type="text" name="city" id="city"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Fortaleza" required="">

                                </div>

                                <div class="w-full">

                                    <label for="federative-unit" class="block mb-2 text-sm font-medium text-white">
                                        Estado
                                    </label>

                                    <input type="text" name="federative-unit" id="federative-unit"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Ceará" required="">

                                </div>

                                <div class="sm:col-span-2">

                                    <label for="profile" class="block mb-2 text-sm font-medium text-white">
                                        Perfil
                                    </label>

                                    <textarea id="profile" rows="8"
                                        class="block w-full p-2.5 text-sm rounded-lg border transition duration-200 text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="Seu resumo profissional">
                                    </textarea>

                                </div>

                            </div>

                            <div class="flex justify-end">


                                <button type="submit"
                                    class="px-5 py-2.5 mt-4 sm:mt-6 justify-center space-x-2 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="flex-shrink w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />

                                        <span class="sr-only">Salvar informaçẽso de usuário</span>
                                    </svg>


                                    <span class="block md:hidden lg:block">Salvar</span>

                                </button>

                            </div>

                        </form>

                    </div>

                </section>

            </div>

        </template>

    </authenticated-layout>
</template>

<script setup>
import AuthenticatedLayout from 'layouts/AuthenticatedLayout.vue';
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<style lang="scss" scoped></style>