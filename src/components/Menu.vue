<script lang="ts" setup>
import { toggleDark } from '~/composables/dark';
import { isDark } from '~/composables/dark';
</script>

<template>
    <nav class="pt-6 text-xl scale-125">
        <RouterLink class="mx-2 hover:text-green-600" to="/" title="首页">
            <i class="ri-home-2-line"></i>
        </RouterLink>

        <button class="mx-2 hover:text-yellow-400" @click="toggleDark()">
            <i :class="isDark ? 'ri-sun-line' : 'ri-moon-line'"></i>
        </button>

        <RouterLink class="mx-2 hover:text-orange-400" to="/help" title="帮助">
            <i class="ri-question-line"></i>
        </RouterLink>

        <RouterLink class="mx-2 hover:text-blue-400" to="/about" title="关于">
            <i class="ri-information-line"></i>
        </RouterLink>

        <a class="mx-2 hover:text-pink-400" rel="noreferrer" href="https://space.bilibili.com/697166795">
            <i class="ri-bilibili-line"></i>
        </a>

        <a class="mx-2 hover:text-black-400" rel="noreferrer">
            <i class="ri-github-line"></i>
        </a>
    </nav>
</template>