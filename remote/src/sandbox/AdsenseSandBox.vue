<template>
  <div class="background-stripe">
    <fieldset>
      <legend>Adsense Toggle</legend>
      <button name="change-user-1" @click="changeUser(1)">ユーザ1に切り替える</button>
      <button name="change-user-2" @click="changeUser(2)">ユーザ2に切り替える</button>
      <button name="change-user-3" @click="changeUser(3)">ユーザ3に切り替える</button>
    </fieldset>
    <fieldset>
      <legend>Big Adsense</legend>
      <BigAdsense :user="user"/>
    </fieldset>
  </div>
</template>

<script>
import BigAdsense from "@/components/BigAdsense";
export default {
  name: "AdsenseSandBox",
  components: {BigAdsense},
  data() {
    return {
      user: { id: 1 }
    }
  },
  methods: {
    changeUser(id) {
      this.user.id = id
    }
  }
}
</script>

<style scoped>
fieldset {
  background-color: white;
}

.background-stripe {
  background:repeating-linear-gradient(
      45deg,
      #ffffff,
      #ffffff 28.75px,
      #dddddd 28.75px,
      #dddddd 57.5px
  );
}
</style>