<template>
  <div name="big-adsense">
    <div>大きなユーザ最適化された広告</div>
    <div name="user-optimal-adsense">{{ userOptimalAdsense }}</div>
  </div>
</template>

<script>
export default {
  name: "BigAdsense",
  props: ['user'],
  computed: {
    userOptimalAdsense() {
      switch(this.user.id) {
        case 1: return '車'
        case 2: return 'ゲーム'
        default: return '食品'
      }
    }
  }

}
</script>

<style scoped>
div {
  color: aquamarine;
  background-color: black;
}
</style>