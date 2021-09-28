<template>
  <div>
    <todo-list :todoList="todoList"></todo-list>
    <big-adsense></big-adsense>
  </div>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {
      todoList:[]
    }
  }
}
</script>
