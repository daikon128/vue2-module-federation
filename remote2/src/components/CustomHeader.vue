<template>
  <div class="header">
    <ul>
      <li>
        トップ
      </li>
      <li>
        概要
      </li>
      <li>
        設定
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  name: "CustomHeader"
}
</script>

<style scoped>
.header {
  display: flex;
  height: 60px;
  align-items: center;
}

.header nav {
  margin-left: auto;
}

.header ul {
  list-style: none;
  border: solid;
  border-color: black;
  display: flex;
}

.header ul li {
  margin-left: 20px;
}

</style>