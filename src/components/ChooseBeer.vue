<script setup lang="ts">

defineProps<{
    name: string
}>()

let show = $ref(false);

function clicked() {
    var parms = { 'beer': '1.5L new beer' };
    window.webkit.messageHandlers.chooseBeer.postMessage(parms);
}

onMounted(() => {
    // @ts-ignore
    window.onMessage = () => {
        show = !show;
    }
});

</script>

<template>
    <div class="flex flex-row justify-evenly h-44">
        <div class="inline-flex justify-center items-center aspect-[4/3] bg-cyan-200">1</div>
        <div class="inline-flex justify-center items-center aspect-[4/3] bg-red-400">2</div>
        <div class="inline-flex justify-center items-center aspect-[4/3] bg-red-400">hello, {{ name }}</div>
    </div>
    <button @click="clicked">click</button>
    <div v-show="show">native to show</div>
</template>
