<template>
  <div>
    <fieldset>
      <legend>Todo Toggle</legend>
    </fieldset>
    <fieldset>
      <legend>Todo Search</legend>
      <TodoSearch @search-todo-list="setTodoList"/>
    </fieldset>
    <fieldset>
      <legend>Todo List</legend>
      <TodoList :todo-list="todoList"/>
    </fieldset>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoSearch from "@/components/TodoSearch";
export default {
  name: "TodoListSandbox",
  components: {TodoSearch, TodoList},
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    setTodoList(todoList) {
      console.log("todo")
      console.log(todoList)
      this.todoList = todoList
    }
  }
}
</script>

<style scoped>
fieldset {
  background-color: white;
}
</style>