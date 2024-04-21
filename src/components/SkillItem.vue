<template>
    <div class="skillItem">
        <img
                :src="props.logo"
                :alt="props.name"
                class="max-w-24 max-h-24"
        />
        <p>{{props.name}}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    logo: string
}>()

</script>

<style scoped>

</style>