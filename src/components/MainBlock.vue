<template>
    <main class="flex justify-center">
        <div class="w-3/4">
            <div>
                <h1>Skills</h1>
                <div class="divider"></div>
            </div>
            <ul class="grid grid-cols-5 grid-rows-2 gap-16">
                <li v-for="item in skills">
                    <SkillItem :name="item.name" :logo="item.logo"/>
                </li>
            </ul>
        </div>
    </main>
</template>

<script setup lang="ts">
import SkillItem from "./SkillItem.vue";

const skills = [
    {
        name: 'HTML',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'
    },
    {
        name: 'CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'
    },
    {name: 'VueJS', logo: 'https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png'},
    {name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'},
    {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
    },

]
</script>

<style scoped>

</style>