<template>
  <div>
    <global-navbar></global-navbar>
    <left-menu v-bind:menuData="this.menuData"></left-menu>
    <div class="project-container">Calendar</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuData: {
        button: {
          icon: {
            class: 'fa-plus',
          },
          class: 'new-calendar',
          text: '새 일정',
        },
        topArea: []
      }
    }
  }
}
</script>
<style scoped>
    .project-container {
        display: inline-flex;
    }
</style>