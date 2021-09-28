<template>
  <fieldset>
    <div name="big-adsense">BigAdsense dummy</div>
  </fieldset>
</template>

<script>
export default {
name: "BigAdsense"
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