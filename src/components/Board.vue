<template>
  <div>
    Board 
    <div>bid: {{bid}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0
    }
  },
  created() {
    this.bid = this.$route.params.bid //동적 라우팅으로 넘어온 bid값을 확인할 때
  }
}
</script>

<style>

</style>
