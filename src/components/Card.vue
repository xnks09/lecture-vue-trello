<template>
  <div>
    Card
    <div>cid: {{cid}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0
    }
  },
  // route가 변경이 되면 cid를 변경
  watch: {
    '$route'() {
      this.cid = this.$route.params.cid
    }
  },
  created() {
    this.cid = this.$route.params.cid
  },
}
</script>

<style>

</style>
