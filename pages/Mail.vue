<template>
  <div>
    <global-navbar></global-navbar>
    <left-menu v-bind:menuData="this.menuData"></left-menu>
    <div class="project-container">Mail</div>
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
          class: 'new-mail',
          text: '새 메일',
        },
        topArea: [
          {
            class: 'fa-envelope-o',
            text: '안 읽은 메일'
          },
          {
            class: 'fa-star',
            text: '별표 메일'
          },
          {
            class: 'fa-paperclip',
            text: '첨부 메일'
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