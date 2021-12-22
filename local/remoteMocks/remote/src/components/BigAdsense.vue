<template>
  <fieldset>
    <div name="big-adsense">BigAdsense dummy</div>
    <div name="user-optimal-adsense">{{ userOptimalAdsense }}</div>
  </fieldset>
</template>

<script>
export default {
  name: "BigAdsense",
  props: ['user'],
  computed: {
    userOptimalAdsense() {
      if (this.user == null) {
        return "none"
      }
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
fieldset {
  background: repeating-linear-gradient(
      45deg,
      #ffffff,
      #ffffff 28.75px,
      #dddddd 28.75px,
      #dddddd 57.5px
  );
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
}
div {
  display: block;
  background: #fffe;
  border-radius: 0.25rem;
  padding: 0.5rem;
}
</style>