<template>
    <div class="p-8">
        <div class="mb-8">
            <h1>What I use</h1>
            <div class="divider"></div>
        </div>
        <ul class="grid grid-cols-5 gap-16">
            <li v-for="item in skills">
                <SkillItem :name="item.name" :logo="item.logo"/>
            </li>
        </ul>
    </div>
</template>

<script setup>
import SkillItem from "@/components/SkillItem.vue";

const skills = [
    {
        name: 'HTML',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'
    },
    {
        name: 'CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'
    },
    {name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'},
    {name: 'VueJS', logo: 'https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png'},
    {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
    },

]
</script>

<style scoped>

</style>