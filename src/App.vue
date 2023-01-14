<template>
  <div id="app">
    <!-- 이부분에는 헤더를 놓을 수 있음 -->
    여기서부터 코드를 시작합니다!
    <router-view></router-view>
    <!-- 이 부분에는 footer를 위치시킬 수 있음 -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
