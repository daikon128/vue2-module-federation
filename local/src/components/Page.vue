<template>
  <div>
    <todo-search @search-todo-list="setTodoList"></todo-search>
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
  },
  methods: {
    setTodoList(todoList) {
      this.todoList = todoList
    }
  }
}
</script>
