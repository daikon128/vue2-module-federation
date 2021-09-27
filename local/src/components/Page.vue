<template>
  <div>
    page
    <custom-header></custom-header>
    <todo-list :todoList="todoList"></todo-list>
    <big-adsense></big-adsense>
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader"

export default {
  name: "Page",
  components: {
    CustomHeader
  },
  data() {
    return {
      todoList:[]
    }
  }
}
</script>
