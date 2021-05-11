<template>
    <div class="container">
        <button :class="this.menuData.button.class">
            <i class="fa" :class="this.menuData.button.icon.class"></i>
            {{this.menuData.button.text}}
            <i v-if="this.menuData.button.type == 'list'" class="fa fa-chevron-down"></i>
        </button>
        <ul>
            <li v-for="(menu, index) in this.menuData.topArea" :key="index">
                <i class="fa" :class="menu.class"></i>
                {{menu.text}}
            </li>
        </ul>
        <ul>
            <li v-for="(menu, index) in this.menuData.generalArea" :key="index">
                <i class="fa" :class="menu.class"></i>
                {{menu.text}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['menuData']
}
</script>
<style scoped>
    @import url('../assets/css/left-menu.css');
</style>