<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import { isDark } from './composables/dark';

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
useHead({
  title: 'dun dun dun',
  meta: [
    {
      name: 'description',
      content: '好的，今天我们来做菜！',
    },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#121212' : '#fff'),
    },
  ],
})

</script>

<template>
  <RouterView />
</template>
