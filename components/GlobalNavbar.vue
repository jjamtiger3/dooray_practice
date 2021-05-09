<template>
    <div class="global-navbar">
        <button class="fa fa-clock-o"></button>
        <nuxt-link :class="{active: currentUrl === '/project'}" to="/project" @click.native="changeUrlState('/project')" >프로젝트</nuxt-link>
        <nuxt-link :class="{active: currentUrl === '/mail'}" to="/mail" @click.native="changeUrlState('/mail')" > 메일</nuxt-link>
        <nuxt-link :class="{active: currentUrl === '/calendar'}" to="/calendar" @click.native="changeUrlState('/calendar')" >캘린더</nuxt-link>
        <nuxt-link :class="{active: currentUrl === '/drive'}" to="/drive" @click.native="changeUrlState('/drive')">드라이브</nuxt-link>
        <nuxt-link :class="{active: currentUrl === '/wiki'}" to="/wiki" @click.native="changeUrlState('/wiki')">위키</nuxt-link>
        <nuxt-link :class="{active: currentUrl === '/address'}" to="/address" @click.native="changeUrlState('/address')">주소록</nuxt-link>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            currentUrl: 'menu/currentUrl'
        })
    },
    methods: {
        ...mapMutations({
            changeUrlState: 'menu/changeUrlState'
        })
    }
}
</script>
<style scoped>
    @import url('../assets/css/global-navbar.css');
</style>