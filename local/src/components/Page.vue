<template>
  <div>
    <todo-search @search-todo-list="setTodoList"></todo-search>
    <todo-list :todoList="todoList"></todo-list>
    <big-adsense :user="user"></big-adsense>
  </div>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {
      todoList:[],
      user:{}
    }
  },
  created() {
    this.login()
  },
  methods: {
    login() {
      this.user = {id:1, name:"user1" }
    },
    setTodoList(todoList) {
      this.todoList = todoList
    }
  }
}
</script>
