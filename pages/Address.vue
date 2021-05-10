<template>
  <div>
    <global-navbar></global-navbar>
    <left-menu v-bind:menuData="this.menuData"></left-menu>
    <div class="project-container">Address</div>
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
          class: 'new-address',
          text: '새 연락처',
        },
        topArea: [
          {
            class: 'fa-star',
            text: '별표 연락처'
          }
        ]
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