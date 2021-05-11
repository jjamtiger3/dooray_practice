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
            text: '멘션된 업무',
            url: '/mention'
          },
          {
            class: 'fa-star',
            text: '별표 업무',
            url: '/important'
          },
          {
            class: 'fa-comment-o',
            text: '내가 쓴 댓글',
            url: '/comment'
          }
        ],
        generalArea: [
          {
            text: '전체 업무',
            url: '/all'
          },
          {
            text: '담당 업무',
            url: '/to'
          },
          {
            text: '참조 업무 ',
            url: '/cc'
          },
          {
            text: '보낸 업무',
            url: '/send'
          },
          {
            text: '임시 보관함',
            url: '/temp'
          }
        ],
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