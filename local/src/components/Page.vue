<template>
  <div>
    page
    <custom-header></custom-header>
    <todo-list :todoList="todoList"></todo-list>
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
