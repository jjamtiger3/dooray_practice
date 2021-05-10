<template>
  <div>
    <global-navbar></global-navbar>
    <left-menu v-bind:menuData="this.menuData"></left-menu>
    <div class="project-container">Drive</div>
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
          class: 'new-file',
          text: '파일 업로드',
          type: 'list'
        },
        topArea: [
          {
            class: 'fa-star',
            text: '별표 메일'
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