<template>
  <div>
    <global-navbar></global-navbar>
    <left-menu v-bind:menuData="this.menuData"></left-menu>
    <div class="project-container">Wiki</div>
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
          class: 'new-wiki',
          text: '새 페이지'
        },
        topArea: [
          {
            class: 'fa-star',
            text: '별표 페이지'
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