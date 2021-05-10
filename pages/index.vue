<template>
  <div>
    <global-navbar></global-navbar>
    <left-menu></left-menu>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({})
</script>
<script>
export default {
  created() {
    this.$router.push('/project')
  }
}
</script>
<style>
  @import url('../node_modules/font-awesome/css/font-awesome.min.css');
</style>