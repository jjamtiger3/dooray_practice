<template>
  <div>
    <global-navbar></global-navbar>
    <left-menu v-bind:menuData="this.menuData"></left-menu>
    <div class="project-container">Projects!!!!</div>
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
          class: 'new-work',
          text: '새 업무',
        },
        topArea: [
          {
            class: 'fa-at',
            text: '멘션된 업무'
          },
          {
            class: 'fa-star',
            text: '별표 업무'
          },
          {
            class: 'fa-comment-o',
            text: '내가 쓴 댓글'
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