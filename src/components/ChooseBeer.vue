<script setup lang="ts">

defineProps<{
    name: string
}>()

</script>

<template>
    <div class="flex flex-row justify-evenly h-44">
        <div class="inline-flex justify-center items-center aspect-[4/3] bg-cyan-200">1</div>
        <div class="inline-flex justify-center items-center aspect-[4/3] bg-red-400">2</div>
        <div class="inline-flex justify-center items-center aspect-[4/3] bg-red-400">hello, {{ name }}</div>
    </div>
</template>
