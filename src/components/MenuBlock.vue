<template>
    <header class="flex justify-center my-8">
        <menu>
            <ul class="flex justify-center gap-4 w-2/3">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
            </ul>
        </menu>
    </header>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style scoped>

</style>