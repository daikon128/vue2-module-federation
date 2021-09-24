<template>
  <div class="background-stripe">
    <fieldset>
      <legend>Adsense Toggle</legend>
    </fieldset>
    <fieldset>
      <legend>Big Adsense</legend>
      <BigAdsense />
    </fieldset>
  </div>
</template>

<script>
import BigAdsense from "@/components/BigAdsense";
export default {
name: "AdsenseSandBox",
  components: {BigAdsense}
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