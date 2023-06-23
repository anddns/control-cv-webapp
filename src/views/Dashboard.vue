<template>
   <authenticated-layout>

      <template #navbar>

         <the-navbar />

      </template>

      <template #header-title>
         Dashboard
      </template>

      <template #content>
         <div class="grid w-full grid-cols-3 gap-6 mb-6"></div>
      </template>

   </authenticated-layout>
</template>

<script setup>
import AuthenticatedLayout from "layouts/AuthenticatedLayout.vue";
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<style lang="scss" scoped></style>